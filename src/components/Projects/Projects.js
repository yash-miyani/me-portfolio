import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import fastReactPizza from "../../Assets/Projects/fastReactPizza.png";
import convention from "../../Assets/Projects/convention.png";
import hauspet from "../../Assets/Projects/hauspet.png";
import architec from "../../Assets/Projects/architec.png";
import buri from "../../Assets/Projects/buri.png";
import jewelly from "../../Assets/Projects/jewelly.png";
import tailwag from "../../Assets/Projects/tailwag.png";
import foodOrder from "../../Assets/Projects/food-order.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={convention}
              title="Convention"
              description="This is the fully responsive website template for events. This website uses only Html, Css in Float Method and Java Script with counter and slider."
              ghLink="https://github.com/yash-miyani/Convention-event.git"
              demoLink="https://ym-float.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={hauspet}
              title="Hauspet"
              description="This is the fully responsive website template for pets. This website uses only Html, Css in Flex Method and Java Script with add fade effect to make it more attractive and form validation concept."
              ghLink="https://github.com/yash-miyani/Hauspet-Animal-Template.git"
              demoLink="https://ym-flex.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={architec}
              title="Architec"
              description="This is the fully responsive website template for architec. This website uses only Html, Css in Grid Method and Java Script."
              ghLink="https://github.com/yash-miyani/Architc-interior-design-template.git"
              demoLink="https://ym-grid.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={buri}
              title="Buri"
              description="This is the fully responsive website template for resturant. This website uses Simpal Css and React Js width light/dark mode and react threw slider."
              ghLink="https://github.com/yash-miyani/Buri-react-template.git"
              demoLink="https://ym-react-1.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={jewelly}
              title="Jewelly"
              description="This is the fully responsive website template for jewellery. This website uses only Bootstrap 5 and React Js with react functional component."
              ghLink="https://github.com/yash-miyani/Jewelly-ecommerce-website.git"
              demoLink="https://ym-react-2.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={tailwag}
              title="Tailwag"
              description="This is the fully responsive website template for pets. This website uses only Bootstrap 5 and React Js with react counter, react slider and react threw form validation."
              ghLink="https://github.com/yash-miyani/Tailwag-dog-website.git"
              demoLink="https://ym-react-3.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={fastReactPizza}
              title="Fast React Pizza"
              description="This Application to order pizza and some new functionalities (add to cart or order page) build with react.js, tailwindcss and using redux. React router morden data loading capabilites."
              ghLink="https://github.com/yash-miyani/fast-react-pizza.git"
              demoLink="https://ym-amazing-pizza.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={foodOrder}
              title="Fast React Pizza"
              description="This is the fully responsive website template for food-order.This Application to order pizza and some new functionalities (add to cart and like) build with react.js, tailwindcss and using redux toolkit."
              ghLink="https://github.com/yash-miyani/food-order.git"
              demoLink="https://ym-react-4.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
