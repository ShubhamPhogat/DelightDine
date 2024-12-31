import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../assesets";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import { buttonClick } from "../animations";
import { motion } from "framer-motion";
const DbLeftSection = () => {
  return (
    <div
      className="h-full py-12 flex flex-col
    bg-gray-300 backdrop-blur-md shadow-md 
    min-w-210 w-300 gap-3"
    >
      <NavLink to={"/"} className="flex item-center  gap-4 px-6">
        <img src={Logo} className="w-12" alt="" />
        <p className="font-semibold text-xl text-slate-500">City</p>
      </NavLink>
      <hr />

      <ul className="flex flex-col gap-4">
        <NavLink
          to={"/dashboard/home"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`
              : `${isNotActiveStyles}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/dashboard/orders"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`
              : isNotActiveStyles
          }
        >
          Orders
        </NavLink>
        <NavLink
          to={"/dashboard/items"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`
              : isNotActiveStyles
          }
        >
          Items
        </NavLink>
        <NavLink
          to={"/dashboard/newItem"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`
              : `${isNotActiveStyles}`
          }
        >
          Add New Item
        </NavLink>
        <NavLink
          to={"/dashboard/AllUsers"}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`
              : `${isNotActiveStyles}`
          }
        >
          All users
        </NavLink>
      </ul>

      <div className=" w-full bg-red-500 flex flex-col justify-center items-center h-225 mt-auto px-2 absolute bottom-0 left-0">
        <div className="h-7 w-7 rounded-full bg-white">
          <span className=" text-gray-400  flex justify-center">?</span>
        </div>
        <p className="my-2 text-white ">Help Center</p>
        <p className="my-2 items-center text-center text-white">
          Having Trouble in the city please contact us form more details
        </p>
        <motion.div
          {...buttonClick}
          className="cursor-pointer w-15 h-7 rounded-xl bg-white text-red-400 px-3  "
        >
          Get in Touch
        </motion.div>
      </div>
    </div>
  );
};

export default DbLeftSection;
