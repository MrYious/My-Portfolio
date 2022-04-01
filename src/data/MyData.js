import Profile from "../assets/profile.jpg"
import ProjectIMG from "../assets/project1_placeholder.png"

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
            facebook:   "https://www.linkedin.com/in/rosario-mark/",
        }
    },
    about: {
        header: "My name's Mark. I'm an aspiring software engineer and I'm actively looking for opportunities to kickstart my career.",
        body:   "I'm an upcoming 4th year Computer Science student at the Polytechnic University of the Philippines-Sta Mesa. Currently an average developer with strong desire to create solutions for real-life problems. I spent my leisure hours reading articles and light novels. ",
        footer: "I love to learn and explore. Always striving to learn new technologies that can further enhance my skills as a developer. Right now, I'm exploring how backend technologies work especially cloud services.",
        image:  Profile,
    },
    skills: {
        list: [
            { name: "HTML",         icon: "icomoon-free:html-five",     category: "Frontend"},
            { name: "CSS",          icon: "simple-icons:css3",          category: "Frontend"},
            { name: "Javascript",   icon: "fa6-brands:js",              category: "Frontend"},
            { name: "ReactJS",      icon: "ri:reactjs-fill",            category: "Frontend"},
            { name: "Redux",        icon: "akar-icons:redux-fill",      category: "Frontend"},

            { name: "NodeJS",       icon: "fa-brands:node-js",          category: "Backend"},
            { name: "Java",         icon: "simple-icons:java",          category: "Backend"},
            { name: "Python",       icon: "fa6-brands:python",          category: "Backend"},

            { name: "Git",          icon: "cib:git",                    category: "Tools"},
            { name: "GitHub",       icon: "akar-icons:github-fill",     category: "Tools"},
        ],
        note:   "I've been self-studying MERN stack for almost a year as this is the career that I am determined to pursue. Our university's course curriculum required us to learn various languages and technologies and I've included them to showcase my flexibility and willingness to learn if demanded. "
    },
    projects: [
        {title: "Sample Title", image: ProjectIMG, description: "Sample description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptatem ducimus ratione debitis esse incidunt atque aliquid, minus ullam fugit?" },
        {title: "Sample Title", image: ProjectIMG, description: "Sample description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptatem ducimus ratione debitis esse incidunt atque aliquid, minus ullam fugit?" },
        {title: "Sample Title", image: ProjectIMG, description: "Sample description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptatem ducimus ratione debitis esse incidunt atque aliquid, minus ullam fugit?" },
    ],
    contact: {
        email:      "rosariomark37@gmail.com",
        address:    "City of San Pedro, Laguna",
        phone:      "(+63) 932 283 1860",
        socials: {
            github:     "https://github.com/MrYious",
            facebook:   "https://www.facebook.com/MrYious0143/",
            linkedin:   "https://www.linkedin.com/in/rosario-mark/",
            instagram:  "https://www.instagram.com/m_rked/",
            reddit:     "https://www.reddit.com/user/MrYious43",
        }
    }
}
