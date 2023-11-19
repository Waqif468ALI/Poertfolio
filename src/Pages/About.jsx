import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle,faSchool} from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.css';


import '../UI/About.css'


const About = () => {
 
  
  return (
  <>
  
        <div className="container ">
           <div className='col-md-2 justify-content-center'>
             <h2 className='h2'>
               <FontAwesomeIcon  icon={faInfoCircle} />
                About Me!
              </h2>
           </div>
              <div className=' paragraph'>
               <p>Hello! I'm Waqif Ali, a dedicated and creative software engineer driven by the passion to craft innovative solutions that make a tangible impact. With 2 years of immersive experience in the dynamic realm of software development, I've had the privilege to navigate through diverse challenges, leveraging my skills to architect solutions that resonate with users on a profound level.

In my journey, I've embraced the intricacies of software engineering as a canvas to blend creativity with technical acumen. This convergence allows me to not only code but to sculpt experiences that harmonize functionality with seamless user interactions.

I find immense gratification in transforming intricate problems into elegant, user-centric solutions. This path has been a thrilling expedition, where each challenge metamorphoses into an opportunity to fuse technology with human-centric design principles.</p> 
              </div>

            <div className='col-md-2 justify-content-center'>
             <h2 className='h2'>
             <FontAwesomeIcon  icon={faSchool} />
               Education
              </h2>
           </div>
           <div>
             <p className='paragraph'>
             My journey began with a strong educational foundation in Computer Science from university of Agriculture Peshawar. This laid the groundwork for my venture into the professional world, where I've been fortunate to contribute to diverse projects and collaborate with talented teams.
this about me sepertate education section 
             </p>
           </div>
            </div>
          
  </>

  )
}
export default About