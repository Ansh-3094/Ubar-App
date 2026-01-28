import React, { useState } from "react";
import UberLogo from "../images/uber-logo.png";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setuserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setuserData({
      Email: email,
      Password: password,
    });
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="p-7 h-screen flex flex-col justify-between ">
        <div>
          <img src={UberLogo} alt="Uber Logo" className="w-16 mb-10" />
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-lg font-medium mb-2">What's your email?</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              required
              placeholder="Enter Your Email"
            />

            <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              required
              placeholder="Enter Your Password"
            />

            <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-3 w-full text-lg placeholder:text-base transition-all duration-200 ease-out hover:bg-neutral-800 hover:shadow-md active:scale-[0.98] h-12">
              Login
            </button>
          </form>
          <p className="text-center">
            New here?
            <Link to="/signup" className="text-blue-600 ml-1.5">
              Create new Account
            </Link>
          </p>
        </div>
        <div>
          <Link
            className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-3 w-full text-lg placeholder:text-base transition-all duration-200 ease-out hover:bg-green-400 hover:shadow-md active:scale-[0.98] h-12"
            to="/captain-login"
          >
            Sign in as Captain
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
