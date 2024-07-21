import "./App.css";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  let [uname, setUname] = useState("");
  let [password, setPassword] = useState("");
  let getData = (event) => {
    console.log(uname, password);
    event.preventDefault();
  };

  let [formData, setformData] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    umessege: "",
    index: "",
  });
  let getValue = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setformData(oldData);
    event.preventDefault();
  };

  let handleOnSubmit = (event) => {
    let currentuserformData = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessege: formData.umessege,
    };
    let allData = [...formData, currentuserformData];
    setformData(allData);
    console.log(allData);
    event.preventDefault();
  };

  return (
    <div className="App">
      <div className="container mb-3">
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={getData}>
              <div className="text-start my-3">
                <label>UseName</label>
                <input
                  type="text"
                  onChange={(event) => setUname(event.target.value)}
                  className="form-control"
                  value={uname}
                />
              </div>
              <div className="text-start my-3">
                <label>Password</label>
                <input
                  type="text"
                  onChange={(event) => setPassword(event.target.value)}
                  className="form-control"
                  value={password}
                />
              </div>
              <div className="text-start my-3">
                <button className=" ">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Container fluid>
        <Container>
          <div>
            <Row>
              <h1>Enqure Now</h1>
            </Row>
            <Row>
              <Col lg={6}>
                {formData.length}
                <form onSubmit={handleOnSubmit} className="p-3">
                  <div className="text-start pb-3">
                    <label className=" ">Name</label>
                    <input
                      type="text"
                      onChange={getValue}
                      value={formData.uname}
                      className="form-control"
                      name="uname"
                    />
                  </div>

                  <div className="text-start pb-3">
                    <label className="form-label ">Email</label>
                    <input
                      type="email"
                      onChange={getValue}
                      value={formData.uemail}
                      className="form-control"
                      name="uemail"
                    />
                  </div>

                  <div className="text-start pb-3">
                    <label className="form-label ">Phone</label>
                    <input
                      type="text"
                      onChange={getValue}
                      value={formData.uphone}
                      className="form-control"
                      name="uphone"
                    />
                  </div>

                  <div className="text-start pb-3">
                    <label className="form-label ">Messege</label>
                    <textarea
                      className="form-control"
                      onChange={getValue}
                      value={formData.umessege}
                      name="umessege"
                      id=""
                      row="3"
                    ></textarea>
                  </div>
                  <div className="text-start">
                    <button className="btn btn-primary ">
                      {formData.index !== "" ? "update" : "save"}
                    </button>
                  </div>
                </form>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default App;
