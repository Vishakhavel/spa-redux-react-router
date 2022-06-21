import styles from './pages.module.css'
import { useSelector, useDispatch } from 'react-redux'

const Decrement = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const decrementStateValue = () => {
    dispatch({ type: 'DECREMENT' })
  }
  return (
    <div className={styles.centered}>
      <h1>STATE: {counter} </h1>
      <div className={styles.container}>
        <div className={styles.child}>
          <button onClick={decrementStateValue}>-1</button>
        </div>
      </div>

      <h2>click to DECREMENT the shared state</h2>
    </div>
  )
}

export default Decrement
