import Button from './Button/Button'
import Modal from './Modal/Modal'

export default function EffectSection() {
  function openModal(){

  }
  return (
    <section>
      <h3>Effects</h3>
      <Button onClick={openModal}>Открыть информацию</Button>

      <Modal>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quia, quibusdam, quae voluptates quidem quod dolorum voluptatem quos doloremque. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae. Qu
        </p>
      </Modal>
    </section>
  )
}