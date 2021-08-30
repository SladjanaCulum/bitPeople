import React, { useEffect } from "react";
import UserListItem from "../UserListItem/UserListItem";
import UserCardItem from "../UserCardItem/UserCardItem";
import { UserService } from "../services/UserService";
import "./MainPart.css";
import { Loading } from "../Loading/Loading";
import { NoResultPage } from "../NoResultPage/NoResultPage";

const MainPart = ({
  switchState,
  searchTerm,
  users,
  setUsers,
  isLoading,
  setIsLoading,
}) => {
  useEffect(
    () => {
      if(window.localStorage.getItem("areYouFirstTimeHere")=== null) {
        UserService().then((users) => {
          setUsers(users);
          setIsLoading(false);
        });
      }else if(window.localStorage.getItem("areYouFirstTimeHere") === "beenHereBefore"){
        UserService().then((users) => {
          let parsedArray;
          let savedArray = window.localStorage.getItem("arrayOfUsers");
          if(savedArray && savedArray.length) {
            parsedArray = JSON.parse(savedArray)
          }
          setUsers(parsedArray);
          setIsLoading(false);
        });
      }
      window.localStorage.setItem('areYouFirstTimeHere', 'beenHereBefore');

    },
    [setUsers,
    setIsLoading]
  );

  if (isLoading) return <Loading />;

  let arrayOfUsers = users.filter((elem) => {
    if (searchTerm === "") {
      return elem;
    } else if (
      elem.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      elem.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return elem;
    }
    return null;
  });
  window.localStorage.setItem("arrayOfUsers", JSON.stringify(arrayOfUsers))

  let countMan = 0;
  let countFam = 0;

  
  let component = <NoResultPage />;
  if (arrayOfUsers.length) {
    component = arrayOfUsers.map((user, index) => {

        (user.gender === "female") ? countFam++ : countMan++

      return switchState ? (
        <UserListItem
          imgOfUser={user.imgOfUser}
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          dateOfBirth={user.dateOfBirth}
          gender={user.gender}
          key={index}
        />
      ) : (
        <UserCardItem
          imgOfUserLarge={user.imgOfUserLarge}
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          dateOfBirth={user.dateOfBirth}
          key={index}
          gender={user.gender}
        />
      );
    });
  }
  
  return (
      <div className="containerMain">
          <div className="countingGender">Male: {countMan} Female: {countFam}</div>
          {component}
       </div>
  );
};

export default MainPart;
