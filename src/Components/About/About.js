import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf ,faPhoneSquareAlt ,faAddressBook ,faLink ,faMapMarkerAlt ,faLaptopCode, faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';



const About = () => {
    const element = <FontAwesomeIcon icon={faLeaf} />
    const element2 =<FontAwesomeIcon icon={faPhoneSquareAlt}/>
    const element3 =<FontAwesomeIcon icon={faAddressBook}/>
    const element4 =<FontAwesomeIcon icon={faLink}/>
    const element5 =<FontAwesomeIcon icon={faMapMarkerAlt}/>
    const element6 =<FontAwesomeIcon icon={faLaptopCode}/>
    const email =<FontAwesomeIcon icon={faEnvelopeOpen}/>
   
    
    return (
        <div className="m-3">
           <h2 className="text-center py-5 text-success">About Us</h2>
           <div className="container">
            <div  className="row row-cols-4">
              <div className="col">
               <h3>{element}CodersPro</h3>
               <p>CHANGE | GROW | SUCCEED</p>
               <p>{email} <a href="#">hellocoderspro@gmail.com</a></p>
               
               </div>
               <div className="col"><h3>{element3}Contact Us</h3>
               <h5>{element5}Head Office:</h5>
               <p>Momtaz Plaza (4th Floor) House#7, Road#4, Dhanmondi, Dhaka-1205</p>
               <p>{element2}+880 1624666000,+880 1624888444,+880 1966177177</p>
               </div>
               <div className="col">
                   <h3>{element6}Our Services</h3>
                   <li>Responsive Web Design</li>
                   <li>Graphic Design</li>
                   <li>Digital Marketing</li>
                   <li>Accounts Management System</li>
                   <li>Advanced Excel</li>
                   <li>English For Career</li>
                   <li>Film & Media Training</li>
                   <li>Web & Software Training</li>
                   <li>UI/UX Design</li>
                   <li>Robotics & Automation</li>
                   <li>Motion Graphics</li>
                   <li>Drawing For Kids</li>
                   <li>Content Writing</li>
                </div>
               <div className="col">
                   <h3>{element4}Quick Links</h3>
                   <li>About Us</li>
                   <li>Gallery</li>
                   <li>Job Placement</li>
                   <li>Students' Feedback</li>
                   <li>Freelancing Success</li>
                   <li>Contact Us</li>

               </div>
               </div> 
        </div>
        
        </div>
    );
};

export default About;