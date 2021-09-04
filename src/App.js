import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Global/nav";
import Footer from './components/Global/Footer'
import Home from "./components/Home/index";
import BlogsPage from "./components/pages/blogs";
import Blog from "./components/pages/SingleBlog/Blog";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route exact path="/blogs" component={BlogsPage} />
        <Route exact path="/blogs/blog" component={Blog} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
