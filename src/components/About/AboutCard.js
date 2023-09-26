import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="primary-header">Yash Miyani</span> from Surat,
            Gujarat, India. I am a bachelor of commerce graduate and I'm doing
            advance web devloper course .
            <br />
            <br />
            In addition to coding, here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Writing
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Listing music
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Listing Audiobooks
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Traveling
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
