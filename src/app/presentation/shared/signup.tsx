import { createUser } from "../../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import SignInModal from "./signin";

import React, { useState } from "react";

export default function SignUpModal({ isOpen, onClose, onOpenSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [signInOpen, setSignInOpen] = useState(false);

  const navigate = useNavigate();

  const handleSignin = () => {
    onClose();
    // if (typeof onOpenSignIn === "function") setSignInOpen(true);
+  if (typeof onOpenSignIn === "function") onOpenSignIn();
  };

  const handleSignUp = () => {
    // Call the createUser function from useUser.ts to create a new user
    createUser({ email, password, firstName, lastName, phoneNumber, address });
  };
  if (!isOpen) return null;

  return (
    <div className="w-full h-full flex justify-center items-center   bg-opacity-50 fixed  z-40">
      <div className=" flex flex-col space-y-4 items-center z-50 bg-gray-100 my-24 w-1/2  p-6  justify-center rounded-lg">
        <div
          className="w-8 h-8 rounded-full absolute top-52 left-[890px] flex items-center justify-center bg-amber-300 text-black"
          onClick={onClose}
        >
          X
        </div>
        <div className="text-2xl font-semibold text-black">Sign Up</div>
        <div className="w-full flex flex-col space-y-4 ">
          <div className="text-left">Email</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="w-72 h-12 rounded-md px-4 py-2 bg-gray-500"
          />
        </div>
        <div className="w-full flex flex-col space-y-4 ">
          <div className="text-left">Password</div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-72 h-12 rounded-md px-4 py-2 bg-gray-500"
          />
        </div>
        <div className="w-full flex flex-col space-y-4 ">
          <div className="text-left">First Name</div>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-72 h-12 rounded-md px-4 py-2 bg-gray-500"
          />
        </div>
        <div className="w-full flex flex-col space-y-4 ">
          <div className="text-left">Last name</div>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-72 h-12 rounded-md px-4 py-2 bg-gray-500"
          />
        </div>
        <div className="w-full flex flex-col space-y-4 ">
          <div className="text-left">Address</div>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-72 h-12 rounded-md px-4 py-2 bg-gray-500"
          />
        </div>
        <div className="w-full flex flex-col space-y-4 ">
          <div className="text-left">Phone number</div>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-72 h-12 rounded-md px-4 py-2 bg-gray-500"
          />
        </div>
        <div
          onClick={handleSignUp}
          className="bg-green-800 text-white px-8 py-2 rounded-full cursor-pointer"
        >
          Sign Up
        </div>
        <div onClick={handleSignin} className="text-xs text-gray-400">
          {" "}
          Already registered? Sign In
        </div>
      </div>
      <SignInModal
        isOpen={signInOpen}
        onClose={() => {
          handleSignin;
        }}
      />
    </div>
  );
}
