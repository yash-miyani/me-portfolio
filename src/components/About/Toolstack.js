import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiNotepadplusplus,
  SiSublimetext,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <span className="fs-6 d-block">Visual Studio</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotepadplusplus />
        <span className="fs-6 d-block">Note Pad++</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext />
        <span className="fs-6 d-block">Sublime</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <span className="fs-6 d-block">Github</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
