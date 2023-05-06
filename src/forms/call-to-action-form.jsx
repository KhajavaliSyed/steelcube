import {React, useState } from "react";


const CallToActionForm = ({style_sv_details}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  // const messages = await kv.get<{name: String, email: String,}>

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFullName(event.target.fullName.value);
    setEmail(event.target.email.value);
    // //setPhone(event.target.phone.value);
    setMessage(event.target.message.value);

    await fetch("/api/sendEmail", {
        body: JSON.stringify({toName: fullName, 
          toEmail: email, 
          fromName: 'Steelcube Engineering',
          fromEmail: 'info@steelcubeeng.com',
          message: 'Thank you for contacting Steelcube Engineering. We will get back to you soon.',
          subject: 'Welcome to Steelcube Engineering'}),
        headers: {
           "content-type": "application/json"
          },
        method: "POST"
    }).then(response => response.json()).then(response => console.log(response)).catch(err => console.error(err));

    await fetch("/api/sendEmail", {
      body: JSON.stringify({toName: 'Steelcube Engineering',
        toEmail: 'info@steelcubeeng.com', 
        fromName: fullName,
        fromEmail: email,
        message: message,
        subject: 'New Contact Info'}),
      headers: {
         "content-type": "application/json"
        },
      method: "POST"
  }).then(response => response.json()).then(response => console.log(response)).catch(err => console.error(err));    
    
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">


          <div className="col-lg-6">
            <div className="input-item">
              <span>
                <i className="fas fa-user"></i>
              </span>
              <input id="fullName" name="fullName" required type="text" placeholder="Full name" onChange={e => setFullName(e.target.value)}/>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="input-item">
              <span>
                <i className="fas fa-envelope-open"></i>
              </span>
              <input id="email" name="email" required type="email" placeholder="Email address" onChange={e => setEmail(e.target.value)} />
            </div>
          </div>
          {
            style_sv_details ? ""  : 
            <>
            <div className="col-lg-6">
              <div className="input-item">
                <span>
                  <i className="fas fa-phone"></i>
                </span>
                <input id="phone" required name="phone" type="tel" placeholder="Phone" />
              </div>
            </div>        

            <div className="col-lg-6">
              <div className="input-item">
                <span>
                  <i className="fas fa-book"></i>
                </span>
                <select>
                  <option value="#">Selected</option>
                  <option value="#">English</option>
                  <option value="#">Bangla</option>
                  <option value="#">science</option>
                </select>
              </div>
            </div>
            
            </>
          }


          <div className="col-12">
            <div className="input-item-textarea">
              <span>
                <i className="fas fa-pen"></i>
              </span>
              <textarea  id="message" name="message" required placeholder="Message" onChange={e => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" className="it-cta-form-submit border-0">
              Submit Request
            </button>
          </div>
          

        </div>
      </form>
    </>
  );
};

export default CallToActionForm;
