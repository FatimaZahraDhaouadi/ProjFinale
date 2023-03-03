import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import "../style/Home.css";
import "../style/PeriodicTab.css";
import { useNavigate } from "react-router-dom";
import Registration from "../components/Registration";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Carousel />
      <div className="containerOne bg-dark py-3">
        <div className="row text-center text-white">
          <div className="col-6">
            <br />
            <br />
            <br />
            <h1 className="fw-bold">DONATE</h1>
            <br />
            <h4>The only fact of blood that is part of the good news..</h4>
            <p className="text-sm">
              Donating blood is a necessity: to ensure treatment for
              hemophiliacs, for organ transplants, to treat burn victims, to
              obtain the so-called life-saving drugs from plasma. Donate some of
              your own blood should be considered an act of civilization and a
              moral duty for anyone in good health. Act of love towards those
              who lack something important!
            </p>
            <br />
            <br />
            <button
              type="button"
              className="btn btn-outline-warning btn-lg"
              onClick={() => navigate("/login")}
            >
              LOGIN
            </button>
          </div>

          <div className="col-6">
            <img src="src\icones\cinque.png" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-light">
        <div className="tit2 text-center">
          <br />
          <br />
          <h2>ASSOCIATION</h2>
          <br />
          <h4>Blood Center Venice blood donors Onlus</h4>
          <p>
            We want to sensitize civil society to the donation of blood and its
            components. We contribute to the self-sufficiency of local blood,
            regional and national, and promote donor health education. For us,
            enhancing the "blood resource" from donation to clinical use, also
            through scientific research, is a fundamental mission.
          </p>
        </div>
        <br />
        <Card />
        <br />
        <br />
      </div>
     
      <Table />

      <div className=" bg-dark">
        <div className="row text-center text-white py-5">
          <div className="col-6">
            <img src="src\icones\peop.jpg" alt="" />
          </div>
          <div className="col-3">
            <p className="text-sm">
              Solidarity, altruism and responsibility are the beacons towards
              which we turn our actions. We are seriously committed to
              disseminating issues relating to the donation of blood and blood
              components. With equal seriousness, we release ourselves from
              transparency in the management of the Association. For us, blood
              donors are all unique but equal, because if the duty they
              voluntarily assume is identical, the same must be their
              acknowledgment.
            </p>
            <br />
            <button type="button" className="btn btn-outline-warning btn-lg" onClick={() => navigate("/story")}>
              READ OUR STORY
            </button>
          </div>
        </div>
      </div>

      <br />
      <Registration />
      <br />
      <br />
      <Footer />
    </>
  );
}
export default Home;
