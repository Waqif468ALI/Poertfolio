import React  from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../UI/profile.css'
import image from '../asstes/image.jpeg'


const Profile =() =>{


    return(
        <>
         <div className="container">
            <div className="row">
               <div className="col-md-8">
                  <h4 className="Name">waqif Ali</h4>
                  <h6 className="Name">Software Engineer</h6>
              </div>
              <div className="profile col-md-4">
                <img
                 src={image} 
                 alt="waqif Ali"
                 width="20%"
                 className=" rotate-animation"
    
               />
         </div>
            </div>
            
        </div>
     </>
    )
}
export default Profile 