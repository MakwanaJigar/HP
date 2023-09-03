import React, { useEffect } from 'react';
import ABTIMG from '../AboutIMG/ABTIMG.avif'
import AOS from 'aos';
import 'aos/dist/aos.css';

// import ReactIMG from '../ABTSliderIMG/React.png'e
const About = () => {
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
<div class="card abtcard mb-3 shadow" data-aos="zoom-in-up">
  <div class="row g-0">
   
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">About me</h2>
        <p class="card-text" id='slideanimation'>
        I m a self-taught Front End developer from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.  
        </p>
        {/* <div class="card-text d-flex slideanimation " id='slideanimation'>
            <div className="react m-2">
              <img src={ReactIMG} alt="" style={{width:'35%'}} />
              <h6>React</h6>
            </div>
            <div className="javascript m-2">
              <img src={JS} alt="" style={{width:'35%'}} />
              <h6>JavaScript</h6>
            </div>
            <div className="html m-2">
              <img src={HTML} alt="" style={{width:'35%'}} />
              <h6>HTML</h6>
            </div>
            <div className="css m-2">
              <img src={CSS} alt="" style={{width:'35%'}} />
              <h6>CSS</h6>
            </div>
            <div className="bootstrap m-2">
              <img src={Bootstrap} alt="" style={{width:'35%'}} />
              <h6>Bootstrap</h6>
            </div>
        </div> */}
      </div>
    </div>
    <div class="col-md-4">
      <img src={ABTIMG} class="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>

    </>
  );
}

export default About;
