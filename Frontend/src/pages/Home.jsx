import React from "react";
import UberLogo from "../images/uber-logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-no-repeat bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1631034339161-882d80abe776?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] pt-8 h-screen w-full flex justify-between flex-col">
        <img src={UberLogo} alt="Uber Logo" className="w-16 ml-8" />
        <div className="py-4 px-4 bg-white pb-7">
          <h2 className="text-3xl font-bold">Get Started With Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
