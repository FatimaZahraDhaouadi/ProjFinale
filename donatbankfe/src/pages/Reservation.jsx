import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
import "../style/Reservation.css";

function Reservation({}) {
  
  const [bookingData, setBookingData] = useState({
    dateTime: "",
    donationType: "",
  });

  const navigate = useNavigate();
  
  const handleBookingSubmit = (event) => {

    event.preventDefault();
    console.log(bookingData.dateTime, bookingData.donationType);

    const authToken = localStorage.getItem("user");
    const user = JSON.parse(authToken);

    const dataToSend = {
      ...bookingData,
      user: user,
    };

    fetch("http://localhost:8080/api/reservation/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Booking successful!");
          return response.json();
        } else {
          throw new Error("Booking failed.");
        }
      })
      .then((data) => {
        navigate(`/bookings/${data.id}`); 
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingData({ ...bookingData, [name]: value });
  };
  
  return (
    <>
      <Navbar />
      <div className="bgres">
        <br />
        <div className="cardres d-flex justify-content-center align-items-center bg-transparent">
          <div className="body mt-3">
            <h2 className="text-center fw-bold">RESERVATION</h2>
            <form onSubmit={handleBookingSubmit} className="text-center">
              <div className="">
                {" "}
                <br />
                <input
                  type="dateTime-local"
                  name="dateTime"
                  onChange={handleInputChange}
                />
              </div>{" "}
              <br />
              <div className="">
                {" "}
                <br />
                <select name="donationType" onChange={handleInputChange}>
                  <option value="">Select a donation type</option>
                  <option value="plasma">Plasma</option>
                  <option value="plate">Plate</option>
                  <option value="whole blood">Whole Blood</option>
                  <option value="Erythoplasmapheresis">
                    Erythoplasmapheresis/ Double unit
                  </option>
                </select>
              </div>{" "}
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-outline-danger">
                  BOOK NOW
                </button>
                <br />
                <br />
                <button
                  className="text-center btn btn-outline-danger "
                  onClick={() => navigate("/")}
                >
                  HOME
                </button>
              </div>
            </form>
            <br />
          </div>
        </div>
        <br />
      </div>
      <Footer />
    </>

    
  );
}

export default Reservation;
