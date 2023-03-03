import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Home.css";

function Table() {
  return (
    <>
    <div className="bgtab ">
      <div className="container py-3 text-center">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">*Days*</th>
              <th scope="col">Acceptance</th>
              <th scope="col">Controls</th>
              <th scope="col">Consultation and reclamation exams</th>
            </tr>
          </thead>
          <tbody>
            <tr className="fw-bold"> 
              <th scope="row">Monday</th>
              <td>8:30 - 13:00</td>
              <td></td>
              <td>10:00 - 12:00</td>
            </tr>
            <tr className="fw-bold">
              <th scope="row">Tuesday</th>
              <td>
                8:00 - 12:00
                <br />
                14:00 - 16:00
              </td>
              <td>10:00 - 12:00</td>
              <td>10:00 - 12:00</td>
            </tr>
            <tr className="fw-bold">
              <th scope="row">Wednesday</th>
              <td>
                8:00 - 12:00
                <br />
                14:00 - 16:00
              </td>
              <td></td>
              <td>10:00 - 12:00</td>
            </tr>
            <tr className="fw-bold">
              <th scope="row">Thursday</th>
              <td>
                8:00 - 12:00
                <br />
                14:00 - 16:00
              </td>
              <td>10:00 - 12:00</td>
              <td>10:00 - 12:00</td>
            </tr>
            <tr className="fw-bold">
              <th scope="row">Friday</th>
              <td>
                8:00 - 12:00
                <br />
                14:00 - 16:00
              </td>
              <td></td>
              <td>10:00 - 12:00</td>
            </tr>
            <tr className="fw-bold">
              <th scope="row">Saturday</th>
              <td>8:00 - 13:00</td>
              <td>8:00 - 10:00 </td>
              <td>10:00 - 12:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
export default Table;
