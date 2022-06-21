import styles from './pages.module.css'
import { useSelector, useDispatch } from 'react-redux'

const Double = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const doubleStateValue = () => {
    dispatch({ type: 'DOUBLE' })
  }
  return (
    <div className={styles.centered}>
      <h1>STATE: {counter} </h1>
      <div className={styles.container}>
        <div className={styles.child}>
          <button onClick={doubleStateValue}>x2</button>
        </div>
      </div>
      <h2>Double</h2>
    </div>
  )
}

export default Double
