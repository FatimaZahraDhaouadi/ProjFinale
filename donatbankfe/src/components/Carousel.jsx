import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Carousel() {
  const navigate = useNavigate();

  return (
    <div className="carouselSlide img-fluid">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner ">
          <div className="carousel-item">
            <img
              src="src\icones\four.jpg"
              className="carusimg d-block w-100 bg-white img-fluid"
              alt="..."
            />
            <div className="textslide carousel-caption d-none d-md-block bg-white text-primary">
              <h2>I AM A BLOOD DONOR</h2>
              <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
              </p>
              <button className="btn btn-primary" onClick={()=> navigate("/more" )}>More..</button>
            </div>
          </div>

          <div className="carousel-item ">
            <img
              src="src\icones\two.jpg"
              className="carusimg d-block w-100 bg-white img-fluid"
              alt="..."
            />
            <div className="textslide carousel-caption d-none d-md-block bg-white text text-danger">
              <h2>THE NEWEST EQUIPMENT</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
              <button className="btn btn-danger" onClick={()=> navigate("/moren2" )}>More..</button>
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src="src\icones\five.jpg"
              className="carusimg d-block w-100 bg-white img-fluid"
              alt="..."
            />
            <div className="textslide carousel-caption d-none d-md-block bg-white text text-danger">
              <h2>I SAVE LIVES</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
              <button className="btn btn-danger" onClick={()=> navigate("/moren3" )}>More..</button>
            </div>
          </div>


        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon btn btn-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon btn btn-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Carousel;
