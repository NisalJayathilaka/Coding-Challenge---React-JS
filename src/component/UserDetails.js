import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UserDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  return (
    <Fragment>
      <div style={{ margin: "20px", textAlign: "right" }}>
        <button
          className="btn btn-outline-primary rounded-pill"
          style={{ paddingLeft: "20px", paddingRight: "20px", margin: "5px" }}
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          Go Back
        </button>
      </div>
      <div
        style={{
          width: "75%",
          height: "400px",
          backgroundColor: "lightblue",
          margin: "auto",
          marginTop: "150px",
        }}
      >
        <img
          className="card-img-top "
          src={data.picture.large}
          alt="Card cap"
          style={{
            width: "170px",
            borderRadius: "50%",
            border: "10px solid #555",
            position: "absolute",
            top: "120px",
            left: "650px",
          }}
        />
        <p
          className="d-flex justify-content-center"
          style={{ position: "absolute", marginTop: "90px", left: "680px" }}
        >
          {data.name.first} {data.name.last}
        </p>
        <span
          className="d-flex justify-content-center"
          style={{ position: "absolute", marginTop: "150px", left: "450px" }}
        >
          <p style={{ marginRight: "60px" }}>{data.email}</p>
          <p style={{ marginRight: "60px" }}>{data.location.country}</p>
          <p>{data.phone}</p>
        </span>
      </div>
    </Fragment>
  );
}

export default UserDetails;
