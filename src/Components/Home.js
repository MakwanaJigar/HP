import React from 'react';
import HomeBG from '../Images/CartoonIMG-1.avif'
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <>
     <div className="home container">

        <div className="homecontent">
              <h1>Hello</h1>
              <h3>Im Himani Saraiya</h3>
              <h4 className='fw-bold text-danger'>
              <Typewriter
                words={['Front-End Devloper']}
                loop
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              </h4>
              <div className="socialmedia ">

                    <div className="btn mx-2"><i className='fa fa-github'></i></div> 
                    <div className="btn mx-2"><i class="fa-brands fa-linkedin"></i></div>
                    <div className="btn mx-2"><i class="fa-brands fa-twitter"></i></div>
                    <div className="btn mx-2"><i class="fa-brands fa-instagram"></i></div>

              </div> 
        </div>
       <div className="imgcontent">
           <img src={HomeBG} alt="" className='img' />
       </div>

     </div>

     {/* <div className="socialmedia container">

           <div className="btn mx-2"><i className='fa fa-github'></i></div> 
           <div className="btn mx-2"><i class="fa-brands fa-linkedin"></i></div>
           <div className="btn mx-2"><i class="fa-brands fa-twitter"></i></div>
           <div className="btn mx-2"><i class="fa-brands fa-instagram"></i></div>

       </div>  */}


    </>
  );
}

export default Home;
