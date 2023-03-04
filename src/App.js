
import './App.css';
import Home from "./components/home/Home.js";
import Navbar from "./components/navbar/Navbar.js";
import Skills from "./components/skills/Skills.js";
import Projects from "./components/projects/Projects.js";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/Talluri-Sainath" element={<Home></Home>}></Route>
        <Route path="/Talluri-Sainath/skills" element={<Skills></Skills>}></Route>
        <Route path="/Talluri-Sainath/projects" element={<Projects></Projects>}></Route>
        <Route path="/Talluri-Sainath/experience" element={<Experience></Experience>}></Route>
        <Route path="/Talluri-Sainath/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<h2>Page Not Found</h2>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
