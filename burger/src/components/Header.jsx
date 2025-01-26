import { useState } from 'react'
import logoImg from '../assets/icons/logo.png'
import HeaderNav from './HeaderNav'

export default function Header() {
  const [currentType, setCurrentType] = useState('home')

  function handleClick(type) {
    setCurrentType(type)
  }

	return (
		<header className='header'>
			<img src={logoImg} alt='нет лого' className='header__logo' />

			<nav className='header__nav'>
				<ul className='header__list'>
					<HeaderNav
						isActive={currentType == 'home'}
						onClick={() => handleClick('home')}
					>
						HOME
					</HeaderNav>
					<HeaderNav
						isActive={currentType == 'pages'}
						onClick={() => handleClick('pages')}
					>
						PAGES
					</HeaderNav>
					<HeaderNav
						isActive={currentType == 'offer'}
						onClick={() => handleClick('offer')}
					>
						OUR OFFER
					</HeaderNav>
					<HeaderNav
						isActive={currentType == 'pricing'}
						onClick={() => handleClick('pricing')}
					>
						PRICING
					</HeaderNav>
					<HeaderNav
						isActive={currentType == 'shop'}
						onClick={() => handleClick('shop')}
					>
						SHOP
					</HeaderNav>
				</ul>
			</nav>

			<a href='#!' className='btn'>
				Order now
			</a>
		</header>
	)
}
