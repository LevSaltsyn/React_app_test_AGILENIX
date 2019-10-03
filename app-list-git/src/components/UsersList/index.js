import React, { useEffect } from "react";
import "./style/UserList.css";

const UsersList = ({ gitUsers, getDataGit, gitUserData }) => {
  useEffect(() => {
    getDataGit();
  }, []);
  let topTen = gitUsers.slice(0, 10);
  return (
    <div>
      <h1>
        Top 10{" "}
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          gitHub
        </a>{" "}
        users in Odessa:
      </h1>
      {topTen.map(_ => {
        return (
          <div key={_.id} className="container">
            <img
              className="avarar"
              src={_.avatar_url}
              width="80"
              alt="avarar"
            />
            <div>
              <h3 className="name">
                <a
                  className="profile-link"
                  href={_.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {_.login}
                </a>
                {gitUserData[_.id] && gitUserData[_.id].name}
              </h3>
              <p className="work-experience">
                {gitUserData[_.id] && gitUserData[_.id].bio}
              </p>
              <h4 className="from">
                <i className="fas fa-map-marker-alt"></i>{" "}
                {gitUserData[_.id] && gitUserData[_.id].location}
                <i className="far fa-envelope mail"></i>{" "}
                {gitUserData[_.id] && gitUserData[_.id].email}
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
