// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sai Kiran Reddy",
  middleName: "",
  lastName: "Surabhi",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/SurabhiSaiKiranReddy",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/s.saikiranreddy",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/surabhisaikiran/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/saikiranreddys/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/skreddy_surabhi",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/surabhi_sai_kiran_reddy.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/surabhi_sai_kiran_reddy.png"),
  imageSize: 375,
  message:
    "My name is Sai kiran reddy Surabhi. I’m a graduate a from University of Houston at Houston with a degree in Computer Science. I'm most passionate about learning new technologies and make people know abot newer emerging Technologies, and my goal is to pursue this passion within the field of software engineering. In my free time I play computer games and work on open source projects.",
  resume: "https://www.linkedin.com/in/saikiranreddys/",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "SurabhiSaiKiranReddy", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/surabhi_sai_kiran_reddy.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/surabhi_sai_kiran_reddy.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "Python", value: 70 },
    { name: "JavaScript", value: 65 },
    { name: "Python - Pandas", value: 80 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 70 }, 
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 80 },
    { name: "Organization", value: 75 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Data Science / Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "surabhisaikiranreddy@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/opentext.png'),
      // date: 'Jan 2018 – Aug 2018',
    },
    {
      role: 'Programmer Analyst II',
      companylogo: require('../assets/img/baylor.png'),
      // date: 'Oct 2020  – June 2021',
    },
    {
      role: 'Senior Java Developer',
      companylogo: require('../assets/img/kaiser.png'),
      // date: 'June 2021 – Mar 2022',
    },
    {
      role: 'Senior Software Engineer',
      companylogo: require('../assets/img/cigna.png'),
      // date: 'Mar 2022 – Present',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
