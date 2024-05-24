import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <h1>About</h1>

      <h2>Project Description</h2>

      <div className="project">
        <h3>Mini E-commerce Admin</h3>
        <p>
          E-commerce app with an admin dashboard where the admin can see and
          manage the products and inventory in the store.
        </p>
      </div>

      <hr />

      <h1>The Team</h1>

      <div className="team-titles">
        <h2>Yves Martinez</h2>
        <h2>Claudia Gonzalez</h2>
        <h2>Abner Nieves</h2>
      </div>

      <div className="team">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          <a href="https://github.com/yvesm001" target="_blank">
            <img className="team-icon" src="src\assets\github-logo2.png" />
          </a>
          <a href="https://www.linkedin.com/in/yves-martinez-266379220" target="_blank">
            <img className="team-icon" src="src\assets\linkedin.png" />
          </a>
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          <a href="https://github.com/claudiasgonz" target="_blank">
            <img className="team-icon" src="src\assets\github-logo2.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/claudia-gonz%C3%A1lez1/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank">
            <img className="team-icon" src="src\assets\linkedin.png" />
          </a>
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          <a href="https://github.com/abniev#" target="_blank">
            <img className="team-icon" src="src\assets\github-logo2.png" />
          </a>{" "}
          <a href="https://www.linkedin.com/in/abnernieves/" target="_blank">
            <img className="team-icon" src="src\assets\linkedin.png" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
