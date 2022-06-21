import styles from './pages.module.css'
import { useSelector, useDispatch } from 'react-redux'

const Increment = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const incrementStateValue = () => {
    dispatch({ type: 'INCREMENT' })
  }
  return (
    <div className={styles.centered}>
      <h1>STATE: {counter} </h1>
      <div className={styles.container}>
        <div className={styles.child}>
          <button onClick={incrementStateValue}>+1</button>
        </div>
      </div>
      <h2>Increment</h2>
    </div>
  )
}

export default Increment
