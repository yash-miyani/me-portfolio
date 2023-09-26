import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3Full,
  DiJavascript1,
  DiReact,
  DiBootstrap,
  DiNodejs,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import { SiFirebase, SiTailwindcss, SiRedux } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <span className="fs-6 d-block">HTML 5</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3Full />
        <span className="fs-6 d-block">CSS 3</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span className="fs-6 d-block">Javascript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span className="fs-6 d-block">React Js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <span className="fs-6 d-block">Bootstrap 5</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <span className="fs-6 d-block">Tailwind Css</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
        <span className="fs-6 d-block">Github</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <span className="fs-6 d-block">Firbase</span>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <span className="fs-6 d-block">Redux</span>
      </Col>
    </Row>
  );
}

export default Techstack;
