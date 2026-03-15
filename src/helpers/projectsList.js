import cardiogram from "./../img/projects/cardiogram.jpg";
import gi from "./../img/projects/gi.jpg";
import fastapi from "./../img/projects/fastapi.jpg";
import ladycrystal from "./../img/projects/ladycrystal.jpg";

const projects = [
    {
        title: 'Cardiogram of  the nation',
        skills:'Default HTML,CSS,Javascript and firebase',
        img:cardiogram,
        link: 'https://cardiogram-of-nation.vercel.app/',
    },
    {
        title: 'Gaming Industrios',
        skills:'ASP.NET C#, POSTGRESQL, Redis, JWT Authorization, Docker, DTO (Data Transfer Object)',
        img:gi,
    },
    {
        title: 'Manager Password',
        skills:'FASTAPI, Python, Github Actions CI/CD, Docker, JWT Authorization, MONGODB, But the project is still in development',
        img:fastapi,
    },
    {
        title: 'The Lady Crystal',
        skills:'That project for my client',
        img:ladycrystal,
        link: 'https://theladycrystal.com',
    },
];

export  {projects}
