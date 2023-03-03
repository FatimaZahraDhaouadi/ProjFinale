import "bootstrap/dist/css/bootstrap.min.css";
import "../style/More.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Moren2 = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="containerTwo">
        <div className="bgMore2">
          <br />
          <br />
          <h1 className="text-center text-danger fw-bold">
            INNOVATIVE TECHNOLOGY USED TO ATTRACT NEW DONORS
          </h1>
          <br />
          <h4 className="text-center">
            Members of the public encouraged to give virtual blood donation to
            see the life-saving transformation of patients before their eyes.
          </h4>
          <br />
          <br />
          <div className="d-flex justify-content-center">
            <video controls className="contVideo mb-5">
              <source src="src\icones\VideoOne.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="containermor bg-light">
          <div className="text-center ">
            <br />
            <p>
              Transfusion Blood Center is creating a functional smartphone app
              that will show how blood can save and improve lives. The app
              connects to a large advertising screen with an empty blood bag and
              a sick patient. The app detects a sticker on the recipient's skin,
              which it then overlays with a plaster, needle and tube on the arm.
              As the participant watches, they see "blood" flowing down the tube
              from their arm and rising onto the screen in front of them. As the
              blood bag fills up, the virtual donor can see the sick patient
              gradually return to health before her eyes. The campaign features
              three people whose lives have been saved by donating blood.
            </p>
            <h1 className="text-center text-danger fw-bold">
              New plasma machines
            </h1>
            <br />
            <h4 className="text-center">
              New ‘female-friendly’ machines at plasma donor centres are
              enabling more lifesaving donations, almost doubling the number of
              women who are able to give plasma…
            </h4>
          </div>
          <br />
        </div>

        <div className="bgMore2 ">
          <div className="row d-flex justify-content-center">
            <div className="col-6">
              <img src="src\icones\more8.jpg" className="moreOne mt-4 mb-3 ml-auto" alt="" />
            </div>
            <div className="col-5 text-center py-4 mt-5">
              <p>
                Each year, around 17,000 people rely on plasma medicines. They
                have weakened immune systems, cancers and other diseases. Over
                50 different conditions can be treated with medicines made from
                plasma and the demand for plasma is growing every year. Up until
                now, the number of female donors has been severely restricted.
                The previous donation machines operated to minimum height and
                weight criteria that ruled most women out. Only around 6 per
                cent of the 4,600 plasma donors at the centers were female,
                because of the restrictions. However, the new machines operate
                with new height and weight criteria, based on more up to date
                evidence. The majority of women can now donate plasma, which
                will even up the donor mix, and bolster donations of a medicine
                under supply pressure. The machines can take donations from
                women who are shorter or who weigh less. Previously, a woman of
                around average height at 5ft 4ins tall had to weigh 12 stone
                8lbs to make a donation. Now, a woman who is 5ft 4ins tall only
                needs to weigh 9 stone to make a donation. The new machines are
                also designed solely for plasma donation, which gives them more
                advantages. Donors say the new machines are more comfortable and
                faster, with each donation taking about 35 minutes instead of 45
                minutes.
              </p>
            </div>
          </div>

          <br />
          <br />
          <div className="container">
            <div className="row ">
              {/** justify-content-inline */}
              <div className="col-md-6 text-md-center">
                <button
                  onClick={() => navigate("/more")}
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

              <div className="col-md-6 text-md-center ">
                <button
                  onClick={() => navigate("/login")}
                  className="btn btn-outline-danger mx-5 btn-lg"
                >
                  LOGIN
                </button>

                <button
                  onClick={() => navigate("/moren3")}
                  className="btn btn-outline-danger btn-lg"
                >
                  NEXT PAGE
                </button>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Moren2;
