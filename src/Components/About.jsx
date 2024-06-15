/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/background-vector.jpg";

const imageAltText = "minimal vector image";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hi! I'm Rahul, a full-stack developer who enjoys building sites & apps that I find fun or interesting. My focus is React (Next JS) & C++.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "NextJS",
  "C++",
  "SQL/NoSQL DB",
  "WebSockets",
  "Python",
  "Communication"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  `Highly motivated and freshly graduated software developer with a passion for coding and problem-solving. Solid foundation in programming
languages such as C++, JavaScript and Python .Have in-depth understanding of system and hardware architecture, giving low level perspective
of programming. Skilled in developing and debugging software applications. Eager to apply knowledge and learn new technologies as a
Software Developer to contribute to a dynamic and collaborative team environment.`;

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
