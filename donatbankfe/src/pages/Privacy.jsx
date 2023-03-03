import "../style/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Privacy() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className="text-center py-4">Privacy Policy</h3>
        <p>
          The ODV Blood Donor Transfusion Center Association based in, c/o the
          Transfusion Center - hereinafter referred to as the "Association" - as
          Data Controller of personal data intends to accurately describe the
          management of the processing of Users' personal data through this
          Privacy Policy. The indications provided below are to be understood as
          information provided pursuant to art. 13 EU Regulation 2016/679
          (hereinafter RGPD) to those who interact with the Site and complies
          with Recommendation n. 2/2001 relating to the minimum requirements for
          online data collection in the European Union, adopted on 17 May 2001
          by the EDPB (European Data Protection Board, ex WP29). This
          information is not valid for other websites that may be consulted via
          links, for which the Association does not hold itself responsible in
          any way.
        </p>
        <br />

        <ol>
          <li>
            <b>Terms and conditions of use</b>
          </li>
          <p>
            The site responds to the purpose of providing Users with information
            regarding the purpose of the Association, the methods through which
            it is possible to become a Donor, the activities that are organized,
            the conventions, the news and the contacts. The processing of
            personal data will be based on the principles of lawfulness,
            correctness, transparency, purpose limitation and retention, data
            minimization, accuracy, integrity and confidentiality.
          </p>
          <br />
          <li>
            <b>Limits of Liability</b>
          </li>
          <p>
            The Association cannot be held responsible in any way for damages of
            any nature caused directly or indirectly by accessing the site, by
            the inability or impossibility of accessing it and by the use of the
            information contained therein. The Association reserves the right to
            modify or simply update the content of the site, in part or
            completely, even following changes in the legislation on the
            protection of personal data.
          </p>
          <br />
          <li>
            <b>Identification details of the Data Controller</b>
          </li>
          <p>
            The Data Controller of personal data is the Fidas Pescara Blood
            Donors Association ODV, Via Blood Center c/o the Transfusion Center
          </p>
          <br />

          <li>
            <b>Type of data processed - Navigation data and Cookies</b>
          </li>
          <p>
            The computer systems and software procedures used to operate this
            website acquire, during their normal operation, some personal data
            whose transmission is implicit in the use of Internet communication
            protocols. This is information that is not collected to be
            associated with identified interested parties, but which by their
            very nature could, through processing and association with data held
            by third parties, allow users to be identified.
          </p>
        </ol>

        <h3 className="text-center py-4">Cookie Policy</h3>
        <p>
          Whenever the User accesses this website, he will accept this privacy
          policy. You will also accept the use of the cookies described below.
          Cookies are short text fragments (letters and/or numbers) that allow
          the web server to store information on the client (the browser, e.g.
          Internet Explorer, Chrome, Firefox, Opera...) to be reused during the
          same visit to the site (session cookies) or later, even days later
          (persistent cookies). They are an essential part of the functioning of
          our website: their main objective is to improve the User's browsing
          experience. In the case of system cookies, for example, they help us
          remember the preferences (language, country, etc.) of the individual
          User during navigation and during future visits. Other cookies allow
          us to collect information to improve our website, adapting it to the
          individual interests of users, or making searches faster. Cookies are
          stored, based on the User's preferences, by the single browser on the
          specific device used (computer, tablet, smartphone). <br />
          <br /> <b>Tipologie di cookie:</b>
          <br />
          Based on the characteristics and use of cookies, we can distinguish
          different categories: This site uses the following types of cookies
        </p>
        <ul>
          <li>
            <b>Technical cookies</b>
          </li>
          <p>
            Are those strictly necessary for the correct functioning of the
            Website which are used to manage various services linked to the
            websites (such as for example a login or access to reserved
            functions on the websites). The duration of cookies is strictly
            limited to the work session or they can make use of a longer
            permanence time in order to remember the visitor's choices.
            Disabling strictly necessary cookies can compromise the use and
            navigation experience of the website.
          </p>

          <ul>
            <li>
              <b>Analysis cookies (analytics).</b>
            </li>
            <p>
              notation of the requested resources, the time of the request, the
              method used to submit the request to the server, the size of the
              file obtained in response, the numerical code indicating the
              status of the response given by the server (successful, error,
              etc.) and other parameters relating to the operating system and
              the User's IT environment. These data are used for the sole
              purpose of obtaining anonymous statistical information on the use
              of the Site and to check its correct functioning. The data in
              question could also be used, upon request by the competent
              judicial authority, and with the guarantees provided by law, to
              ascertain responsibility in the event of any computer crimes
              committed against the Site. These cookies, even without
              identifying the User, allow, for example, to detect if the same
              User returns to connect at different times. Disabling these
              cookies can be done without any loss of functionality and will be
              dealt with in detail later.
            </p>
            <li>
              <b>Profiling cookies</b>
            </li>
            <p>
              (not used by the Website). These are permanent cookies used to
              identify (anonymously or not) the User's preferences and improve
              their browsing experience. For more information on these cookies
              not used by the Website, we invite you to visit the appropriate
              section on the website www.garanteprivacy.it/cookie
            </p>
          </ul>
        </ul>

        <p>
          Most browsers accept cookies automatically, but it is possible to
          change the settings to delete cookies or to prevent their acceptance.
          The following links explain how cookies can be controlled with the
          main types of browsers. This choice will apply to all websites
          visited. </p>
          <ul>
            <br />
            <li>
             <b>Internet Explorer:</b> 
              <Link>https://support.microsoft.com/en-us/kb/27883/it</Link>
            </li>
            <br />
            <li>
              <b>Chrome:</b>
              <Link>https://support.google.com/chrome/answer/95647?hl=it</Link>
            </li>
            <br />
            <li>
              <b>Firefox:</b>
              <Link>
                https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie?redirectlocale=en-US&redirectslug=Enabling+and+disabling+cookies
              </Link>
            </li>
            <br />
            <li>
              <b>Safari:</b>
              <Link>https://support.apple.com/it-it/HT201265</Link>
            </li>
            <br />
            <li>
              <b>Opera:</b>
              <Link>http://help.opera.com/Wi</Link>
            </li>
          </ul>
      </div>

      <br />
      <div className="container">
        <div className="d-flex justify-content-center">{/** justify-content-inline */}
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

      <br />
      <br />
      <Footer />
    </>
  );
}
export default Privacy;
