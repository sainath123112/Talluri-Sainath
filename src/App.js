
import './App.css';
import Home from "./components/home/Home.js";
import Navbar from "./components/navbar/Navbar.js";
import Skills from "./components/skills/Skills.js";
import Projects from "./components/projects/Projects.js";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";


function App() {

const [componentpath, setcomponentpath] = useState("");
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar componentpath={componentpath} setcomponentpath={setcomponentpath}></Navbar>
      <Routes>
        <Route path="/Talluri-Sainath" element={<Home componentpath={componentpath} setcomponentpath={setcomponentpath}></Home>}></Route>
        <Route path="/Talluri-Sainath/skills" element={<Skills componentpath={componentpath} setcomponentpath={setcomponentpath}></Skills>}></Route>
        <Route path="/Talluri-Sainath/projects" element={<Projects componentpath={componentpath} setcomponentpath={setcomponentpath}></Projects>}></Route>
        <Route path="/Talluri-Sainath/experience" element={<Experience componentpath={componentpath} setcomponentpath={setcomponentpath}></Experience>}></Route>
        <Route path="/Talluri-Sainath/contact" element={<Contact componentpath={componentpath} setcomponentpath={setcomponentpath}></Contact>}></Route>
        <Route path="*" element={<h2>Page Not Found</h2>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
