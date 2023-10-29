import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../UI/Home.css'
import About from './About';
import Contact from './contact';
import Projects from './Project';
import Skills from './skill';
import Profile from './Profile';
import Services from './Services';


const Main = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth'});
        }
      };
  
  return (
  <>
<header>
<section className="section  py-3" id="header">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-2 text-center">
                <button 
                className="btn btn-light w-100"
                 onClick={() => scrollToSection('section1')}>
                    About
                </button>
            </div>
            <div className="col-md-2 text-center">
                <button 
                className="btn btn-light w-100"
                onClick={() => scrollToSection('section2')}
                >Skills</button>
            </div>
            <div className="col-md-2 text-center">
                <button 
                className="btn btn-light w-100"
                onClick={() => scrollToSection('section3')}
                >
                 Projects
                </button>
            </div>
            <div className="col-md-2 text-center">
                <button className="btn btn-light w-100">Experince</button>
            </div>
            <div className="col-md-2 text-center">
                <button className="btn btn-light w-100">Services</button>
            </div>
            <div className="col-md-2 text-center">
                <button className="btn btn-light w-100"  onClick={() => scrollToSection('section5')}>Contact</button>
            </div>
        </div>
    </div>
</section>

</header>
<body>
  <section className="section" id="section0">
     <Profile></Profile>
  </section>
  <hr></hr>
  <section className="section" id="section1">
    <About></About>
  </section>
  <hr></hr>
  <section className="section" id="section2">
    <Skills></Skills>
  </section>
  <hr></hr>
    <section className="section " id="section3">
       <Projects></Projects>
    </section>
    <hr></hr>
    <section className="section" id="section4">
        <Services></Services>
    </section>
    <hr></hr>
  
  <hr></hr>
  <section className="section" id="section5">
        <Contact></Contact>
    </section>
    <section className="section bg-dark text-light" id="section4">
        <div className="container">
            <h2 className="display-4"></h2>
            <p>&copy; 2023 Waqif Ali</p>
        </div>
    </section>
</body>

  </>
  );
};

export default Main;
