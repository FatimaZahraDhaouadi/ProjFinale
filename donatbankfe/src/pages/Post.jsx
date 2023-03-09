import "../style/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Post() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center mt-3">
        <div className="mt-4">
          <h2>POST-DONATION</h2>
          <p>
            <b>
              Please call our post-donation callback line at (650) 725-9968
              immediately if you:
            </b>
          </p>
          <ul>
            <li>feel that your blood should not be given to a patient;</li>
            <li>are not sure that your blood is safe</li>
            <li>develop a fever within 24 hours after donating;</li>
            <li>have any illness within two (2) weeks of your donation; or</li>
            <li>are diagnosed by a physician as having West Nile, dengue, chikungunya, Zika, or Ebola virus Infection.</li>
          </ul>
        </div>
      </div>

      <div className="container text-center mt-4">
        <h5 className="text-danger">TAKING CARE OF YOURSELF AFTER DONATING BLOOD</h5>
        <img src="src\icones\post.jpg" alt="" className=" mt-3"/>
      </div>

      <div className="container d-flex justify-content-center mt-5 mb-5">
        <p><b>DO:</b></p>
        <ol>
            <li>Always be sure to <b>drink plenty of </b>to rehydrate.</li>
            <li><b>Sit down or lie down</b> if you feel lightheaded or dizzy; Call our post-donation callback line at <b>(650) 725-9968 </b>if you feel unwell.</li>
            <li><b>Rest and replenish iron.</b> We recommend you take an iron supplement and/or eat foods rich in iron combined with a source of vitamin C after your donation. Visit our Iron and Blood Donation page for more information.</li>
        </ol>
        <br />
        <p><b>DON'T:</b></p>
        <ol>
            <li>Drink <b>alcoholic beverages</b> for at least 24 hours after donating.</li>
            <li><b>Remove your bandage</b> for several hours; Keep your bandage clean and dry.</li>
            <li><b>Perform vigorous exercise</b> or heavy lifting for at least 24 hours after donating.</li>
        </ol>
      </div>
      
      <div className="container">
        <div className="row ">{/** justify-content-inline */}
          <div className="col-md-6 text-md-center">
          <button
              onClick={() => navigate("/preparing")}
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
              onClick={() => navigate("/process")}
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
export default Post;
