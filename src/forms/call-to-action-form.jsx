import {React, useState } from "react";
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from '@novu/notification-center';


const CallToActionForm = ({style_sv_details}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  // const messages = await kv.get<{name: String, email: String,}>

  const handleSubmit = (event) => {
    event.preventDefault();
    setFullName(event.target.fullName.value);
    setEmail(event.target.email.value);
    setPhone(event.target.phone.value);
    setMessage(event.target.message.value);
    


  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">


          <div className="col-lg-6">
            <div className="input-item">
              <span>
                <i className="fas fa-user"></i>
              </span>
              <input id="fullName" name="fullName" required type="text" placeholder="Full name" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="input-item">
              <span>
                <i className="fas fa-envelope-open"></i>
              </span>
              <input id="email" name="email" required type="email" placeholder="Email address" />
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
                <input id="phone" name="phone" type="tel" placeholder="Phone" />
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
              <textarea  id="message" name="message" required placeholder="Message"></textarea>
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
