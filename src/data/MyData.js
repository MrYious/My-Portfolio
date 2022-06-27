import Profile from "../assets/profile.jpg";
import ProjectIMG1 from "../assets/Projects/TRP.png";
import ProjectIMG2 from "../assets/Projects/NightSpot.png";
import ProjectIMG3 from "../assets/Projects/TodoApp.png";
import ProjectIMG4 from "../assets/Projects/OrderForm.png";
import ProjectIMG5 from "../assets/Projects/SurveyForm.png";

export const MyData = {
    navLinks: [
        {to: "Home", name: "HOME"},
        {to: "About", name: "ABOUT"},
        {to: "Skill", name: "SKILL"},
        {to: "Project", name: "PROJECT"},
        {to: "Contact", name: "CONTACT"},
    ],
    intro: {
        name:   "Mark Edison Rosario",
        title:  "Aspiring Software Engineer",
        links: {
            github:     "https://github.com/MrYious",
            linkedin:   "https://www.facebook.com/MrYious0143/",
            facebook:   "https://www.linkedin.com/in/rosariomark/",
        }
    },
    about: {
        header: "My name's Mark. I'm an aspiring software engineer and I'm actively looking for opportunities to kickstart my career.",
        body:   "I'm an upcoming 4th year Computer Science student at the Polytechnic University of the Philippines-Sta Mesa. Currently an average developer with strong desire to create solutions for real-life problems. I spent my leisure hours reading articles and light novels. ",
        footer: "I love to learn and explore. Always striving to learn new technologies that can further enhance my skills as a developer. Right now, I'm continuously exploring the MERN stack for fullstack development.",
        image:  Profile,
    },
    skills: {
        list: [
            { name: "HTML",         icon: "icomoon-free:html-five",     category: "Frontend"},
            { name: "CSS",          icon: "simple-icons:css3",          category: "Frontend"},
            { name: "Javascript",   icon: "fa6-brands:js",              category: "Frontend"},
            { name: "ReactJS",      icon: "ri:reactjs-fill",            category: "Frontend"},

            { name: "NodeJS",       icon: "fa-brands:node-js",          category: "Backend"},
            { name: "Java",         icon: "simple-icons:java",          category: "Backend"},
            { name: "C",            icon: "teenyicons:c-outline",       category: "Backend"},
            { name: "PHP",          icon: "akar-icons:php-fill",        category: "Backend"},
            { name: "Python",       icon: "fa6-brands:python",          category: "Backend"},

            { name: "Git",          icon: "cib:git",                    category: "Tools"},
            { name: "GitHub",       icon: "akar-icons:github-fill",     category: "Tools"},
        ],
        note:   "I've been self-studying MERN stack for almost a year as this is the stack that I am interested to pursue. Nevertheless, our university made us learn various languages and technologies and I've included them to showcase my diverse understanding of languages and my ability to quickly learn if demanded. "
    },
    projects: [
        {
            title: "Travel Route Planner",
            image: ProjectIMG1,
            description: "A web application that calculates the most optimal route in the given multiple destination. It solves the Traveling Salesman Problem using Brute Force and Heuristic Algorithm. ",
            techs: ["HTML", "CSS", "JS", "ReactJS", "Maps API"],
            link: "https://github.com/MrYious/Automatic-Travel-Route-Planner"
        },
        {
            title: "NightSpot",
            image: ProjectIMG2,
            description: "A forum application that allows users to register for an account in order to create or join popular spots (channels) and post, comment and reply. Inspired by Reddit",
            techs: ["Java", "JavaFX", "MySQL"],
            link: "https://github.com/MrYious/NightSpot"
        },
        {
            title: "ToDo Application",
            image: ProjectIMG3,
            description: "A simple todo application made while learning and practicing ReactJS",
            techs: ["HTML", "CSS", "JS", "ReactJS"],
            link: "https://github.com/MrYious/TodoApp"
        },
        {
            title: "Order Form",
            image: ProjectIMG4,
            description: "A simple application required by Website Development course subject to highlight database connection and query language.",
            techs: ["HTML", "CSS", "JS", "PHP", "MySQL", "SQL"],
            link: "https://github.com/MrYious/WebDevelopment/tree/master/Group%20Activities/OrderForm"
        },
        {
            title: "Survey Form",
            image: ProjectIMG5,
            description: "A simple application required by Website Development course subject to highlight PHP Session",
            techs: ["HTML", "CSS", "JS", "PHP"],
            link: "https://github.com/MrYious/WebDevelopment/tree/master/Group%20Activities/SurveyForm"
        },
   ],
    contact: {
        email:      "rosariomark37@gmail.com",
        address:    "City of San Pedro, Laguna",
        phone:      "(+63) 932 283 1860",
        socials: {
            github:     "https://github.com/MrYious",
            facebook:   "https://www.facebook.com/MrYious0143/",
            linkedin:   "https://www.linkedin.com/in/rosariomark/",
            instagram:  "https://www.instagram.com/m_rked/",
            reddit:     "https://www.reddit.com/user/MrYious43",
        }
    }
}
