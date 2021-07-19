// import './App.css';
// import '@icon/icofont/icofont.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'aos/dist/aos.css';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'line-awesome/dist/line-awesome/css/line-awesome.min.css'
// import './style.css'
import AOS from 'aos';
import 'font-awesome/css/font-awesome.css'
import BlogPage from "./components/blog-page";
AOS.init();
function App() {
  return (
    <BlogPage />
  );
}

export default App;
