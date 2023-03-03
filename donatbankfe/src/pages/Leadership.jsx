import "../style/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import React from "react";

function Leadership() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="containerteam">
        <div className="d-flex justify-content-center align-items-center bg-dark text-white">
          <img src="src\icones\team.png" alt="" className="img-fluid" />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2 className="text-center py-4">DR. EDGAR ENGLEMAN</h2>
            <p>
              Dr. Engleman is Professor of Pathology and Medicine at Stanford
              University School of Medicine. He joined the faculty after
              completing training in internal medicine (UCSF), biochemistry
              (NIH), immunology, rheumatology and transfusion medicine
              (Stanford). In addition to his role at the Stanford Blood Center,
              Dr. Engleman is Co-Director of the Immunology and Immunotherapy
              Program of the Stanford Cancer Institute. He has supervised more
              than 150 research trainees, authored 300 scientific articles and
              has been an editor of multiple scientific journals. He also
              teaches a popular course on tumor immunology at Stanford. For many
              years Dr. Engleman’s research group, which is comprised almost
              entirely of student trainees, has been studying rare but powerful
              white blood cells called dendritic cells. After developing methods
              for isolating and arming human dendritic cells, he conceived of
              the idea of using them to vaccinate patients against their own
              tumors. More than 25 years ago, he and his collaborators at
              Stanford, including staff of the Blood Center, began testing this
              idea in patients with cancer. His technology provided the basis
              for the Provenge prostate cancer vaccine, the first immunotherapy
              for cancer to be approved (in 2010) by the FDA. This vaccine
              opened the way to a new era in which immunotherapies are
              increasingly becoming a standard component of cancer treatment. In
              fact, Dr. Engleman’s lab recently discovered an extremely potent
              approach to arming and activating dendritic cells in tumor-bearing
              hosts that doesn’t require removal or manipulation of these cells,
              which has been shown to eradicate a variety of cancers in
              experimental animals.
            </p>
          </div>
          <div className="col-6">
            <img src="src\icones\dott.png" alt="" />
          </div>
        </div>
      </div>

      <br />
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <br />
          <p>
            We invite you to explore our website and learn about our research.
            We study the biology of immune cells and their roles in the
            pathogenesis of cancer and other life-threatening diseases. Based on
            what we learn, we strive to discover and develop new ways to reverse
            these immune cell abnormalities and thereby treat and hopefully cure
            disease.
          </p>
        </div>
      </div>

      <br />
      <div className="containerteam">
        <div className="d-flex justify-content-center align-items-center">
          <br />
          <img src="src\icones\dott4.avif" alt="" className="img-fluid" />
          <br />
        </div>
      </div>

      <br />
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <br />
          <br />
          <p>
            Myeloid cells, such as dendritic cells (DCs), macrophages and
            neutrophils, have been a long-term focus of the lab. Early on we
            demonstrated the ability of DCs activated ex vivo to induce
            anti-tumor immunity in patients with cancer. This work led to the
            development of Sipuleucel-T (Provenge) that was approved by the FDA
            in 2010 for the treatment of advanced prostate cancer. In 2015, we
            developed a strategy that reprograms immunosuppressive tumor
            associated DCs and macrophages into immunostimulatory antigen
            presenting cells, in situ, that entered clinical trials in 2021.
            During the past decade, our research has been directed at
            understanding the cellular and molecular basis of immune tolerance,
            which protects us from autoimmune disease but can be “hijacked” by
            cancers to promote their growth. In cancer, we discovered that lymph
            node-invading tumor cells induce resident T cells to become tumor
            specific Tregs that leave the lymph node and migrate to distant
            sites where they promote metastasis by blocking anti-tumor immunity.
            We are working now to identify the antigen presenting cells
            responsible for Treg induction in the lymph nodes. Most recently, we
            have identified three novel immune checkpoints on myeloid cells. By
            neutralizing these molecules, we have succeeded in slowing and
            sometimes eradicating cancers in mice, including metastatic disease.
            Conversely, stimulating one of these molecules results in immune
            tolerance that blocks the immune response in an antigen specific
            manner and can be used to prevent rejection of transplanted organs.
            These discoveries, which are the basis of current research in the
            lab, would not have been possible without a collaborative
            environment in which individual lab members are encouraged to pursue
            high-risk/high reward ideas and then work with other lab members to
            test them.
          </p>
        </div>
        <p className="text-end">— Dr. Edgar Engleman</p>
      </div>

      <div className="container">
        <div className="d-flex justify-content-center">{/** justify-content-inline */}
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

            <button
              onClick={() => navigate("/story")}
              className="btn btn-outline-danger btn-lg"
            >
              OUR STORY
            </button>
        </div>
      </div>

      <div className="containerdtt">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center col-3">
            <img src="src\icones\dott3.png" alt="" className="" />
          </div>
          <div className="d-flex justify-content-center align-items-center col-9">
            <img src="src\icones\dott3.png" alt="" className="imgLeader" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Leadership;
