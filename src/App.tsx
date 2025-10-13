import "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Navbar from "./components/Navbar.tsx";
import Service from "./components/Service.tsx";

import Project from "./components/Project.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <Router>
        <Navbar/>
      <div>
        <Home/>
        <About/>
        <Service/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
