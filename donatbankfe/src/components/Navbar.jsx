import { Link } from "react-router-dom";
import "../style/Home.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="backgroundimg navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid navbar-image">
          <div>
            <div className="logo d-inline-block inline-text-top">
              <img src="/src/icones/logo1.png" width="150" height="150" />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <form className="d-flex col-2-3">
            <div>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <nav
        className="navbar navbar-expand navbar-dark bg-dark sticky-top"
        role="navigation"
      >
        <div className="navBtn container-fluid">
          <div className="collapse navbar-collapse">

            <ul className="navbar-nav gap-5">   
              <li className="nav-item">
                <Link
                  className="nav-link btn btn-dark"
                  aria-current="page"
                  href="#"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle btn btn-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </Link>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item fw-bold" href="#">
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#" to="/location">
                      Donation Center Locations & Hours
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#" to="/leadership">
                      Our Leadership
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle btn btn-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Give Blood
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item fw-bold" href="#">
                      HOW TO DONATE
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#" to="/process">
                      The Donation Process
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#" to="/preparing">
                      Preparing to Donate
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#" to="/post">
                      Post-Donation
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle btn btn-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Privacy
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" href="#"  to="/privacy">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
