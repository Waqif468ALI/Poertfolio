import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import image from '../asstes/image.jpeg'

import '../UI/About.css'


const About = () => {
 
  
  return (
  <>
  
        <div className="container">
          <h2 className='h2'>About Me!</h2>
          <div className='d-flex'>
            <div className='w-25'>
                <img src={image}  alt="waqif Ali" width="30%"  />
            </div>
            <div className='w-75 paragraph'>
                 <p>Hello! I'm Waqif Ali, a passionate and innovative software engineer with a
                   relentless drive to solve complex problems and create efficient, user-friendly 
                   software solutions. I've spent 2 years  in the software development industry,
                   and I'm thrilled to share my journey with you</p>
                   <div className='col-4 email'> 
                     <i className="fa fa-envelope-o" aria-hidden="true"></i>   <span>awdeveloper468@gmail.com</span><br></br>
                     <i class="fa fa-mobile" aria-hidden="true"></i>  <span>03325497504</span>
                   </div>
            </div>
            </div>
          
        </div>
  </>

  )
}
export default About