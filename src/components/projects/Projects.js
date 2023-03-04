import "./Projects.css";
import Logos from "../logos/Logos.js"
import { Player } from "video-react";
function Projects()
{
    return( 
        <div className="projects"> 
            <h1>Projects</h1>
            <div className="project-container">
                <div className="project-item">
                    <Player
                        playsInline
                        poster=""
                        src="/todo_app.mp4"/>
                </div>
            </div>
        <Logos color="#ff8906"></Logos>
        </div>
    );
}

export default Projects;