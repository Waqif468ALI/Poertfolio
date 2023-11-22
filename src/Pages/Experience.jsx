import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesAlt } from '@fortawesome/free-solid-svg-icons';
import image from '../asstes/Team.jpeg'
import '../UI/Experience.css'

const Experince = () => {

    return (

        <>
           <div className="container">
           <div className='col-md-2 justify-content-center'>
            <h4 className='ServicesTitle'>
              <FontAwesomeIcon  icon={faBoxesAlt} />
                Experience 
            </h4>
             </div> 
            <div className="row  image">
               <div className="col-md-8 justify-content-start careclod">
                  <p className='responsibility'>

                  
                   <h3 className='careTitle'>Care Cloud</h3>
                   <h4>Position: Software Engineer</h4> 
                   <h4>Duration:<span> 1st November 2022 - Present</span></h4> 
                    <h4>Responsibilities</h4> 
                   <p >Developing and Implementing Software SolutionsDesign, code, test, and maintain software applications,
                     ensuring they meet requirements and are scalable and efficient</p>
                     </p>
               </div>
                <div className="justify-content-end col-md-4">
                <h4>Achivement</h4>
                <spane>Being part of "Team of the Month"  (August 2023)</spane>
                <img
                 src={image} 
                 alt="waqif Ali"
                 width="80%"
    
               />
                </div>
            </div>
            
        </div>
     </>
    )
}
 export default Experince