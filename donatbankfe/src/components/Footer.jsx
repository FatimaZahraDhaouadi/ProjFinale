import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Home.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="fixed-bottom ">
        <div className="container-fluid">
          <div className="row text-white bg-dark">
            <div className="col-4">
              <p className="fw-bold text-center pt-4 pb-2">
                BLOOD TRANSFUSION CENTER
              </p>
            </div>
            <div className="col-4">
              <p className="fw-bold text-center pt-4 pb-2">CONTACTS</p>
            </div>
            <div className="col-4">
              <p className="fw-bold  text-center pt-4 pb-2">FOLLOW US</p>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer footer-expand-lg footer-dark bg-dark text-center">
        <div className="row container-fluid text-white py-4  ">
          <div className="col-4 ">
            <img
              src="src\icones\logo1.png"
              className="logo d-inline-block inline-text-top img-fluid"
              width="20%"
              height="20%"
            />
            <p>c/o Civil Hospital Transfusion Center</p>
            <p>30100 Venezia Mestre, Veneto, Italy</p>
            <br />
            <br />
          </div>

          <div className="col-4 text-center">
            <p>Acceptance: 085 27790</p>
            <p>Doctor: 085 4252573</p>
            <p>Email: Transfusion@BloodCenter.com</p>

            <div className="d-flex justify-content-center flex-column">
              <Link
                to="/privacy"
                className="text-decoration-none col text-white"
              >
                Cookie & Privacy Policy
              </Link>
            </div>
          </div>

          <div className="col-4 text-center">
            <div className="container-fluid">
              <Link className="navbar-brand" href="#">
                <img
                  src="src\icones\instagg.png"
                  width="33"
                  height="28"
                  className="d-inline-block align-text-top"
                />
              </Link>

              <Link className="navbar-brand" href="#">
                <img
                  src="src\icones\fb.png"
                  width="33"
                  height="28"
                  className="d-inline-block align-text-top"
                />
              </Link>

              <Link className="navbar-brand" href="#">
                <img
                  src="src\icones\linkedln.png"
                  width="33"
                  height="28"
                  className="d-inline-block align-text-top"
                />
              </Link>

              <Link className="navbar-brand" href="#">
                <img
                  src="src\icones\twitt.png"
                  width="33"
                  height="28"
                  className="d-inline-block align-text-top"
                />
              </Link>

              <Link className="navbar-brand" href="#">
                <img
                  src="src\icones\gith.png"
                  width="33"
                  height="28"
                  className="d-inline-block align-text-top"
                />
              </Link>
              <br />
              <br />
              <p className="text-center">
                Copyright &copy; {new Date().getFullYear()} - BlooodCenter -
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
