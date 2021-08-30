import React from 'react';
import './UserCardItem.css'

const UserCardItem=({
    imgOfUserLarge,
    firstName,
    lastName,
    email,
    dateOfBirth,
    index,
    gender
})=>{
    let bgColorFemale = (gender === "female") ? "red" : "";
    let day = new Date(dateOfBirth).getDate();
    let month = new Date(dateOfBirth).getMonth() + 1;
    let year = new Date(dateOfBirth).getFullYear();
    let dob = `${day}.${month}.${year}`;
    return(
        <div className={`singleElUserCard ${bgColorFemale}`}>
        <img src={imgOfUserLarge} alt="img of user"/>
        <div className="info">
            <p> {firstName} {lastName}</p>
            <p>email: {email}</p>
            <p>date of birth: {dob}</p>
        </div>
    </div>
    )
}
export default UserCardItem;