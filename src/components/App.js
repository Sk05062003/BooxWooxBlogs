// import logo from '../logo.svg's
import Navbar from './nav'
import './App.css'
import CreateBlogBox from './createBlogBox'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <CreateBlogBox id='box' />
      <div id='sen'>Organising Yourself</div>
    </Router>
  )
}

export default App
