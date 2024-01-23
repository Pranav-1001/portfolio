import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  axaxl,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Electronics Engineer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Data Analyst Intern",
    company_name: "AXA XL",
    icon: axaxl,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Worked with Vena, a software tool designed for data handling, template creation, complex mapping and creating reports, also worked with SQL & ETL tool in the backend functionality of this software.",
      "Created and designed presentable dashboards and reports using Microsoft PowerBI.",
      "Contributed to the integration of Vena and ChatGPT’s API, enhancing automation and refining reporting processes. Additionally, conducted API testing using Postman for thorough evaluation.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Pro in Valorant",
    name: "Mihir Milind Kumar",
    designation: "Student",
    company: "DTU",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer so innovative.",
    name: "Divyansh Tanwar",
    designation: "Student",
    company: "NSUT",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  
];

const projects = [
  {
    name: "iNotebook",
    description:
      "Web-based platform that allows users to securely log in and save their notes, with the backend handling the implementation of this functionality",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: "https://user-images.githubusercontent.com/72593204/264545219-8d51e5b8-cb55-420d-ae30-5e8bc410ea99.png",
    source_code_link: "https://github.com/Pranav-1001/inotebook",
  },
  {
    name: "HeadlineHub",
    description:
      "A web-based News Application that provides the latest news from around the world in various categories like sports, entertainment, and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: "https://user-images.githubusercontent.com/72593204/264548313-ca5eadf4-edfd-4124-8db8-294b739ade0f.png",
    source_code_link: "https://github.com/Pranav-1001/newsapp",
  },
  {
    name: "TextUtils",
    description:
      "A simple text altering web application that allows users to convert their text to uppercase, lowercase, remove extra spaces, and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/2hDB8r1/Project3.png",
    source_code_link: "https://github.com/Pranav-1001/textutils",
  },
];

export { services, technologies, experiences, testimonials, projects };
