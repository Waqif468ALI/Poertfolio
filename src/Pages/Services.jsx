import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faGears ,faDatabase,faLanguage} from '@fortawesome/free-solid-svg-icons';

// import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import 'bootstrap/dist/css/bootstrap.css';
import '../UI/services.css'


const Services = () => {
 
  
  return (
  <>
   <div className="container">
   <div className='col-md-2 justify-content-center'>
                <h2  className='ServicesTitle'>
                <FontAwesomeIcon  icon={faLanguage} />
                    Services
                    </h2>
                    </div>
                <div className="row">
                <div className="col-md-4">
                    <div className=" service">
                    <FontAwesomeIcon className='deve' icon={faLaptopCode} />
                    
                                            <h4>Front End Development </h4>
                       <p className='text'>
                       I create web designs that adapt flawlessly to all screen sizes,
                        ensuring your website looks great on desktops, laptops, smartphones, and tablets.
                        My goal is to provide users with a seamless and intuitive experience, especially 
                        on smartphones and tablets, to keep them engaged and satisfied.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service">
                    <FontAwesomeIcon className='deve' icon={faGears} />
                            <h4>Back End Development </h4>
                        <p className='text'> I specialize in building the engine behind web applications. 
                         From secure data management and powerful APIs to server-side scripting and seamless
                          integration, I ensure your web app runs smoothly and securely, enabling you to focus
                           on delivering exceptional user experiences..</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service">
                    <FontAwesomeIcon className='deve' icon={faDatabase} />
                    
                    <h4>Data base  </h4>
                     <p className='text'>
                     I specialize in crafting robust and efficient databases, ensuring seamless
                      data management for web applications. My focus is on secure storage, powerful
                       querying, and optimized performance to support exceptional user experiences</p>
                    </div>
                </div>
               
            </div>
            </div>
  </>

  )
}
export default Services