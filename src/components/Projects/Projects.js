import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Hospital from "../../Assets/Projects/hospital_mern.png";
import Dashboard from "../../Assets/Projects/studentDashboard.png";
import TeslaClone from "../../Assets/Projects/Tesla-clone.png";
import currency from "../../Assets/Projects/currency converter.png";
import Handwritten from "../../Assets/Projects/handwrritenRecognisation.png";
import IPHONE15PRO from "../../Assets/Projects/iphone15pro.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="Currency Converter"
              description="The design of the React Currency Converter App is centered on user-friendliness and simplicity. It offers an intuitive and visually appealing interface that caters to a wide audience. User input is streamlined, making currency conversion tasks effortless."
              ghLink="https://github.com/MohitSharma7256/Currency-Converter"
              demoLink="https://drive.google.com/file/d/1VgVz3MY31TAPfGifTH1Uqe_mVFF2dhVO/view?usp=drive_link/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IPHONE15PRO}
              isBlog={false}
              title="IPHONE 15 Pro Launch Website"
              description="Introducing my latest endeavor amidst the anticipation of the iPhone 15 Pro launch: an awe-inspiring Apple-inspired website, meticulously brought to life with React, and elevated to new heights by the dynamic synergy of Beginner Three.js & GSAP."
              ghLink="https://github.com/MohitSharma7256/Projects"
              demoLink="https://drive.google.com/file/d/1wpJM5ADDunj2RQYnq42h1h5C1FfA0wTn/view?usp=drive_link/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TeslaClone}
              isBlog={false}
              title="Tesla-Clone"
              description="I've been hard at work on a React application with Redux integration, using the Yarn package manager, and it's ready for you to explore.
              Dive into the world of Tesla with this app:
              Customize your orders for Model S, Model Y, Model 3, and Model X
              Experience touch-less delivery for added convenience
              Discover the lowest cost solar panels in America, backed by a money-back guarantee
              Explore solar roof options for new roofs
              Browse through a variety of accessories to enhance your Tesla journey"
              ghLink="https://github.com/MohitSharma7256/"
              demoLink="https://drive.google.com/file/d/1bftLzsGw5RmUYDmb5PSKlAv-Od033BzI/view?usp=drive_link/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hospital}
              isBlog={false}
              title="Hospital Management (MERN STACK)"
              description="Experience seamless hospital management with our MERN stack-powered solution. This comprehensive system leverages MongoDB Atlas for robust data storage and React for dynamic user interfaces. With intuitive features for both users and administrators, including appointment scheduling and comprehensive data management, our platform ensures efficiency and reliability. Streamlined development with MERN stack technologies ensures scalability and responsiveness across all devices."
              ghLink="https://github.com/MohitSharma7256/"
              demoLink="https://drive.google.com/file/d/14C88vkEq6oulJZPloOjxVC0HQu63Zuim/view?usp=drive_link/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Handwritten}
              isBlog={false}
              title="Handwritten Digit Recognition"
              description="This project focuses on Handwritten Digit Recognition using Neural Networks.
              Handwritten digit recognition is a crucial problem in various fields, including digitized documentation, postal services, and automation.
              The project's primary objective is to develop a system that can accurately identify and classify handwritten digits, ultimately improving data processing and automation.
              Handwritten Digit Recognition involves the conversion of handwritten numerals into digital text, enabling automation and improved data processing."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dashboard}
              isBlog={false}
              title="Student Dashboard (MERN STACK)"
              description="Student Dashboard is an innovative MERN stack project tailored for academic environments, enriched with Tailwind CSS for polished styling and streamlined development. Powered by React and Vite, it delivers dynamic interfaces with lightning-fast performance, ensuring a seamless user experience. This comprehensive solution facilitates efficient management for students, offering features such as data fetching via Axios, form handling with React Hook Form, and intuitive UI elements from React Icons. With the integration of XLSX for spreadsheet functionality, Student Dashboard empowers students with robust data management capabilities, making academic tasks effortless and organized."
              ghLink="https://github.com/MohitSharma7256/"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
