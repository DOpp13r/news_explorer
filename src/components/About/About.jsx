import "./About.css";

import myPic from "../../assets/my-pic.jpg";

function About() {
  return (
    <div className="about">
      <img className="about__image" alt="author image" src={myPic} />
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          Hello, my name is Nathan Do. I am an aspiring software engineer in the
          making! Throughout this program, I further utilized my previous
          knowledge from my Computer Science major while tying my studies here
          with a more hands-on, modern programming practice.
        </p>
        <p className="about__text">
          Outside of this program, I work full-time as a dimensional inspector
          for Stein Seal Company. Stein Seal is a provider for custom designed
          seals and precision components for aerospace, marine, and industrial
          applications. The role at my job conducts quality control inspections,
          implementing quality management process, performing quality audits,
          and ensuring the compliance with quality standards.
        </p>
      </div>
    </div>
  );
}

export default About;
