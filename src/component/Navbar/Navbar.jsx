import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./Navbar.css";
function Navbar() {
  useEffect(() => {
    $(window).scroll(function () {
      if ($(this).scrollTop() === 0) {
        $("nav").css("padding-top", "1.6rem");
        $("nav").css("padding-bottom", "1.6rem");
      } else {
        $("nav").css("padding-top", "1rem");
        $("nav").css("padding-bottom", "1rem");
      }
    });

    let Links = Array.from(document.getElementsByClassName("nav-link"));
    let navbarBrand = document.getElementById("navbarBrand");
    console.log(navbarBrand);
    if (navbarBrand !== null) {
      navbarBrand.addEventListener("click", function () {
        let current = Array.from(document.getElementsByClassName("active"));
        if (current.length !== 0) {
          current[0].classList.remove("active");
        }
      });
    }
    for (let i = 0; i < Links.length; i++) {
      Links[i].addEventListener("click", function () {
        let current = Array.from(document.getElementsByClassName("active"));

        if (current.length !== 0) {
          current[0].classList.remove("active");
          this.classList.add("active");
        } else {
          this.classList.add("active");
        }
      });
    }
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top ">
        <div className="container">
          <Link className="navbar-brand" to="" id="navbarBrand">
            START REACT
          </Link>
          <button
            className="navbar-toggler text-white btn-primary rounded-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="me-2">MENUE</span>
            <i class="fas fa-bars"></i>
            {/* <span className="navbar-toggler-icon text-white"></span> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link me-4  "
                  aria-current="page"
                  to="portfolio"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-4 " to="about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-4 " to="contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
