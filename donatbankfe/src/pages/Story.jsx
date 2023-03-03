import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";

const Story = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className=" bg-white">
        <div className="container text-center text-dark py-5 ">
          <div className="">
            <img
              src="src\icones\story5.jpg"
              alt=""
              className="imgst img-fluid"
            />
          </div>
          <br />
          <br />
          <div className="text-center text-dark">
            <h1 className="text-center text-danger">
              MAKE THE RIGHT MOVE, COME AND DONATE!
            </h1>
            <br />
            <p>
              More than thirty years ago, it was July 15, 1983, the Association
              of Transfusion Blood Center of the c/o Civil Hospital was founded.
              An official birth that marked the beginning of a long journey,
              sometimes not easy, but always full of emotions and concrete
              results. A path that, in fact, had begun a few years before that
              date, given that the Association was already active in a
              non-formal way within the Transfusion Center of the same hospital
              where it still operates today. The main purpose that animated the
              initial nucleus of the founding members was to satisfy the
              increasing demands for blood of a hospital in continuous growth,
              through the use of exclusively periodic donors, thus avoiding the
              import of blood and blood components and, consequently, the
              dependence of Pescara on other regions.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <img src="src\icones\storyy.jpg" alt="" className="img-fluid" />
      </div>
      <div className=" bg-dark ">
        <div className="container text-center py-3 ">
          <br />
          <br />
          <div className="text-center text-light">
            <p>
              The commitment of occasional donors, often belonging to the family
              circle of patients / recipients, and the purchase from the rich
              North of a precious good such as blood, represented at the time
              the custom and the only possible option for Pescara and its
              hospital. It was hard work by the founders and the many passionate
              volunteers, today as then. A work carried out with determination
              and constancy, to instill in the population of Pescara the culture
              of gift and the awareness that the gesture of solidarity makes
              grow not only the individual, but the entire community. Right from
              the start, the Association worked in symbiosis with the
              Transfusion Center, reserving for itself the task of information,
              promotion, recruitment and convocation of donors. This happy
              combination was the strong point that allowed donors to approach
              new types of donation for the time (platelets, granulocytes,
              plasma) essential to support those ambitious programs of modern
              medicine, implemented already in the late 80s All these
              "innovative" aspects have contributed to forming the DNA of the
              Association, and these characteristics have been preserved even
              during the various transformations and changes that have occurred
              over the years: among all, the adhesion to the Federation of Blood
              Donors, which took place in 1987...
            </p>
          </div>
        </div>
      </div>

      <div className="bg-light ">
        <div className="container text-center py-5 ">
          <div className="text-center text-dark">
            <p>
              During these 30 years, the initiatives of the center have been
              countless. These include, in 1991, the twinning with the Hermandad
              de Donantes de Sangre Blood Donors Association of Leõn, Spain; and
              in 2012, the Joint Project with the National Association of Bone
              Marrow Donors (ADMO). At the same time, the efforts made to
              maximise awareness of blood donation have been relentless. <br />
              <b>
                Today, with pride, it can be said that many objectives are has
                been achieved, first of all self-sufficiency, thanks to the
                continuous increase of active members.
              </b>
              Ours is a long path full of experiences, but let's not forget how
              and when we were born: the roots represent the solid foundations
              on which the present and future rest, so we want to remember them,
              making the right tribute to those who have worked to create a
              reality that today has about 12 thousand members and 7 thousand
              active donors, and that in 2015 exceeded 14 thousand blood
              donations. There is still a long way to go and we want to travel
              it all together, young and old, to share the inexhaustible value
              of solidarity that makes us all participate and reach out towards
              the same goal. All linked by an invisible thread, yet
              indissoluble.
            </p>
            <br />
            <br />

            <div className="container">
              <div className="d-flex justify-content-center">
                {/** justify-content-inline */}
                  <button
                    onClick={() => navigate("/location")}
                    className="btn btn-outline-danger mx-5 btn-lg"
                  >
                    CONTACT US
                  </button>
                  <button
                    onClick={() => navigate("/")}
                    className="btn btn-outline-danger mr-2 btn-lg"
                  >
                    REGISTRATION
                  </button>
                  <button
                    onClick={() => navigate("/login")}
                    className="btn btn-outline-danger mx-5 btn-lg"
                  >
                    LOGIN
                  </button>

        
          
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Story;
