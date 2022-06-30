import { Route } from 'react-router-dom'
import Increment from './pages/Increment'
import MainHeader from './components/MainHeader'
import Decrement from './pages/Decrement'
import Half from './pages/Half'
import Double from './pages/Double'
import Home from './pages/Home'
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import { Fragment } from 'react-is'
const App = () => {
  let history = useHistory()
  history.push('/half')
  // ;<Redirect to='/increment' />
  return (
    <Fragment>
      <MainHeader />
      {/* <Route path='/home'>
        <Home />
      </Route> */}
      <Route path='/increment'>
        <Increment />
      </Route>
      <Route path='/decrement'>
        <Decrement />
      </Route>

      <Route path='/double'>
        <Double />
      </Route>
      <Route path='/half'>
        <Half />
      </Route>
      <Route exact path='/'>
        <Half />
      </Route>
    </Fragment>
  )
}

export default App
