import "./styles/main.css";
import sun from "./img/icons/sun.svg";
import moon from "./img/icons/moon.svg";
import inst from "./img/icons/instagram.svg";
import twitter from "./img/icons/twitter.svg";
import  linkedin from "./img/icons/linkedIn.svg";
import git from "./img/icons/gitHub.svg";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
function App() {
  return (
    <div className="App">

        <Navbar/>

        <Home/>

        <Footer/>

        <Projects/>

        <Contacts/>
    </div>
  );
}

export default App;
