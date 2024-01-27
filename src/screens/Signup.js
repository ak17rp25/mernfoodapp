import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
   const [userData, setuserData] = useState({username:"",email:"",password:'',geolocation:''});
   const navigate = useNavigate();

   const onChange =(e)=>{
    setuserData({...userData,[e.target.name]: e.target.value});
   }


    const handleSubmit = async(e)=>{
        //synethic event
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({username:userData.username,email:userData.email,password:userData.password,location:userData.geolocation})
        });
        const isUserDataValid = await response?.json();
        console.log(isUserDataValid);
        if(!isUserDataValid.success){
            alert('Enter Valid User Data');
        }else{
            setuserData({});
            navigate('/');
        }
    }



  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            name = "username"
            value={userData.name}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name ="email"
            value={userData.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name = "password"
            value={userData.password}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            GeoLocation
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name ="geolocation"
            value={userData.geolocation}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <Link to= "/loginuser" className="m-3 btn btn-danger">Already A User</Link>
      </form>
    </div>
  );
}
