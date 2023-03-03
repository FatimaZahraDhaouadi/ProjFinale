import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import React from "react";
import Navbar from "../components/Navbar";
import "../style/Home.css";
import { useNavigate } from "react-router-dom";

function Location() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="container mt-5 mb-5">
        <div className="imgloc">
          <h1 className="text-center">FOR BLOOD DONORS</h1>
          <div className="row">
            <div className="col-6">
              <br />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4098.598511748728!2d12.318028384811143!3d45.441090640388566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1c7511cd1f1%3A0xfc7c01f280ca9309!2sStazione%20di%20Venezia%20Santa%20Lucia!5e0!3m2!1sit!2sit!4v1677695619020!5m2!1sit!2sit"
                width="400"
                height="350"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <br />
              <br />
            </div>
            <div className="col-6 text-center py-5">
              <h3 className="mt-5">LOCATION</h3>
              <p>Acceptance: 085 27790</p>
              <p>Doctor: 085 4252573</p>
              <p>Email: Transfusion@BloodCenter.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-flex justify-content-center">{/** justify-content-inline */}
            <button
              onClick={() => navigate("/")}
              className="btn btn-outline-danger btn-lg"
            >
              REGISTRATION
            </button>
            <button
              onClick={() => navigate("/login")}
              className="btn btn-outline-danger btn-lg mx-5"
            >
              LOGIN
            </button>
        </div>
      </div>
     <br />
      <Footer />
    </>
  );
}
export default Location;
