// import logo from './logo.svg'
import Navbar from './components/Global/nav'
import './App.css'
import Home from './components/Home/Home'
import BlogsPage from './components/pages/blogs'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blogs' component={BlogsPage} />
      </Switch>
    </Router>
  )
}

export default App
