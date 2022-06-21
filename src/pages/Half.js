import styles from './pages.module.css'
import { useSelector, useDispatch } from 'react-redux'

const Half = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const halfStateValue = () => {
    dispatch({ type: 'HALF' })
  }
  return (
    <div className={styles.centered}>
      <h1>STATE: {counter} </h1>
      <div className={styles.container}>
        <div className={styles.child}>
          <button onClick={halfStateValue}>/2</button>
        </div>
      </div>
      <h2>Half</h2>
    </div>
  )
}

export default Half
