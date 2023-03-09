import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ListAllUser() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [backupUser, setBackupUser] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=20");
      const jsonData = await response.json();
      setUsers(jsonData.results);
      setBackupUser(jsonData.results);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function getUser() {
    return backupUser;
  }

  function filterUser(userType) {
    let filtredUser = getUser().filter((type) => type.gender === userType);
    return filtredUser;
  }

  function handleUser(e) {
    let typeUser = e.target.value;
    console.log();
    typeUser !== "all" ? setUsers(filterUser(typeUser)) : setUsers(getUser());
  }

  return (
    <Fragment>
      <div style={{ margin: "20px", textAlign: "right" }}>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => {
            window.location.reload(true);
          }}
        >
          Generated New Users
        </button>
      </div>
      <div className="flex" style={{ marginLeft: "60px" }}>
        <span className=" justify-content-start">{users.length} new faces</span>
        <span className="d-flex justify-content-end">
          <button
            value="all"
            onClick={handleUser}
            type="button"
            className="btn btn-outline-primary rounded-pill"
            style={{ paddingLeft: "20px", paddingRight: "20px", margin: "5px" }}
          >
            All
          </button>
          <button
            value="male"
            onClick={handleUser}
            type="button"
            className="btn btn-outline-primary rounded-pill"
            style={{ margin: "5px" }}
          >
            GENTS
          </button>
          <button
            value="female"
            onClick={handleUser}
            type="button"
            className="btn btn-outline-primary rounded-pill"
            style={{ margin: "5px" }}
          >
            LADIES
          </button>
        </span>
      </div>

      <div className="row">
        <div className="col-12 text-center">
          {users.map((user) => (
            <img
              key={user.login.uuid}
              style={{ margin: "10px" }}
              alt="profile pictures"
              src={user.picture.large}
              onClick={() => {
                navigate("/Coding-Challenge---React-JS/userDetails", { state: user });
              }}
            ></img>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default ListAllUser;
