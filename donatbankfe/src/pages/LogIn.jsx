import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../style/Reservation.css";

function LogIn({ onLogin }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false); // dichiarazione della variabile
  const [error, setError] = useState(null); // dichiarazione della variabile per gestire l'errore

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    const user = {
      email: email,
    };

    const response = await fetch("http://localhost:8080/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const data = await response.json();

      onLogin(data);
    } else {
      setError("LogIn failed");
    }

    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <br />
      <div className="bglog container img-fluid">
        <div className="cardlog d-flex justify-content-center align-items-center bg-transparent">
          <div className="body">
            <br />
            <h2 className="text-center fw-bold">LOGIN</h2>
            <form onSubmit={handleSubmit} className="text-center">
              {error && <p>{error}</p>}
              <div className="">
                {" "}
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>{" "}
              <br />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="text-center btn btn-outline-danger col-5"
                >
                  {isLoading ? "Loading..." : "LOGIN"}
                </button>
                 <br />
                 <br />
                <button
                  className="text-center btn btn-outline-danger "
                  onClick={() => navigate("/")}
                >
                  {isLoading ? "Loading..." : "REGISTRATION"}
                </button>

            </form>
            <br />
          </div>
        </div>
      </div>

      {/*   {!isLoading && email &&(
          <button onClick={() => navigate("/reservation")}>
            Vai alla pagina di prenotazione
          </button>
        )} 
         */}
      <br />
      <Footer />
    </>
  );
}
export default LogIn;
