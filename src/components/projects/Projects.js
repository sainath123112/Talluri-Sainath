import "./Projects.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logos from "../logos/Logos.js";
import Todoapp from "./images/todo_app.mp4";
import Quotegenerator from "./images/quote_generator.mp4";
import FoodOrderApp from "./images/foodorderapp.mp4";
import MultiApiApp from "./images/multi_api_app.mp4";

function Projects({setcomponentpath, componentpath})
{

    const location = useLocation();
    useEffect(() => {
        setcomponentpath(location.pathname);
    }, [setcomponentpath, location.pathname])


  function disableRightClick(e) {
    e.preventDefault();
  }
  return (
    <div className="projects">
      <h1>Projects</h1> 
      <div className="project-container">
        <div className="flex flex-col w-[350px] bg-[#fffffe] h-auto items-center m-4 border-none rounded-tr-2xl rounded-bl-2xl shadow">
          <video
            width="100%"
            autoPlay
            loop
            muted
            onContextMenu={disableRightClick}
            className="border-none rounded-tr-2xl"
          >
            <source src={Todoapp} type="video/mp4" />
          </video>
          <h2 className="text-2xl font-bold tracking-[1px] py-2 uppercase">Todo List app</h2>
          <ul className="project-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
          </ul>  
          <div className="project-item-buttons pb-3 pt-2">
      <a href="https://sainath123112.github.io/todo-app/" className="font-bold" target="__blank">Live Demo</a>
      <a href="https://github.com/sainath123112/todo-app" className="font-bold" target="__blank">Source Code</a>
    </div>
        </div>
        <div className="flex flex-col w-[350px] bg-[#fffffe] h-auto items-center m-4 border-none rounded-tr-2xl rounded-bl-2xl shadow">
          <video
            width="100%"
            autoPlay
            loop
            muted
            onContextMenu={disableRightClick}
            className="border-none rounded-tr-2xl"
          >
            <source src={Quotegenerator} type="video/mp4" />
          </video>
          <h2 className="text-2xl font-bold tracking-[1px] py-2 uppercase">Random Quote Generator</h2>
          <ul className="project-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>REST API</li>
          </ul>  
          <div className="project-item-buttons pb-3 pt-2">
      <a href="https://sainath123112.github.io/random-quote-generator/" className="font-bold" target="__blank">Live Demo</a>
      <a href="https://github.com/sainath123112/random-quote-generator" className="font-bold" target="__blank">Source Code</a>
    </div>
        </div>
        <div className="flex flex-col w-[350px] bg-[#fffffe] h-auto items-center m-4 border-none rounded-tr-2xl rounded-bl-2xl shadow">
          <video
            width="100%"
            autoPlay
            loop
            muted
            onContextMenu={disableRightClick}
            className="border-none rounded-tr-2xl"
          >
            <source src={FoodOrderApp} type="video/mp4" />
          </video>
          <h2 className="text-2xl font-bold tracking-[1px] py-2 uppercase">Food Order App</h2>
          <ul className="project-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
          </ul>  
          <div className="project-item-buttons pb-3 pt-2">
      <a href="https://sainath123112.github.io/food-order-app/" className="font-bold" target="__blank">Live Demo</a>
      <a href="https://github.com/sainath123112/food-order-app" className="font-bold" target="__blank">Source Code</a>
    </div>
        </div>

        <div className="flex flex-col w-[350px] bg-[#fffffe] h-auto items-center m-4 border-none rounded-tr-2xl rounded-bl-2xl shadow">
          <video
            width="100%"
            autoPlay
            loop
            muted
            onContextMenu={disableRightClick}
            className="border-none rounded-tr-2xl"
          >
            <source src={MultiApiApp} type="video/mp4" />
          </video>
          <h2 className="text-2xl font-bold tracking-[1px] py-2 uppercase">Quote Fact Joke Riddle App</h2>
          <ul className="project-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>REST API</li>
          </ul>  
          <div className="project-item-buttons pb-3 pt-2">
      <a href="https://sainath123112.github.io/Multiple-Api-App/" className="font-bold" target="__blank">Live Demo</a>
      <a href="https://github.com/sainath123112/Multiple-Api-App" className="font-bold" target="__blank">Source Code</a>
    </div>
        </div>
        <div className="project-item"></div>
        <div className="project-item"></div>
        <div className="project-item"></div>
        <div className="project-item"></div>
        <div className="project-item"></div>
      </div>
      <Logos color="#ff8906"></Logos>
    </div>
  );
}

export default Projects;
