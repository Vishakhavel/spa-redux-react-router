import { NavLink } from 'react-router-dom'
import styles from './MainHeader.module.css'
const MainHeader = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} to='/half'>
            Half
          </NavLink>
        </li>
        <li>
          {/* <a href='/welcome'>Welcome</a> */}
          <NavLink activeClassName={styles.active} to='/increment'>
            Increment
          </NavLink>
        </li>
        <li>
          {/* <a href='/products'>Products</a> */}
          <NavLink activeClassName={styles.active} to='/decrement'>
            Decrement
          </NavLink>

          {/* links don't re render the pages. Links preserve the state */}
        </li>

        <li>
          <NavLink activeClassName={styles.active} to='/double'>
            Double
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default MainHeader
