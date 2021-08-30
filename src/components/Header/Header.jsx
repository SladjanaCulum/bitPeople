import React from "react";
import "./Header.css";
import { UserService } from "../services/UserService";

const Header = ({ setSwitch, switchState, setUsers, setIsLoading }) => {
  const onClick = () => setSwitch(!switchState);

  function refresh() {
    let counter = 0;
    let inMinutes = 0;
    let counterNode;
    let writeThis;
    counterNode = document.querySelector(".counterDiv");

    setInterval(function counting() {
      counter++;

      if (counter % 5 === 0) {
        console.log(counterNode);
        inMinutes++;
        writeThis = "last update was: " + inMinutes + "min ago";
      } else if (counter < 5) {
        writeThis = "last update was few seconds ago";
      }

      window.localStorage.setItem("write", writeThis);
    }, 1000);
    var lastUpdate = window.localStorage.getItem("write");
    counterNode.innerHTML = lastUpdate;

    setIsLoading(true);
    UserService().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }

  return (
    <nav>
      <h1>React Users</h1>
      <button className="title">About</button>
      <button className="switchButton" onClick={onClick}>
        {switchState ? (
          <span className="material-icons">view_module</span>
        ) : (
          <span className="material-icons">view_list</span>
        )}
      </button>
      <button className="refreshButton" onClick={refresh}>
        <span className="material-icons">refresh</span>
      </button>
    </nav>
  );
};

export default Header;
