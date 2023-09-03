import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  useEffect(() => {
    AOS.init(
     {
         offset: 120,
         duration: 1000
     }
    )
   },[])
 

  return (
    <>

<div className="ContactForm container mt-3" data-aos="zoom-out-down" style={{width:'50vw',height:'70vh'}}>
        <form action="input" >
          <h3 className="fw-bold" style={{color:"gray"}}>SEND ME A MESSAGE</h3>

          <div className="row" >
            <div className="col-sm-6 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Your Email"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control mb-3"
              id="floatingPassword"
              placeholder="Addess"
            />
            <label htmlFor="floatingPassword">Address</label>
          </div>

          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label htmlFor="floatingTextarea2">Message</label>
          </div>
        </form>
        <i className='fa fa-message mt-3' id='message'> Message</i>
      </div>
      

    </>
  );
}

export default Contact;
