import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Global/nav";
import Home from "./components/Home/Home";
import BlogsPage from "./components/pages/blogs";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blogs" component={BlogsPage} />
      </Switch>
    </Router>
  );
}

export default App;
