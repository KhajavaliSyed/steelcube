import {React, useState } from "react";


const CallToActionForm = ({style_sv_details}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  // const messages = await kv.get<{name: String, email: String,}>

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setFullName(event.target.fullName.value);
    // setEmail(event.target.email.value);
    // //setPhone(event.target.phone.value);
    // setMessage(event.target.message.value);
 
    await fetch("https://api.sendinblue.com/v3/smtp/email", {
      body: JSON.stringify({
        htmlContent : "<html><body><img src=\"https://steelcube.vercel.app/assets/img/logo/sc-logo.png\"/><h1>Welcome to Steelcube Engineering</h1><p><span>Hi " + fullName +
        ",</span><br>Thank you for contacting Steelcube Engineering. We will get back to you soon.</p></body></html>",
        //textContent: message,
        to: [{"name": fullName, "email": email}],
        sender: {"name" : "Steelcube Engineering", "email":"info@steelcubeeng.com"},
        replyTo: {"name" : "Steelcube Engineering", "email":"info@steelcubeeng.com"},
        subject: "Thank you for contacting Steelcube Engineering",
        message: "Thank you for contacting Steelcube Engineering"
      }),
      headers: {
        "accept": "application/json",
        "api-key": "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",
        "content-type": "application/json"
      },
      method: "POST"
    }).then(response => response.json()).then(response => console.log(response)).catch(err => console.error(err));
    
    await fetch("https://api.sendinblue.com/v3/smtp/email", {
      body: JSON.stringify({
        //htmlContent : "<html><body><img src=\"https://steelcube.vercel.app/assets/img/logo/sc-logo.png\"/><h1>Welcome to Steelcube Engineering</h1></body></html>",
        textContent: message,
        to: [{"name" : "Steelcube Engineering", "email":"info@steelcubeeng.com"}],
        sender: {"name": fullName, "email": email},
        replyTo: {"name": fullName, "email": email},
        subject: "New Contact Info" ,
        message: message
      }),
      headers: {
        "accept": "application/json",
        "api-key": "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",
        "content-type": "application/json"
      },
      method: "POST"
    }).then(response => response.json()).then(response => console.log(response)).catch(err => console.error(err));
    // const { error } = await res.json();
    // if(error) {
    //   console.log(error);
    // }
    console.log(email,message,fullName);
    
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
