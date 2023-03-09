import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Home.css";
import "../style/PeriodicTab.css";
import PeriodicTab from "./PeriodicTab";

function Card({ time }) {
  const [contatore, setContatore] = useState(1);

  useEffect(() => {
    const intervallo = setInterval(() => {
      setContatore((contatore) => contatore + 1);
    }, 2000); //incrementa il contatore ogni totsec

    return () => clearInterval(intervallo);
  }, []);

  if (contatore >= time) {
    clearInterval(intervallo);
  }

  return (
    <>
      <div className="bg-light">
        <div className="row">
          <div className="col ">
            <div className="counter card ">
              <div className="count card-body text-center">
                <h5 className="cardtitle text-danger ">DID YOU KNOW…?</h5>
                <h6 className="card-subtitle mb-3 text-muted">
                  About every two seconds, someone needs blood.
                </h6>
                <p className="cardtext">
                  That means, this many people have needed blood since you
                  arrived here:
                </p>
                <div className="text-danger display-5 ">{contatore}</div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title text-danger">BLOOD TODAY'S NEED</h5>
                <p className="card-text">
                  Those in red indicate a greater need today.
                </p>
              </div>
              <PeriodicTab />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
