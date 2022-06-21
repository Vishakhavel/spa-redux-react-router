import { Route } from 'react-router-dom'
import Increment from './pages/Increment'
import MainHeader from './components/MainHeader'
import Decrement from './pages/Decrement'
import Half from './pages/Half'
import Double from './pages/Double'
import Home from './pages/Home'
import { Fragment } from 'react-is'
const App = () => {
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
    </Fragment>
  )
}

export default App
