import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Home.css";

function PeriodicTab() {
  return (
    <>
      <Card>
          <div className="periodic-table">
            <div className="table-row">
              <div>0+</div>
              <div>0-</div>
              <div>A+</div>
              <div>A-</div>
              <div>B+</div>
              <div>B-</div>
              <div>AB+</div>
            </div>

            <div className="table-row">
              <div>AB-</div>
              <div>Platelets</div>
              <div>Plasma</div>
            </div>
            
          </div>
     
      </Card>
    </>
  );
}
export default PeriodicTab;
