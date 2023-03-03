import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../style/More.css";

const Moren3 = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <br />
      <div className="container">
        <div className="contOne">
          <h1 className="text-center text-warning fw-bold">I SAVE LIVES</h1>
          <p className="text-center"><b>
            Every donation is critical and you can make a lifesaving difference.
            Patients with trauma, undergoing surgery, or with conditions that
            require blood transfusions, such as sickle cell disease, need blood
            and blood products. You can help.</b>
          </p>

          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-dark ">DID YOU KNOW…?</h3>

              <ul class="list-group">
                <li class="list-group-item">
                  About every 2 seconds, someone in the world needs blood.
                </li>
                <li class="list-group-item">
                  Only 3% of age-eligible individuals in the world give blood
                  each year.
                </li>
                <li class="list-group-item">
                  Most blood type fall into one of the four major groups: A, B,
                  AB, O. However, some people have rare blood types that fall
                  outside the major groups, and for these patients, we need a
                  more diverse blood supply.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="container">
        <div className="row ">{/** justify-content-inline */}
          <div className="col-md-6 text-md-center">
          <button
              onClick={() => navigate("/moren2")}
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
              onClick={() => navigate("/more")}
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
export default Moren3;
