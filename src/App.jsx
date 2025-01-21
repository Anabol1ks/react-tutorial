import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'
import { useState } from 'react'
import { ways, differences } from './data'

function App() {
  const [content, setContent] = useState('Нажми на кнопку')
  function handleClick(type) {
		// console.log('Кнопка нажата', type)
    setContent(type)
	}

  return (
		<div>
			<Header />
			<main>
				<section>
					<h3>Наш подход</h3>

					<ul>
						<WayToTeach {...ways[0]} />
						<WayToTeach {...ways[1]} />
						<WayToTeach {...ways[2]} />
					</ul>
				</section>
				<section>
					<h3>Для кнопки</h3>
					<Button onClick={() => handleClick('way')}>Подход</Button>
					<Button onClick={() => handleClick('easy')}>Подход</Button>
					<Button onClick={() => handleClick('program')}>Ещё подход</Button>
          
          <p>{differences[content]}</p>
				</section>
			</main>
		</div>
	)
}

export default App
