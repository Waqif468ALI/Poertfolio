import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactCard,faUserFriends,faMailBulk,faMessage} from '@fortawesome/free-solid-svg-icons';
import '../UI/contact.css'
import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

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
            <form onSubmit={handleSubmit}>
               <div className="mb-3 ">
                    <label htmlFor="name" className="text-left">
                        
                    <FontAwesomeIcon  icon={faUserFriends} />
                        Name
                        </label>
                    <input
                        type="text"
                        className=""
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
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
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                 </div>
                 <button type="submit" className="btn btn-primary">Send</button>
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