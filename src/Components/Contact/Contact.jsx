import React from 'react'
import {useState, useRef} from 'react'
import './Contact.css'
import phone from '../../assets/icons8-phone-48.png'
import email from '../../assets/icons8-mail-50.png'
import address from '../../assets/icons8-address-50.png'
// import emaijs from 'emailjs-com'
//import {useRef, useState, useContext} from 'react'
import emailjs from '@emailjs/browser';
//import {ThemeContext} from '../../Context'


function Contact() {
    const formRef = useRef();
  const [done, setDone] = useState(false)
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8b84fhg",
        "template_06v6gic",
        formRef.current,
        "22fLAOUB_bZM1xVZM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
// function Contact() {
//   const formRef = useRef(); // Ref for accessing the form DOM element
//   const [done, setDone] = useState(false); // State to manage form submission status

// const handleSubmit = (e) => {
//   e.preventDefault(); // Prevent default form submission behavior
//   emailjs
//     .sendForm(
//       'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
//       'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
//       formRef.current, // Reference to the form DOM element
//       'YOUR_USER_ID' // Replace with your EmailJS user ID
//     )
//     .then(
//       (result) => {
//         console.log(result.text);
//         setDone(true); // Set done to true on successful submission
//       },
//       (error) => {
//         console.log(error.text);
//         // Handle errors here, if any
//       }
//     );
// };
  return (
    <div className='C'>
        <div className="c-bg">

        </div>
        <div className="c-wrapper">
        <div className="c-left">
            <h1 className="c-title"> Let's discuss your project ?</h1>
            <div className="c-info">
                <div className="c-info-item">
                    <img src={phone} alt="" className="c-icon" />
                  +2348140915380
                </div>

                <div className="c-info-item">
                <img src={email} alt="" className="c-icon" />
                samson@elenii.xyz
                </div>
                <div className="c-info-item">
                <img src={address} alt="" className="c-icon" />
                Lagos
                </div>
                
                
                    
            </div>
        </div>
        <div className="c-right">
        <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            working if the right project comes along. 
          </p>
          <form className='c-text' ref={formRef} onSubmit={handleSubmit} >
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
        </div>
    </div>
  )
}

export default Contact 