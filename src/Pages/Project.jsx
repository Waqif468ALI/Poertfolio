import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Breeez from '../asstes/Breeze1.jpg'
import Breeez1 from '../asstes/Breeze2.jpg'
import Breeez2 from '../asstes/Breez3.jpg'

import '../UI/project.css'


const Projects = () => {
 
  
  return (
  <>
   <div className="container">
            <h2 className="projectTitle">Projects</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="project">
                        
                         <img width="33% " src={Breeez} alt="sds" />  
                       
                        <img width="33%" src={Breeez1} alt="dsd" /> 
                        
                       <img width="33%" src={Breeez2} alt="dsd" />  
                      
                    </div>
                    <a href="web.gobreeze.com">web.gobreeze.com</a>
                </div>
                <div className="col-md-6">
                    <div className="project">
                        <img src="project2.jpg" alt="Project 2" className="img-fluid"></img>
                        <h3>Project 2</h3>
                        <p>Description of Project 2.</p>
                    </div>
                </div>
                {/* <!-- Add more projects here --> */}
            </div>
        </div>
  </>

  )
}
export default Projects