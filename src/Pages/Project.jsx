import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Breeez from '../asstes/Breeze1.jpg'
import Breeez1 from '../asstes/Breeze2.jpg'
import Breeez2 from '../asstes/Breez3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer} from '@fortawesome/free-solid-svg-icons';

import '../UI/project.css'


const Projects = () => {
 
  
  return (
  <>
   <div className="container">
   <div className='col-md-2 justify-content-center'>
            <h2 className='projectTitle'>
            <FontAwesomeIcon  icon={faComputer} />
                Projects
                </h2>
          </div>      
            <div className="row">
                <div className="col-md-6">
                    <div className="project">
                        
                        <img className='project_image' width="33.5% " src={Breeez} alt="sds" />  
                       
                        <img className='project_image' width="33%" src={Breeez1} alt="dsd" /> 
                        
                       <img className='project_image' width="33.5%" src={Breeez2} alt="dsd" />  
                       <h3 className='descriptionTitle'>Description</h3>
                       <p className='description'>Going to the doctor is now a breeze! Breeze offers a modern experience at the doctor’s office, 
                        at home, or on the go. Ideal for those of us that never want to fill out another paper form,
                         wait endlessly to be seen by our doctor, or have no flexibility for when or how to pay for our care.</p>
                        <a href="https://we.gobreeze.com/"  target="_blank">web.gobreeze.com</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="project Empty justify-content-center">
                        {/* <img src="project2.jpg" alt="Project 2" className="img-fluid"></img> */}
                        {/* <h3>Project 2</h3> */}
                        <p className='Coming'>Cooming soon</p>
                    </div>
                </div>
                {/* <!-- Add more projects here --> */}
            </div>
        </div>
  </>

  )
}
export default Projects