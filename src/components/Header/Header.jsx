import logo from '/vite.svg'
import { useState } from 'react'
import './Header.css'

export default function Header(){
  const [now, setNow] = useState(new Date)

  setInterval(()=> setNow(new Date()),100)

  return(
    <header className='header'>
      <h3>ТИпо Заголовок</h3>
      <img src={logo} alt="если нет иконки" />

      <span>Время сейчас: { now.toLocaleTimeString() }</span>
    </header>
  )
}