import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../..//img/heartemoji.png";
import Glasses from "../..//img/glasses.png";
import Humble from "../..//img/humble.png";
import Resume from "./resume.pdf"

function Services() {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
          quaerat rerum
          <br />
          tempora eaque sit, ex explicabo harum, ullam esse in vitae est
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side*/}
      <div className="cards">
        <div className="cards">
          <div>
            <Card
              emoji={HeartEmoji}
              heading={"Design"}
              detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd "}
            />
          </div>
          {/* Second card*/}
          <div style={{top:"1rem" ,left:"30rem"}}>
          <Card
              emoji={Glasses}
              heading={"Developer"}
              detail={"Html, Css, Javascript, Reactjs"}
            />
            {/* third card*/}
          </div>
          <div style={{top:"25rem" ,left:"15rem"}}>
          <Card
              emoji={Humble}
              heading={"UI/UX"}
              detail={"Lorem ispum dummy text are usually use in section where "}
            />

          </div>
        </div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
}

export default Services;
