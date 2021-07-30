<<<<<<< HEAD
import './App.css'

function App() {
  return <div>Hello World</div>
=======
import logo from './logo.svg';
import Navbar from './components/nav';
import './App.css';
import CreateBlogBox from './components/createBlogBox';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <CreateBlogBox id = "box"/>
      <div id = "sen">Organising Yourself</div>
    </Router>
  );
>>>>>>> 50f1a4adc08a2dbec005d30e481d23daa11407cb
}

export default App
