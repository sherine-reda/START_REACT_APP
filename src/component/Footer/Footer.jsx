import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return <>
   <footer className=' text-center '>
    <div className="container">
     <div className="row">
      <div className="col-lg-4 mb-5 mb-lg-0">
         <h4 className="text-uppercase mb-4">Location</h4>
         <p className="lead mb-0">2215 John Daniel Drive<br/> Clark, MO 65243</p>         
      </div>

      <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="mb-4">Around the Web</h4>
                        <Link className="btn btn-outline-light btn-social mx-1 " to="https://www.facebook.com/"> <i className="fab fa-fw fa-facebook-f"></i></Link>
                        <Link className="btn btn-outline-light btn-social mx-1" href="#!"> <i className="fab fa-fw fa-twitter"></i></Link>
                        <Link className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></Link>
                        <Link className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></Link>

      </div>

      <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="lead mb-0">
                            Freelance is a free to use, MIT <br/>licensed Bootstrap theme created by Route
                        </p>
       </div>
     </div>

     
    </div>
   </footer>
   <div className="copyright py-4 text-center text-white ">
            <div className="container"><small>Copyright © Your Website 2021</small></div>
        </div>
  </>
}

export default Footer