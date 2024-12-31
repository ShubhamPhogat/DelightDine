import React from "react";
import Headers from "./Headers";
import { NavLink } from "react-router-dom";
// import { Bill } from ;
import { motion } from "framer-motion";
import { buttonClick } from "../animations";
import { FaArrowLeft } from "react-icons/fa";
import { BiListOl } from "react-icons/bi";
const CheckOut = () => {
  return (
    <main className="w-screen min-h-screen flex bg-green-100 items-center justify-start flex-col ">
      <Headers />

      <div
        style={{
          "box-shadow":
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        }}
        className="w-full flex flex-col items-center justify-center mt-40 px-6 md:px-24 2xl:px-96 shadow-3xl gap-12 pb-24"
      >
        <img
          src="https://img.freepik.com/premium-photo/3d-rendering-online-payment-mobile-illustration_270292-957.jpg"
          className="w-full md:w-656 rounded-3xl "
          alt=""
        />
        <hi className="text-[50px] text-headingColor font-bold">
          Amount paid successfully
        </hi>
        <motion.div {...buttonClick}>
          <NavLink
            to={"/"}
            className="flex items-center justify-center gap-4 cursor-pointer text-2xll text-textColor font-semibold px-4 py-2 rounded-md border border-gray-300 hover:shadow-md"
          >
            <FaArrowLeft className="text-3xl text-textColor" /> Go to Home Page
          </NavLink>
        </motion.div>
      </div>
    </main>
  );
};

export default CheckOut;
