// import logo from './logo.svg'
import Navbar from './components/Global/nav'
import './App.css'
import Home from './components/Home/Home'
import BlogsPage from './components/pages/blogs'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Pagination from './components/pages/pagination'
// import Pag1 from './components/pages/pag1'

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Pagination />
      <Pag1 />  */}
       <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blogs' component={BlogsPage} />
      </Switch>
    </Router>
  )
}

export default App
