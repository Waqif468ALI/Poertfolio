import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import reactjs from '../asstes/reactjs2.jpg';
import Csharp from '../asstes/Csharp2.webp';
import SQL from '../asstes/SQLserver.webp';
import js from '../asstes/javascript.jpg';
import ts from '../asstes/ts.webp';
import Angular from '../asstes/angular.avif';




import '../UI/skills.css'


const Skills = () => {
 
  
  return (
  <>
            <div className="container">
                <h2  className='SkillsTitle'>Skills</h2>
                <div className="row">
                <div className="col-md-4">
                    <div className="skills">
                        <img src={reactjs} alt="Project 1" className="img-fluid"></img>
                      
                        <p>Skill description</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="skills">
                        <img src={Csharp} alt="Project 2" className="img-fluid"></img>
                        <p>Skill description</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="skills">
                        <img src={SQL}alt="Project 1" className="img-fluid"></img>
                        
                        <p>Skill description</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="skills">
                        <img src={js} alt="Project 2" className="img-fluid"></img>
                       
                        <p>Skill description</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="skills">
                        <img src={ts} alt="Project 2" className="img-fluid"></img>
                      
                        <p>Skill description</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="skills">
                        <img src={Angular} alt="Project 2" className="img-fluid"></img>
                       
                        <p>Skill description</p>
                    </div>
                </div>
                {/* <!-- Add more projects here --> */}
            </div>
            </div>
      
  </>

  )
}
export default Skills