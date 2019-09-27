import React from "react";
import logo from "../../logo.svg";
import "./style/UserList.css";

const UsersList = () => {
  return (
    <div>
      <div className="container">
        <img className="avarar" src={logo} width="80" />
        <div>
          <h3 className="name">
            <a
              className="profile-link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frank
            </a>
            Vladimer Agafonkin
          </h3>
          <p className="work-experience">Working on @VictiriaSicret</p>
          <h4 className="from">
            <i class="fas fa-map-marker-alt"></i> Kiyv, Ukraine
            <i class="far fa-envelope mail"></i>
            ssdfdf@mail.com
          </h4>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
