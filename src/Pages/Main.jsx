import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../UI/Home.css'
import About from './About';
import Contact from './contact';
import Projects from './Project';
import Skills from './skill';
import Profile from './Profile';
import Services from './Services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle,faGears,faComputer,faBoxesAlt,faLanguage,faContactCard } from '@fortawesome/free-solid-svg-icons';
import Experince from './Experience';


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
    <div className='nav'>
    <div className="container ">
        <div className="row justify-content-center ">
            <div className="col-md-8 text-center">
                <button 
                className="btn button "
                 onClick={() => scrollToSection('section1')}>
                    <FontAwesomeIcon  icon={faInfoCircle} />
                    About
                </button>
                <button 
                className="btn  button"
                onClick={() => scrollToSection('section2')}
                >
                      <FontAwesomeIcon  icon={faGears} />
                    Skills
                </button>
                <button 
                className="btn  button"
                onClick={() => scrollToSection('section3')}
                >
                      <FontAwesomeIcon  icon={faComputer} />
                 Projects
                </button>
                <button className="btn  button" onClick={() => scrollToSection('sectionE')}>
                <FontAwesomeIcon  icon={faBoxesAlt} />
                    Experince
                    </button>
                <button className="btn button" onClick={() => scrollToSection('section4')}>
                <FontAwesomeIcon  icon={faLanguage} />
                    Services
                    </button>
                <button className="btn  button"  onClick={() => scrollToSection('section5')}>
                <FontAwesomeIcon  icon={faContactCard} />
                    Contact</button>
                </div>
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
    <section className="section " id="sectionE">
       <Experince></Experince>
    </section>
    <hr></hr>
    <section className="section" id="section4">
        <Services></Services>
    </section>
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
