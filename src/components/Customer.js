import React, { useEffect, useState } from "react";
import profile_picture from "../images/profile_picture.png";
import { CogIcon, BellIcon, PencilAltIcon } from "@heroicons/react/outline";

const Customer = () => {
  const [customer, setCustomer] = useState(null);
  useEffect(() => {
    fetch("https://dev.beepbeep.tech/v1/sample_customer")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCustomer(data);
      });
  }, []);
  return (
    <div className="w-full h-96 bg-blue-200 flex flex-col">
      <div className="flex justify-end items-center py-4 px-4 sm:px-10 drop-shadow-md">
        <PencilAltIcon className="w-7 m-2 hover:cursor-pointer transition-all hover:scale-110 text-gray-500" />
        <BellIcon className="w-7 m-2 hover:cursor-pointer transition-all hover:scale-110 text-gray-500" />
        <CogIcon className="w-7 m-2 hover:cursor-pointer transition-all hover:scale-110 text-gray-500" />
      </div>

      <div className="w-full h-full flex flex-col justify-center items-center lg:items-start pb-14">
        <div className="flex items-center mx-4 lg:mx-40">
          <img
            className="rounded-full w-40 sm:w-48 border-4 border-white drop-shadow-md hover:cursor-pointer"
            src={profile_picture}
            alt="profile picture"
          />
          <div className="flex flex-col text-gray-500 ml-4 text-left drop-shadow-md">
            {customer ? (
              <h1 className="text-2xl sm:text-3xl font-bold">
                {customer.name}
              </h1>
            ) : (
              <div></div>
            )}
            {customer ? (
              <h1 className="text-sm sm:text-base hover:underline hover:cursor-pointer">
                {customer.email}
              </h1>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
