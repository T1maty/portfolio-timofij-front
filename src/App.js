import "./styles/main.css";
import sun from "./components/btnDarkMode/sun.svg";
import moon from "./components/btnDarkMode/moon.svg";
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
import Project from "./pages/Project";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">

        <Router>
            <ScrollToTop/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/project/:id" element={<Project/>}/>



            </Routes>




            <Footer/>



        </Router>


    </div>
  );
}

export default App;
