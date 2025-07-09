
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import sierra from "../assets/company/sierra.png";
import sutherlands from "../assets/company/sutherlands.png";


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
    title: "DevOps Engineer",
    icon: web,
  },
  {
    title: "Cloud Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
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
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "DevOps Engineer",
    company_name: "Sierra Consulting Inc",
    icon: sierra,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Designed and maintained CI/CD pipelines using Jenkins, Git, and Maven to automate build and deployment processes.",
    "Managed AWS infrastructure including EC2, ECS, Lambda, S3, and CloudFormation for scalable deployments.",
    "Implemented infrastructure as code using Terraform and Ansible for environment consistency and automation.",
    "Containerized applications using Docker and orchestrated them with Kubernetes across staging and production.",
    "Set up monitoring and logging using the ELK stack and Splunk for system reliability and insights.",
    "Worked closely with dev and product teams to streamline operations and minimize deployment downtime."
    ],
  },
  {
  title: "DevOps Engineer",
  company_name: "Sutherland Global (Client: Amazon)",
  icon: sutherlands, // Replace with actual icon import if needed
  iconBg: "#383E56",
  date: "March 2021 – June 2023",
  points: [
    "Automated infrastructure deployment using Terraform and AWS CloudFormation.",
    "Managed cloud resources on AWS including EC2, S3, RDS, IAM, and Lambda.",
    "Implemented CI/CD pipelines using Jenkins and GitLab for multiple microservices.",
    "Monitored production systems using CloudWatch, Splunk, and ELK stack.",
    "Developed custom shell scripts for backup, log rotation, and deployment tasks.",
    "Maintained secure access controls through IAM roles, policies, and MFA.",
    "Assisted development teams with containerizing workloads using Docker.",
    "Participated in security audits and patched OS-level vulnerabilities across EC2 instances.",
  ],
}
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Raghunath proved me wrong.",
    name: "Hemanth",
    designation: "Recruting Services",
    company: "Sierra Consulting Inc",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Raghunath does.",
    name: "Thrilok",
    designation: "Manager",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Raghunath optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Sierra Consulting Services",
    description:
      "Sierra Consulting Services is a recruting platform that allows users to search, explore job opportunities from various providers, offering a seamless and efficient way to get successful in carrier.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "GearXpert",
    description:
      "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailJs",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "GoGroove-Ecommerce",
    description:
      "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
