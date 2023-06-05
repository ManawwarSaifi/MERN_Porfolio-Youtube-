import React from "react";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from  "../../img/Vector1.png";
import Vector2 from  "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import glassimoji from "../../img/glassesimoji.png";
import crown from "../../img/crown.png"
import "./Intro.css";
import { FloatingDiv } from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hey ! I Am</span>
          <span>Manawwar Saifi</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a href="https://Linkedin.com" target="_blank">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassimoji} alt="" />
        <div style={{top:-'4%',left:'68%'}}>
            <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
        </div>
        <div style={{top:'18rem',left:'0rem'}}>
            <FloatingDiv image={thumbup} txt1="Best design" txt2='Award'/>
        </div>
        {/* blur divs*/}
        <div className="blur" style={{background:"rgb(236 210 255)"}}></div>
        <div className="blur" style={{background:'#C1F5FF',top:'17rem',widht:'21rem' ,height:'11rem',left:'-9rem'}}></div>
      </div>
    </div>
  );
};
export default Intro;
