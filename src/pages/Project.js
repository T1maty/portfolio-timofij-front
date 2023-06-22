
import aibigg from './../img/projects/ai-bigg.jpg';
import BtnGithub from "../components/btnGithub/BtnGithub";
import {useParams} from "react-router-dom";
import {projects} from "../helpers/projectsList";
import project from "../components/project/Project";

const Project = () => {
    const {id} = useParams();
    const selectedProject = projects[id];


    console.log(project);

    return (<main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{selectedProject.title}</h1>

                <img src={selectedProject.img} alt="" className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>{selectedProject.skills}</p>
                        {selectedProject.githubLink &&
                        <BtnGithub link="https://github.com"/>}
                    </div>


                     <BtnGithub/>
            </div>
        </div>
    </main>
);
}


export  default  Project;