// import from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import FileDownload from 'js-file-download';
import { message } from 'antd';



const Navbar = () => { 
  const download = (e) =>{
    setTimeout(() => {
      message.success("Download Successfully!");
    }, 1000);
    e.preventDefault();
    Axios({
      url:"http://localhost:8000/download",
      method:'GET',
      responseType:'blob'
    }).then((res) => {
      // alert("Download Succussfully");
      // setTimeout(() => {
      //   message.success("Download Successfully!");
      // }, 1000);
      FileDownload(res.data,"download Successfully");
    })
  }
  return (
    <>

<nav class="navbar navbar-expand-lg shadow">
  <div class="container-fluid">
    <Link class="navbar-brand h2 fw-bold text-success" to="/">HS.</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item mx-3 ">
          <Link class="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item mx-3 ">
          <Link class="nav-link " aria-current="page" to="/about">About</Link>
        </li>
        <li class="nav-item mx-3 ">
          <Link class="nav-link " aria-current="page" to="/project">Project</Link>
        </li>
        <li class="nav-item mx-3 me-5">
          <Link class="nav-link " aria-current="page" to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="btn me-5 text-center" onClick={(e) => download(e)} id='resume'>Resume</div>
     
    </div>
  </div>
</nav>

    </>
  );
}

export default Navbar;
