import { useEffect, useState } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'

export default function EffectSection() {
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])  

  useEffect(() => {
    async function fecthUsers() {
			setLoading(true)
			const response = await fetch('https://jsonplaceholder.typicode.com/users')
			const users = await response.json()
			setUsers(users)
			setLoading(false)
		}
    fecthUsers()
  }, [])

  return (
    <section>
      <h3>Effects</h3>
      <Button onClick={()=>setModal(true)}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quia, quibusdam, quae voluptates quidem quod dolorum voluptatem quos doloremque. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Qu
        </p>
        <Button onClick={() => setModal(false)}>Закрыть</Button>
      </Modal>
{/* 
      { loading && <p>Loading...</p>}

      {!loading && <ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>} */}

        {!loading ? (
          <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
    </section>
  )
}