import { useRef } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";
function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fwpskzb",
        "template_6dzw25e",
        form.current,
        "cuWpeypnkTwVl3FRq"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const projects = [
    {
      title: "Inception 1337 Project",
      image: "../public/package.png",
      description:
        "Designed a Docker-based service for hosting a WordPress website.\
    Created a multi- container setup with MariaDB for the database, WordPress for the website, and Nginx as the web server. The project \n\
    demonstrated the ability to create scalable, containerized applications\n\
    \nTechnologies : \n\
    -WordPress\n\
    -Docker\n\
    -Nginx\n\
    -MariaDB\n\
    -Docker Compose\n\
    -Linux"
    },
    {
      title: "Project 2",
      image: "../public/Screen Shot 2024-09-02 at 5.39.07 PM.png",
      description:
        "Collaborative web development project creating a real-time multiplayer Pong game. Utilizes NestJS backend,\
        nextJS frontend, PostgreSQL database, and OAuth authentication. Key features include secure login, live chat,\
        and multiplayer gaming in a responsive, single-page app. Emphasizes security, usability, and Docker-based deployment for seamless integration.\n\n\
        Technologies : \n\
        -Reactjs\n\
        -DjangoRestFramework (api)\n\
        -PostgreSQL\n\
        -OAuth,JWT\n\
        -Docker\n\
        -Websockets\n\
        -HTML,Css"
    },
    {
      title: "Project 3",
      image: "https://via.placeholder.com/300x200",
      description: "Description of Project 3"
    }
  ];

  return (
    <div className="App">
      <header>
        <h1>Web Developer</h1>
      </header>

      <section id="about">
        <img
          src="../public/097792e2-259a-4023-b672-965f177aa44d.jpeg"
          alt="Developer"
          className="profile-photo"
        />
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Software developer student at 1337-UM6P, passionate about web
            development and currently working on a team SPA project. Skilled in
            programming and collaboration, I am seeking a job opportunity or
            internship to gain industry experience
          </p>
        </div>
      </section>

      <section id="education">
        <h2>Education</h2>
        <ul>
          <li>Software Engineering at 1337 School | UM6P (42 Network)                         |   Khouribga |  Oct 2021 - Now</li>
          <li>Bachelor's in Mathematical and Computer Sciences at Ibn Tofail University       |   Kenitra   |  Dec 2022 - Now</li>
          <li>Graphic Design BOOTCAMP at Moroccan German Expert                               |   Kenitra   | Jun 2021 - Aug 2021</li>
          <li>Technician Specialized in Software Engineering at NTIC ISTA Maamora             |   Kenitra   | 2018 – 2021</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="contact">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;
