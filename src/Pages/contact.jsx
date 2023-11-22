import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactCard,faUserFriends,faMailBulk,faMessage,faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import '../UI/contact.css'
import React, { useRef ,useState,useEffect} from 'react';
import emailjs from "@emailjs/browser"

function Contact() {
    const form = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_94opp7d', 'template_r3jkahx', form.current, 'pDnKeMk3v3-MttCTb')
        .then((result) => {
            if(result){
                debugger
                setIsModalOpen(true);
                console.log("ismodal",isModalOpen)
            }
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    useEffect(() => {
        let timer;
        if (isModalOpen) {
            timer = setTimeout(() => {
                setIsModalOpen(false);
            }, 5000); // 5 seconds delay
        }
        return () => clearTimeout(timer); // Clear the timer on component unmount
    }, [isModalOpen]);
    return (
        <div className="container ">
            <div className='col-md-2 justify-content-center'>
            <h3 className='contactTitle'>
              <FontAwesomeIcon  icon={faContactCard} />
                Contact 
            </h3>
             </div>   
            <div className='row'>
            <div className='col-md-6 Contact_div'>
            {isModalOpen &&( <div className='messageModal'>
                        <p>messsage sent</p>
                    </div>)}
            <form ref={form} onSubmit={sendEmail}>
               <div className="mb-3 ">
                    <label htmlFor="name" className="text-left">
                        
                    <FontAwesomeIcon  icon={faUserFriends} />
                        Name
                        </label>
                    <input
                        type="text"
                        id="name"
                        name="user_name"
                        required
                    />
                 </div>
                 <div className="mb-3 ">
                    <label htmlFor="email" className="text-left">
                    <FontAwesomeIcon  icon={faMailBulk} />
                        Email
                        </label>
                    <input
                        type="email"
                        className=""
                        id="email"
                        name="user_email"
                        required
                    />
                 </div>
                 <div className="mb-3 ">
                    <label htmlFor="message" className="text-justify">
                    <FontAwesomeIcon  icon={faMessage} />
                        Message
                        </label>
                    <textarea
                        className=""
                        id="message"
                        name="message"
                        required
                    />
                 </div>
                 <button type="submit" className="btn btn-dark">
                 <FontAwesomeIcon  icon={faPaperPlane} />
                 </button>
                   
            </form>
            </div>
            {/* <div className='col-md-4 contact_information'>
            <div className=''> 
                     <i className="fa fa-envelope-o font" aria-hidden="true"></i>    <span>awdeveloper468@gmail.com</span><br></br>
                     <i class="fa fa-mobile font" aria-hidden="true"></i>   <span>03325497504</span>
                   </div>
            </div> */}
            </div>
            
        </div>
    );
}

export default Contact