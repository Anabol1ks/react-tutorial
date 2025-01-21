import logo from '/vite.svg'

export default function Header(){
  const now = new Date()

  return(
    <header>
      {/* <h3>Result University</h3> */}
      <img src={logo} alt="если нет иконки" />

      <span>Время сейчас: { now.toLocaleTimeString() }</span>
    </header>
  )
}