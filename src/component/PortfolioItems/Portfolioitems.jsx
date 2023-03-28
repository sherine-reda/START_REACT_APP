import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect } from "react";
import "./Portfolioitems.css";
function Portfolioitems({ image, title }) {
  let src;
  let alt;
  const handelClick = (e) => {
    let curentimg = e.target.previousElementSibling;
    if (curentimg != null) {
      src = curentimg.getAttribute("src");
      alt = curentimg.getAttribute("alt");
      const modalTitle = document.querySelector(".title");
      const modelImage = document.querySelector(".modelImage");
      modalTitle.innerHTML = alt;
      modelImage.setAttribute("src", src);
    }
  };

  return (
    <>
      <div className="col-md-6 col-lg-4 mb-5 mb-lg-0 cursor-pointer">
        <div
          className="item  cursor-pointer  position-relative"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content ">
                <button
                  type="button"
                  className="btn-close ms-auto p-2 "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>

                <div className="modal-header">
                  <div className="model-title m-auto w-50 ">
                    <h1
                      className="text-center m-auto fs-2 title"
                      id="exampleModalLabel"
                    >
                      {alt}
                    </h1>
                    <div className="divider mt-0 ">
                      <div className="line w-25"></div>
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
                      <div className="line w-25"></div>
                    </div>
                  </div>
                </div>
                <div className="modal-body">
                  <img src="" alt={title} className="img-fluid modelImage" />
                  <p className="text-center fs-6 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                </div>
                <div className="modal-footer m-auto">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    {" "}
                    <i className="fas fa-times  me-3"></i>Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img
            src={image}
            alt={title}
            onClick={handelClick}
            className="img-fluid   cursor-pointer"
          />
          <div
            onClick={handelClick}
            className="layer position-absolute d-flex top-0 text-white w-100 h-100 justify-content-center align-item-center"
          >
            <div className="icon text-white">
              <i className="fas fa-plus fa-3x text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolioitems;
