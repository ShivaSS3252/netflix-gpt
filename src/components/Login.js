import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { BG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignnIn, setisSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, seterrorMessage] = useState(null);

  const dispatch = useDispatch();

  const handlebuttonclick = () => {
    //Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(message);

    if (message) return;
    //Sign / Sign Up
    if (!isSignnIn) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              seterrorMessage(error.message);
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);

          // ..
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };
  const toggleSignInForm = () => {
    setisSignIn(!isSignnIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white w-3/12 absolute p-12 bg-black mx-auto right-0 left-0 my-36 rounded-lg bg-opacity-80 "
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignnIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignnIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className=" rounded-lg p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className=" rounded-lg p-4 my-4 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" rounded-lg p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className=" rounded-lg p-4 my-6 bg-red-700 w-full"
          onClick={handlebuttonclick}
        >
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
