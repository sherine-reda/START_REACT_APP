import React from "react";
import "./Contact.css";
import { useEffect } from "react";
import $ from "jquery";
function Contact() {
  let nameInputTouched = false;
  let emailInputTouched = false;
  let phoneInputTouched = false;
  useEffect(() => {
  
    document.getElementById("name").addEventListener("focus", (e) => {
      nameInputTouched = true;
      $("#nameLabel").css("color", "#1abc9c");
      document.getElementById("success").innerHTML = ""
    });
    document.getElementById("name").addEventListener("focusout", (e) => {
      $("#nameLabel").css("color", "black");
      document.getElementById("success").innerHTML = ""
    });
    document.getElementById("email").addEventListener("focus", () => {
      emailInputTouched = true;
      $("#emailLabel").css("color", "#1abc9c");
      document.getElementById("success").innerHTML = ""
  
    });
    document.getElementById("email").addEventListener("focusout", (e) => {
      
     $("#emailLabel").css("color", "black");
     document.getElementById("success").innerHTML = ""
   });
    document.getElementById("phone").addEventListener("focus", () => {
      phoneInputTouched = true;
      $("#phoneLabel").css("color", "#1abc9c");
      document.getElementById("success").innerHTML = ""
    });
    document.getElementById("phone").addEventListener("focusout", (e) => {
     $("#phoneLabel").css("color", "black");
     document.getElementById("success").innerHTML = ""
   });
    document.getElementById("Message").addEventListener("focus", () => {
      $("#messageLabel").css("color", "#1abc9c");
      document.getElementById("success").innerHTML = ""
    });
    document.getElementById("Message").addEventListener("focusout", (e) => {
     $("#messageLabel").css("color", "black");
     document.getElementById("success").innerHTML = ""
   });

   

  });

  const nameValdiation = () => {
    console.log("nammmmmmme");
    let regx = /^[a-zA-Z]+$/;
    if (nameInputTouched) {
      if (regx.test(document.getElementById("name").value)) {
        document
          .getElementById("nameAlert")
          .classList.replace("d-block", "d-none");
        return true;
      } else {
        document
          .getElementById("nameAlert")
          .classList.replace("d-none", "d-block");
        return false;
      }
    }
  };
  const emailValdiation = () => {
    let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInputTouched) {
      if (regx.test(document.getElementById("email").value)) {
        document
          .getElementById("emailAlert")
          .classList.replace("d-block", "d-none");
        return true;
      } else {
        document
          .getElementById("emailAlert")
          .classList.replace("d-none", "d-block");
        return false;
      }
    }
  };
  const phoneValdiation = () => {
    let regx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5}$/;
    if (phoneInputTouched) {
      if (regx.test(document.getElementById("phone").value)) {
        document
          .getElementById("PhoneAlert")
          .classList.replace("d-block", "d-none");
        return true;
      } else {
        document
          .getElementById("PhoneAlert")
          .classList.replace("d-none", "d-block");
        return false;
      }
    }
  };
  const submit = (e) => {
    console.log(nameValdiation);
    if (!nameInputTouched || !emailInputTouched || !phoneInputTouched) {
      e.preventDefault();
     
      if (nameInputTouched === false) {
        document
          .getElementById("nameAlert")
          .classList.replace("d-none", "d-block");
      }
      if (emailInputTouched === false) {
        document
          .getElementById("emailAlert")
          .classList.replace("d-none", "d-block");
      }
      if (phoneInputTouched === false) {
        document
          .getElementById("PhoneAlert")
          .classList.replace("d-none", "d-block");
      }
    } else {
      console.log("ifffffffffff");
      document
        .getElementById("nameAlert")
        .classList.replace("d-block", "d-none");
      document
        .getElementById("emailAlert")
        .classList.replace("d-block", "d-none");
      document
        .getElementById("PhoneAlert")
        .classList.replace("d-block", "d-none");
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("phone").value ="";
        document.getElementById("Message").value ="";
        document.getElementById("success").innerHTML = "<div class='alert alert-danger w-100'>Sorry s, it seems that my mail server is not responding. Please try again later!</div>"

    }
    // 
  };
  const nameLabel = (e) => {
    if (document.getElementById("name").value) {
      $('#nameLabel').css('color','#1abc9c')
      $('#nameLabel').animate({
        top: -10,
      })
      document.getElementById("nameLabel").innerHTML = "Name";
    } else {
      // document.getElementById("nameLabel").innerHTML = "";
      $('#nameLabel').css('color','transparent')
  
      $('#nameLabel').animate({
        top: 0,
      })
      document.getElementById("nameLabel").innerHTML = "";

    }
  };
  const emailLabel = () => {
    if (document.getElementById("email").value) {
      $('#emailLabel').css('color','#1abc9c')
      $('#emailLabel').animate({
        top: -10,
      })
      document.getElementById("emailLabel").innerHTML = "Email";
    } else {
      $('#emailLabel').css('color','transparent')

      $('#emailLabel').animate({
        top: 0,
      })
      document.getElementById("emailLabel").innerHTML = "";

    }
  };
  const phoneLabel = () => {
    if (document.getElementById("phone").value) {
      $('#phoneLabel').css('color','#1abc9c')

      $('#phoneLabel').animate({
        top: -10,
      })
      document.getElementById("phoneLabel").innerHTML = "Phone";
    } else {
      $('#phoneLabel').css('color','transparent')

      $('#phoneLabel').animate({
        top: 0,
      })   
      document.getElementById("phoneLabel").innerHTML = "";

    }
  };
  const messageLabel = () => {
    if (document.getElementById("Message").value) {
      document.getElementById("messageLabel").innerHTML = "Message";
      $('#messageLabel').css('color','#1abc9c')

      $('#messageLabel').animate({
        top: -10,
      })
    } else {
      $('#messageLabel').css('color','transparent')

      $('#messageLabel').animate({
        top: 0,
      })   
      document.getElementById("messageLabel").innerHTML = "";

    }
  };
  return (
    <>
      <section id="contact">
        <div className="container pt-5 mt-5">
          <h2 className="text-center">CONTACT ME</h2>
          <div className="divider ">
            <div className="line"></div>
            <div className="icon">
              <svg
                className="svg-inline--fa fa-star fa-w-18"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            </div>
            <div className="line"></div>
          </div>
           <div className="container p-5">
           <div className="control-group mb-3">
              <div className="form-group  mb-0 pb-2 ">
              <label id="nameLabel"></label>
                <input
                  className="form-control overflow-hidden"
                  id="name"
                  type="text"
                  placeholder="Name"
                  required="required"
                  onInput={nameValdiation}
                  onKeyUp={nameLabel}
                />
                <div
                  id="nameAlert"
                  className="alert alert-danger w-100 mt-2 d-none"
                >
                  Special characters and numbers not allowed
                </div>
              </div>
            </div>
            <div className="control-group mb-3">
              <div className="form-group  mb-0 pb-2 ">
                <label id="emailLabel"></label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  required="required"
                  onInput={emailValdiation}
                  onKeyUp={emailLabel}
                />
              </div>
              <div
                id="emailAlert"
                className="alert alert-danger w-100 mt-2 d-none"
              >
                Email not valid *exemple@yyy.zzz
              </div>
            </div>
            <div className="control-group mb-3">
              <div className="form-group  mb-0 pb-2 ">
                <label id="phoneLabel"></label>
                <input
                  className="form-control"
                  id="phone"
                  type="number"
                  placeholder="Phone Number"
                  required="required"
                  onInput={phoneValdiation}
                  onKeyUp={phoneLabel}
                />
                <div
                  id="PhoneAlert"
                  className="alert alert-danger w-100 mt-2 d-none"
                >
                  Enter valid Phone Number (11 digit)
                </div>
              </div>
            </div>
            <div className="control-group mb-3">
              <div className="form-group  mb-0 pb-2 ">
                <label id="messageLabel"></label>
                <textarea
                  className="form-control"
                  id="Message"
                  type="text"
                  placeholder="Message"
                  required="required"
                  rows={5}
                  onKeyUp={messageLabel}
                />
              </div>
            </div>
            <br />
            <div id="success" ></div>
            <div className="">
              <button
                className="btn btn-primary btn-xl"
                id="sendMessageButton"
                type="submit"
                onClick={submit}
              >
                Send
              </button>
            </div>
           </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
