import Button from './Button/Button'
import { useState } from 'react'
import { differences } from '../data'

export default function DifferencesSelection() {
	const [contentType, setContentType] = useState(null)
	function handleClick(type) {
		// console.log('Кнопка нажата', type)
		setContentType(type)
	}
	return (
		<section>
			<h3>Для кнопки</h3>
			<Button
				isActive={contentType === 'way'}
				onClick={() => handleClick('way')}
			>
				Подход
			</Button>
			<Button
				isActive={contentType === 'easy'}
				onClick={() => handleClick('easy')}
			>
				Подход
			</Button>
			<Button
				isActive={contentType === 'program'}
				onClick={() => handleClick('program')}
			>
				Ещё подход
			</Button>

			{/* { contentType ? (
              <p>{differences[contentType]}</p>
            ) : ( 
              <p>Нажми на кнопку</p> 
            )} */}

			{/* { !contentType ? <p>Нажми на кнопку</p> : null }
            { contentType ? <p>{differences[contentType]}</p> : null} */}

			{!contentType && <p>Нажми на кнопку</p>}
			{contentType && <p>{differences[contentType]}</p>}

			{/* {tabContent} */}
		</section>
	)
}
