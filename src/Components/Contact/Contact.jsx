import React from 'react'
import './Contact.css'
import phone from '../../assets/icons8-phone-48.png'
import email from '../../assets/icons8-mail-50.png'
import address from '../../assets/icons8-address-50.png'
import {useRef, useState, useContext} from 'react'
import emailjs from '@emailjs/browser';
import {ThemeContext} from '../../Context'


function Contact() {
    const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s54n587",
        "template_06v6gic",
        formRef.current,
        "user_DrriDPTGKO2Zj4RDXCA6W"
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
                sammccarthy090@gmail.com
                </div>
                <div className="c-info-item">
                <img src={address} alt="" className="c-icon" />
                Abuja
                </div>
                
                
                    
            </div>
        </div>
        <div className="c-right">
        <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
        </div>
    </div>
  )
}

export default Contact 