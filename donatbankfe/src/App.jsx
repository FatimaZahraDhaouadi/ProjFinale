import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import More from "./pages/More";
import Moren2 from "./pages/Moren2";
import Moren3 from "./pages/Moren3";
import LogIn from "./pages/LogIn";
import { useNavigate } from "react-router-dom";
import Story from "./pages/Story";
import Reservation from "./pages/Reservation";
import Privacy from "./pages/Privacy";
import Location from "./pages/Location";
import Leadership from "./pages/Leadership";
import Process from "./pages/Process";
import Preparing from "./pages/Preparing";
import Post from "./pages/Post";
import Bookings from "./pages/Bookings";

function App() {
  const navigate = useNavigate();

  const onLogin = (token) => {
  
    localStorage.setItem("user",JSON.stringify(token));
    console.log(token)
    const authToken = JSON.parse(localStorage.getItem("user"));
    if (authToken && authToken.id) {
      navigate("/reservation?"+ authToken.id)
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn onLogin={onLogin} />} />
        <Route path="/story" element={<Story/>} />
        <Route path="/reservation" element={<Reservation/>}/>
        <Route path="/privacy" element = {<Privacy/>}/>
        <Route path="/location" element = {<Location/>}/>
        <Route path="/leadership" element = {<Leadership/>}/>
        <Route path="/process" element={<Process/>}/>
        <Route path="/preparing" element={<Preparing/>}/>
        <Route path="/post" element={<Post/>}/>
        <Route path="/bookings" element={<Bookings/>}/>

        <Route path="/more" element={<More />} />
        <Route path="/moren2" element={<Moren2 />} />
        <Route path="/moren3" element={<Moren3 />} />
      </Routes>
    </>
  );
}

export default App;
