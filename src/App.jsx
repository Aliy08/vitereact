import { useEffect } from "react"
import { iniJS } from "./otak";
import 'boxicons/css/boxicons.min.css'
import './App.css'

function App() {
  useEffect(() => {
    iniJS();
  }, []);
  return (
    <>
      <Header />
      <Home />
      <Service />
      <Certification />
      <Timeline />
      <Contact />
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">Nabila
        <span>Aliyyuanda .F.</span></a>

      <i className='bx bx-menu' id="menu-icon"></i>


      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#services">Services</a>
        <a href="#certification">Certification</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

function Home() {
  return (
    <section className="home reveal" id="home">
      <div className="home-img">
        <img src="/N1.jpg" alt="Nabila1" />
      </div>

      <div className="home-content">
        <h3>Hi</h3>
        <h1>It's <span>Nabila</span></h1>
        <h3 className="text-animation">
          I'm a <span className="type-text"></span>
        </h3>
        <p>
          Hi, I'm Nabila Aliyyuanda Fortun. I'm 17 years old. This is the first page of the website I created!
          Oh, and by the way—I love watching K-Dramas. How about you?
          Besides that, I also have some basic skills in design, photography, and videography.
        </p>

        <div className="sosial-icons">
          <a href="https://www.linkedin.com/in/nabila-aliyyuanda-fortun-44b4b2354/"><i
            className='bx bxl-linkedin-square'></i></a>
          <a href="https://www.instagram.com/nblalyyndaf_?igsh=azVvaGg0am1zYW5n"><i
            className='bx bxl-instagram-alt'></i></a>
          <a href="https://www.tiktok.com/@hiiialyy?_t=ZS-8yLvvAbOJmM&_r=1"><i className='bx bxl-tiktok'></i></a>
          <a href="https://wa.me/qr/JXRPPHFBM6KQG1"><i className='bx bxl-whatsapp-square'></i></a>
        </div>

        <a href="#" className="btn">HIRE</a>
      </div>
    </section>
  );
}

function Service() {
  return (
    <section className="service reveal" id="services">
      <h2 className="heading">Services</h2>

      <div className="service-container">
        <div className="service-box">
          <i className='bx bxs-microphone'></i>
          <h3>Public Speaker</h3>
          <p>Public speaking is something I'm learning to love—it helps me grow and step out of my comfort zone.
          </p>
          <a href="#" className="btn">Learn More</a>
        </div>

        <div className="service-box">
          <i className='bx bxs-camera'></i>
          <h3>Photograph</h3>
          <p>Photography lets me freeze time and tell stories through images. Every click feels like capturing a
            piece of emotion.</p>
          <a href="#" className="btn">Learn More</a>
        </div>

        <div className="service-box">
          <i className='bx bxs-brain'></i>
          <h3>Content Creative</h3>
          <p>I love creating content—whether it’s a post, a short video, or a design. It’s my way of sharing what
            I love with others!</p>
          <a href="#" className="btn">Learn More</a>
        </div>
      </div>
    </section>
  );
}

function Certification() {
  return (
    <section className="certification reveal" id="certification">
      <h2 className="heading">Certification</h2>

      <div className="certification-container">

        <div className="certification-box">
          <img src="/1.png" alt="" />
          <div className="certification-info">
            <h4>Basic Dart</h4>
            <p>Dart is a programming language developed by Google, mainly used for building apps with Flutter—a
              UI toolkit to create mobile, web, and desktop apps from a single codebase.</p>
            <a href="https://www.dicoding.com/academies/191/corridor"><i className="bx bx-link"></i></a>
          </div>
        </div>

        <div className="certification-box">
          <img src="/2.png" alt="" />
          <div className="certification-info">
            <h4>Software Developer</h4>
            <p>A software developer is someone who designs, builds, tests, and maintains software applications.
              They may work on mobile apps, websites, desktop systems, or even embedded software in machines
              and devices.</p>
            <a href="https://www.dicoding.com/academies/191/corridor"><i className="bx bx-link"></i></a>
          </div>
        </div>

        <div className="certification-box">
          <img src="/3.png" alt="" />
          <div className="certification-info">
            <h4>Programming Logic</h4>
            <p>Programming logic is the ability to think step-by-step to solve problems using code. It's like
              teaching your computer how to think using a clear set of instructions.</p>
            <a href="https://www.dicoding.com/academies/191/corridor"><i className="bx bx-link"></i></a>
          </div>
        </div>

        <div className="certification-box">
          <img src="/4.png" alt="" />
          <div className="certification-info">
            <h4>Git & Github</h4>
            <p>Git is a tool to track code changes.
              GitHub is a website to store and share Git projects online.</p>
            <a href="https://www.dicoding.com/academies/191/corridor"><i className="bx bx-link"></i></a>
          </div>
        </div>

        <div className="certification-box">
          <img src="/5.png" alt="" />
          <div className="certification-info">
            <h4>Front-End</h4>
            <p>Front-end development is about creating the visual and interactive parts of a website using HTML,
              CSS, and JavaScript so users can see and use it easily.</p>
            <a href="https://www.dicoding.com/academies/191/corridor"><i className="bx bx-link"></i></a>
          </div>
        </div>

        <div className="certification-box">
          <img src="/6.png" alt="" />
          <div className="certification-info">
            <h4>Dasar Javascript</h4>
            <p>JavaScript is a programming language used to make websites interactive, like showing pop-ups,
              animations, or reacting to user actions such as clicks and typing.</p>
            <a href="https://www.dicoding.com/academies/191/corridor"><i className="bx bx-link"></i></a>
          </div>
        </div>

        <div className="certification-box">
          <img src="/7.png" alt="" />
          <div className="certification-info">
            <h4>Basic Website</h4>
            <p>A basic website is a simple online page built using HTML for structure, CSS for design, and
              sometimes JavaScript for interactivity. It usually includes text, images, and links to share
              information or showcase content.</p>
            <a href="https://www.dicoding.com/academies/191/corridor"><i className="bx bx-link"></i></a>
          </div>
        </div>

      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="timeline-section reveal" id="education">
      <h2 className="heading">Education</h2>
      <div className="timeline-items">

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Kindergarten</h3>
            <p>I attended kindergarten at RA Al-Mabrur for two years.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Elementary School</h3>
            <p>I spent six fun years at SDN 2 Bumirejo for elementary school—so many memories and lessons that
              shaped who I am today!</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Junior High School</h3>
            <p>Junior high school was the best part of my school journey—full of laughter, new friendships, and
              unforgettable moments!</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Vocational High School</h3>
            <p>Now, I’m studying at SMKN 8 Malang, and I’m really enjoying this chapter of my life—it’s full of
              growth, creativity, and new experiences!</p>
          </div>
        </div>

      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>

      <form id="contact-form" action="#">
        <div className="input-box">
          <input type="text" id="name" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input-box">
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="Subject" />
        </div>

        <textarea id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
}

export default App;
