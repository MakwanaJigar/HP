import React from 'react';
import Hangama from '../ProjectIMG/HangamaIMG.png'
import CowBull from '../ProjectIMG/Cow-Bull.png'
import textUtils from '../ProjectIMG/text-utils.png'
import calculater from '../ProjectIMG/calculater.png'
import form from '../ProjectIMG/Form.jpg'

const Projects = () => {
  return (
    <>

<div className="container text-center mt-3">
  <div className="row">
    <div className="col-md-4 col-12 mb-2">

    <div className="card h-100 shadow" data-aos="flip-left">
      <img src={Hangama} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Hangama</h5>
        <p className="card-text">
        In this Python program, we need to guess the letters of a word. The
        word we are trying to guess is "guess the program". After a certain
        number of incorrect guesses, a character on the screen is "hanged"  
        </p>
      </div>
    </div>

    </div>

    <div className="col-12 col-md-4 mb-2">
            
    <div className="card h-100 shadow" data-aos="flip-right">
      <img src={CowBull} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Cow-Bull</h5>
        <p className="card-text">
        In this Python program, you have to guess both the word and the
        position of its elements. If all your guesses are correct, the output will
        show "Bull". Otherwise, it will display "Cow".
        </p>
      </div>
    </div>

    </div>
    
    <div className="col-md-4 col-12 mb-2">
           
    <div className="card h-100 shadow" data-aos="flip-left">
      <img src={form} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Registration Form</h5>
        <p className="card-text">
        This is a professional registration form created using HTML, CSS, and
        JavaScript. The form is designed to gather essential information from
        users and ensure a smooth registration process.  
        </p>
      </div>
    </div>

    </div>
  </div>

  <div className="row">
    <div className="col-md-4 col-12 mb-2">

    <div className="card h-100 shadow" data-aos="flip-right">
      <img src={textUtils} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">TextUtils</h5>
        <p className="card-text">
        The textUttils project is a React.js web application that offers text utility
        functions such as formatting, word count, and character count. It
        provides users with a convenient way to manipulate and analyze text
        for various purposes.
        </p>
      </div>
    </div>

    </div>

    <div className="col-md-4 col-12 mb-2">
            
    <div className="card h-100 shadow" data-aos="flip-left">
      <img src={calculater} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Calculate Vegitables Bill</h5>
        <p className="card-text">
        I have developed a website using HTML, CSS, and JavaScript for
        calculating vegetable bills. The website allows users to select the
        quantity of vegetables, after which it automatically performs the
        calculations.
        </p>
      </div>
    </div>

    </div>
    
  </div>

</div>

    </>
  );
}

export default Projects;
