import React from "react";
import "../style/Reservation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Bookings() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="bgBk text-center mt-5 mb-5">
          <h1>
            THE BOOKING CONFIRMATION WILL BE SENT TO THE EMAIL ENTERED DURING
            THE LOG-IN
          </h1>
          <br />
          <h4 className="fw-light">
            The TBC Team thanks you for turning to our association
          </h4>
          <br />
          <h6 className="fw-lighter mb-3">See you soon...</h6>
          <div className="container text-center"></div>
          <button
            className="text-center btn btn-outline-danger "
            onClick={() => navigate("/")}
          >
            HOME
          </button>
          <br />
          <br />
          <button
            className="text-center btn btn-outline-danger "
            onClick={() => navigate("/reservation")}
          >
            RESERVATION
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Bookings;
