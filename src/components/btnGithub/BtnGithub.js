import  "./style.css";
import img from "./gitHub-black.svg";

const BtnGithub = () => {
    return(<a href="https://github.com/T1maty" className="btn-outline">
        <img src={img} alt=""/>
        GitHub repo
    </a>);
}

export  default  BtnGithub;