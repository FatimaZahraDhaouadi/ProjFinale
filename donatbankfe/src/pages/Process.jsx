import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Home.css";
import { useNavigate } from "react-router-dom";

function Process() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="bgProcess">
        <div className="text-center">
          <br />
          <h2>THE DONATION PROCESS</h2>
          <p>
            Congratulations, you made an appointment to donate blood and save
            lives! So what happens now?
          </p>
          <p>There are four basic steps to every blood donation:</p>
        </div>


        <div className="cardProcess mb-3 mt-3 bg-light">
          <div className="row g-0">
            <div className="col-md-8">
              <div className=" card-body mt-3 mb-3">
                <h5 className="card-title text-danger">1. REGISTRATION</h5>
                <br />
                <p className="container card-text">
                  When you arrive at the blood drive or at our Donor Center for
                  your appointment, a receptionist will take your name, address,
                  telephone number, and verify identification. At this time you
                  will also be asked to read donor education material and fill
                  out a Medical History Form to determine your eligibility.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-3 mb-3">
              <img
                src="src\icones\pr2.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
        </div>
        <br />
      </div>

      <div className="bg-dark">
        <br />
        <div className="cardProcess mb-3 bg-light">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body mt-3 mb-3">
                <h5 className="card-title text-danger">2. MEDICAL HISTORY</h5>
                <br />
                <p className="container card-text">
                  We will take your blood pressure, pulse, temperature, and a
                  drop of blood to test your hemoglobin level to make sure you
                  are eligible to give blood. You will also be asked
                  confidential questions about your medical history to be sure
                  that the donation is safe for you and that your blood is safe
                  to transfuse to others. This is also a great time to schedule
                  your next appointment!
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-3 mb-3">
              <img
                src="src\icones\pr4.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
        </div>
        <br />

        <div className="cardProcess mb-3 bg-light">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body mt-3 mb-3">
                <h5 className="card-title text-danger">3. THE DONATION</h5>
                <br />
                <p className="container card-text">
                  After preparing the puncture sight, we will insert a sterile
                  needle — you should feel only a slight pinch. Approximately
                  one pint of blood is drawn through the needle into a plastic
                  bag. The entire whole blood donation only takes 5 to 10
                  minutes*.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-3 mb-3">
              <img
                src="src\icones\pr3.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
        </div>
        <br />
      </div>

      <div className="bgProcess">
        <br />
        <div className="cardProcess mb-3 bg-light">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body mt-3 mb-3">
                <h5 className="card-title text-danger">
                  4. REST & REFRESHMENTS
                </h5>
                <br />
                <p className="container card-text">
                  After the blood donation is complete, you will be asked to
                  rest for 15 minutes and eat some light refreshments (cookies
                  and juice!) before resuming your normal activities. Most
                  donors feel perfectly fine afterward.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-3 mb-3">
              <img
                src="src\icones\pr1.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
        </div>

        <br />
        <div>
          <p className="text-end">
            <em>
              *The length of the donation process varies depending on the type
              of blood product you donate.
            </em>
          </p>
        </div>

        <div className="container">
        <div className="row ">{/** justify-content-inline */}
          <div className="col-md-6 text-md-center">
          <button
              onClick={() => navigate("/post")}
              className="btn btn-outline-danger mx-5 btn-lg"
            >
              BACK PAGE
            </button>
            <button
              onClick={() => navigate("/")}
              className="btn btn-outline-danger mr-2 btn-lg"
            >
              REGISTRATION
            </button>
          </div>

          <div className="col-md-6 text-md-center btn-lg">
            <button
              onClick={() => navigate("/login")}
              className="btn btn-outline-danger mx-5 btn-lg"
            >
              LOGIN
            </button>

            <button
              onClick={() => navigate("/preparing")}
              className="btn btn-outline-danger btn-lg"
            >
              NEXT PAGE
            </button>
          </div>
        </div>
      </div>

        <br />
      </div>
      <Footer />
    </>
  );
}
export default Process;
