import React from "react";
import "./About.scss";
import {
  sectionBootom__rightCard_img,
  sectionTop__leftCard_img,
} from "../../assets";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="abaoutIntro">
          <div className="leftCard">
            <h4>Our mision</h4>
            <h2>
              Creating valuable content for creatives all around the world
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>{" "}
          <div className="rightCard">
            <h4>Our Vision</h4>
            <h2>A platform that empowers individuals to improve</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
        </div>
        <section className="aboutMain">
          <div className="sectionTop">
            <div className="sectionTop__leftCard">
              <h3>Our team of creatives</h3>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </div>
            <div>
              <img src={sectionTop__leftCard_img} alt="" />
            </div>
          </div>
          <div className="sectionBootom">
            <div>
              <img src={sectionBootom__rightCard_img} alt="" />
            </div>
            <div className="sectionBootom__rightCard">
              <h3>Our team of creatives</h3>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
