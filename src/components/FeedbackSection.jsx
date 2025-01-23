import { useState, useRef } from 'react'
import Button from './Button/Button'

function StateVsRef(){
	const input = useRef()
	const [show, setShow] = useState(false)

	function handleKeyDown(event){
		if (event.key === "Enter"){
			event.preventDefault() // предотвращает отправку формы

			setShow(true)
		}else{
			setShow(false)
		}
	}

	return (
		<dib>
			<h3>Input Value: {show && input.current.value}</h3>
			<input
				ref={input}
				type='text'
				onKeyDown={handleKeyDown}
				className="control"
			/>
		</dib>
	)
}

export default function FeedbackSection() {
  const [name, setName] = useState('')
	const [hasError, setHasError] = useState(false)
  const [reason, setReason] = useState('help')

  function hadleNameChange(event){
    setName(event.target.value)
		setHasError(event.target.value.trim().length === 0)
  }

	function toggleError(){
		setHasError((prev) => !prev)
	}

  return (
		<section>
			<h3>Обратная связь</h3>

			<Button onClick={toggleError}>Toggle Error</Button>

			<form className='container'>
				<label htmlFor='name'>Ваше имя</label>
				<input
					type='text'
					id='name'
					className='control'
					value={name}
					style={{
						border: hasError ? '1px solid red' : null,
					}}
					onChange={hadleNameChange}
				/>

				<label htmlFor='reason'>Причина обращения</label>
				<select
					id='reason'
					className='control'
					value={reason}
					onChange={event => setReason(event.target.value)}
				>
					<option value='error'>Ошибка</option>
					<option value='help'>Нужна помощь</option>
					<option value='suggest'>Предложение</option>
				</select>
				<pre>
					Name: {name}
					<br />
					Reasin {reason}
				</pre>

				<Button disabled={hasError} isActive={!hasError} >Отправить</Button>

				<StateVsRef />
			</form>
		</section>
	)
}