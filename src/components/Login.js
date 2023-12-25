import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignnIn, setisSignIn] = useState(true);
  const toggleSignInForm = () => {
    setisSignIn(!isSignnIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
      </div>
      <form className="text-white w-3/12 absolute p-12 bg-black mx-auto right-0 left-0 my-36 rounded-lg bg-opacity-80 ">
        <h1 className="font-bold text-3xl py-4">
          {isSignnIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignnIn && (
          <input
            type="text"
            placeholder="Full Name"
            className=" rounded-lg p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className=" rounded-lg p-4 my-4 w-full bg-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          className=" rounded-lg p-4 my-4 w-full bg-gray-700"
        />
        <button className=" rounded-lg p-4 my-6 bg-red-700 w-full">
          {isSignnIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignnIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
