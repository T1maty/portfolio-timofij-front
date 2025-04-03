import Header from "../components/Header/Header";

const Home = () => {
    return(
<>
        <Header/>

    <main className="section">
        <div className="container">

            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Frontend</h2>
                    <p>JavaScript,ReactJS,Redux, HTML, CSS, NPM, BootStrap,Yarn</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Backend</h2>
                    <p> MySQL, MSSQLSERVER, PostgreSQL, ASP.NET/CORE, C#, Python</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">DevOps</h2>
                    <p>Kubernetes, Docker, CI/CD pipelines, Gitlab CI/CD and Github Actions, bash Scripting and Authomatization</p>
                </li>
            </ul>

        </div>
    </main>
    </>
    );
}

export  default  Home;