import React from 'react'
import './Contact.css'
import contactport from '../../assets/contactportfolio.jpg'
import mail_icon from '../../assets/mailicon.png'
import location_icon from '../../assets/build.png'
import call_icon from '../../assets/call.png'


const Contact = () => {

   //form react data for email from web3forms
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f37d73fb-75a5-4a9e-9cd1-7cb92bcc3dcd"); //this is my link generated from web3.

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
//form react data ends 

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={contactport} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently available to take on new projects, <br /> so feel free to reach me  out for anything that you 
                 want me to work on. </p>
                <div className="contact-details">
                   <div className="contact-detail">
                      <img src={mail_icon} alt="" /> <p>itsmeak971@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                      <img src={call_icon} alt="" /> <p>+91 9718612473</p>
                    </div>
                    <div className="contact-detail">
                       <img src={location_icon} alt="" /> <p>Ghaziabad,India</p>
                    </div> 
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact