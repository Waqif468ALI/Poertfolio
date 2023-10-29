import React  from "react";
import '../UI/profile.css'
import image from '../asstes/W.jpg'


const Profile =() =>{


    return(
        <>
         <div className="container">
            <div className="profile">
                {/* <img src={require('../asstes/child.jpg').default}></img> */}
                <img
                 src={image} // Use the imported image
                 alt="waqif Ali"
                 width="20%"
                 className=" rotate-animation"
                
                />
            </div>
        </div>
     </>
    )
}
export default Profile 