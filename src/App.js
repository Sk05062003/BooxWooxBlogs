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
}

export default App;
