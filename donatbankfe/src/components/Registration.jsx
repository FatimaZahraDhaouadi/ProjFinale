import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Home.css";
import { useNavigate } from "react-router-dom";

//DA AGGIUNGGERE MENU TENDINA TIPO DI SANGUE DA DONARE
const Registration = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [nameIsValid, setNameIsValid] = useState("");
  const [surnameIsValid, setSurnameIsValid] = useState("");
  const [emailIsValid, setEmailIsValid] = useState("");
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState("");

   //const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);

  function handleMexChange(event) {
    setMessage(event.target.value);
  }

  const handleRegistration = async (e) => {
    e.preventDefault();

    setLoading(true);
    const response = await fetch("http://localhost:8080/api/user/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, surname, email, phoneNumber, message }),
    });
    if (response.ok) {
      navigate('/login');
    } else {
      alert("Registration failed. Please try again.");
    }
   
    setLoading(false);
  };


  const validateName = (e) => {
    const valueName = e.target.value;
    setName(valueName);
    if (/^[a-z]{4,}$/.test(valueName)) {
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
    }
  };

  const validateSurname = (e) => {
    const valueSurname = e.target.value;
    setSurname(valueSurname);
    if (/^[a-z]{4,}$/.test(valueSurname)) {
      setSurnameIsValid(true);
    } else {
      setSurnameIsValid(false);
    }
  };

  const validateEmail = (e) => {
    const valEmail = e.target.value;
    setEmail(valEmail);
    if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(valEmail)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  const validatePhoneNumber = (e) => {
    const valPhoneNumber = e.target.value;
    setPhoneNumber(valPhoneNumber);
    if (/^\+?[0-9]{12,}$/.test(valPhoneNumber)) {
      setPhoneNumberIsValid(true);
    } else {
      setPhoneNumberIsValid(false);
    }
  };

  //tatuaggi presenti o se ha avuto malattie di recente

  return (
 
    <div className="containerform text-center text-light">
      <form onSubmit={handleRegistration}>
      <br />
      <h2 className="fw-bold">BECOME A DONOR</h2>
      <br />
        <div className="form-group ">
          <input
            type="text"
            className="form-control"
            placeholder="Name*"
            id="name"
            value={name}
            onChange={validateName}
          />
          {name.length > 1 && !nameIsValid && (
            <span>Please enter an available Name</span>
          )}
        </div>
        <br />
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Surname*"
            id="surname"
            value={surname}
            onChange={validateSurname}
            
          />
          {surname.length > 1 && !surnameIsValid && (
            <span>Please enter an available Surname</span>
          )}
        </div>
        <br />
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email*"
            id="email"
            value={email}
            onChange={validateEmail}
            
          />
          {email.length > 1 && !emailIsValid && (
            <span>Please enter an available Email</span>
          )}
        </div>
        <br />
        <div className="form-group">
          <input
            type="tel"
            className="form-control"
            placeholder="PhoneNumber*"
            id="phone"
            value={phoneNumber}
            onChange={validatePhoneNumber}
            
          />
          {phoneNumber.length > 1 && !phoneNumberIsValid && (
            <span>Please enter an available PhoneNumber</span>
          )}
        </div>
        <br />
        <div className="form-group">
          <textarea
            className="form-control"
            id="message"
            placeholder="Message*"
            rows="3"
            value={message}
            onChange={handleMexChange}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-outline-dark btn-lg" disabled={loading}>
        {/*  {isLoading ? "Loading..." : "Registration"}*/} REGISTRATION
        </button>
        <br />
        <br />
      </form>
    </div>
    
  );
};
export default Registration;
