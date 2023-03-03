import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/Home.css";
import { useNavigate } from "react-router-dom";

function Preparing() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center ">
        <div className="mt-4">
          <h2 className="text-center">PREPARING TO DONATE</h2>
          <p className="mt-3">
            After making your appointment to donate blood, there are a few
            things you can do to prepare. Here are the DOs and DON’Ts of
            preparing to donate blood:
          </p>
          <div className="text-center">
            <img src="src\icones\preparing.jpg" alt=""/>
          </div>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        <p>
          <b>DO:</b>
        </p>
        <ol>
          <li>
            Always be sure to <b>drink plenty of water</b> before donating
            blood!
          </li>
          <li>
            <b>Eat an iron-rich meal.</b> Eating enough iron is essential to
            ensuring that your hemoglobin level is right for donating. You can
            check out some tips for getting enough iron here and on our Iron and
            Blood Donation page.
          </li>
          <li>
            <b>Bring your donor ID.</b> If you have a donor ID, be sure to bring
            it with you to your appointment, as well as valid photo
            identification.
          </li>
        </ol>
        <p>
          <b>DON'T:</b>
        </p>
        <ol>
          <li>
            <b>Drink alcohol.</b> You cannot donate with any alcohol in your
            system, so skip Happy Hour this time.
          </li>
          <li>
            <b>Eat fatty foods.</b> Fatty foods can inhibit the tests we do on
            your blood after donating.
          </li>
          <li>
            <b>Take aspirin (if you’re donating platelets).</b>Aspirin reduces
            the potency and performance of your platelets, so avoid taking
            aspirin for 48 hours before your platelet donation.
          </li>
        </ol>
      </div>

      <div className="container">
        <div className="row ">{/** justify-content-inline */}
          <div className="col-md-6 text-md-center">
          <button
              onClick={() => navigate("/process")}
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
              onClick={() => navigate("/post")}
              className="btn btn-outline-danger btn-lg"
            >
              NEXT PAGE
            </button>
          </div>
        </div>
      </div>
      <br />

      <Footer />
    </>
  );
}
export default Preparing;
