import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/More.css";
import { useNavigate } from "react-router-dom";

const More = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="contMore">
        <div className=" row  bg-light">
          <img src="src\icones\more1.jpg" className="moreOne mt-3 mb-3" />
          <div className="col-7 text-center pt-5 mt-5">
            <h2 className="fw-bold text-danger">BLOOD</h2>
            <h4>What is blood?</h4>
            <p>
              Blood is a fluid that flows through the blood vessels, accounting
              for 8% of bodyweight. It is made up of liquid, plasma, and of
              corpuscles comprising red cells, white cells and platelets, known
              as ‘hemocomponents.’
            </p>
          </div>
        </div>
        <div className="row  bg-dark text-white">
          <div className="col-7 text-center pt-5 mt-5">
            <h2 className="fw-bold text-danger">Why give blood</h2>
            <h4>Who needs blood?</h4>
            <p>
              The need for blood and its components is constantly rising,
              because of an ageing population and the proliferation of many new
              treatments. Blood plays an indispensible part in many therapies,
              not just in emergency situations. You will not be informed as to
              who receives your blood, but you should know that your donation
              will be used in all sorts of different medical situations, from
              cancer patients to people suffering major haemorrhages through
              trauma and surgical interventions (including transplants and even
              childbirth).
            </p>
          </div>
          <img
            src="src\icones\more2.jpg"
            alt=""
            className="moreOne mt-3 mb-3 "
          />
        </div>
        <div className="row bg-light ">
          <img src="src\icones\more3.jpg" alt="" className="moreOne  mt-3 mb-3" />
          <div className="col-7 text-center pt-5 mt-5">
            <h2 className="fw-bold text-danger">Different forms of donation</h2>
            <h4>Whole blood donation</h4>
            <p>
              The most common form of donation is whole blood. This enables all
              the blood components such as red cells, white cells and platelets
              to be collected at the same time, for later processing.
            </p>
            <h4>Other types of donation</h4>
            <p>
              Recent scientific studies have come up with other forms of
              donation, such as the gathering of stem cells from umbilical cords
              or bone marrow, for use in innovative treatments for many
              diseases.
            </p>
          </div>
        </div>
        <div className="row bg-dark text-white">
          <div className="col-7 text-center pt-5 mt-5">
            <h4>Apheresis</h4>
            <p>
              Aferesis is a blood donation method in which the blood is passed
              through an apparatus that separates out the cells and returns the
              remainder to the donor through infusion. It is also possible for 2
              components to be removed simultaneously, in which case the process
              is called multicomponent donation. Aferesis donation has the
              advantage of being able to harvest a larger number of the
              components sick people need; the products are longer-lasting than
              donated whole blood. This type of donation is usually provided by
              donors who have already given blood. Recent scientific studies
              have come up with other forms of donation, such as the gathering
              of stem cells from umbilical cords or bone marrow, for use in
              innovative treatments for many diseases.
            </p>
          </div>
          <img src="src\icones\more4.png" alt="" className="moreOne mt-3 mb-3" />
        </div>

        <div className="row">
          <div className="col-7">
            <img src="src\icones\more5.jpg" alt="" className=" mt-3 mb-3"/>
          </div>
          <div className="col-5 mt-5">
            <img src="src\icones\more7.png" alt="" className="mt-5" />
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="row ">{/** justify-content-inline */}
          <div className="col-md-6 text-md-center">
          <button
              onClick={() => navigate("/moren3")}
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
              onClick={() => navigate("/moren2")}
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
};
export default More;
