export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/profile.jpeg" alt="About Me" className="circular-img"/>
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">Hey, I'm Kaushal Bommena</h1>
            <p className="hero--section-description">
              I'm a passionate full-stack developer with a knack for building scalable, user-friendly applications. 
              With expertise in both front-end and back-end technologies, I craft seamless digital experiences and robust 
              systems. Whether designing intuitive user interfaces, optimizing server-side performance, or architecting 
              distributed systems, I thrive on solving complex problems and delivering impactful solutions. 
            </p>
            <p className="hero--section-description">
              Outside of coding, I’m constantly exploring new technologies to stay ahead in the ever-evolving tech landscape. Reach out 
              to me and get in touch! Feel free to explore and check out my projects below!
            </p>
          </div>
        </div>
      </section>
    );
  }