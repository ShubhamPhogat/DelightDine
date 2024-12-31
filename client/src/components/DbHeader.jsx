import React from "react";
import {
  BsFillBellFill,
  BsToggles2,
  MdLogout,
  MdSearch,
} from "../assesets/icnons";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Avatar } from "../assesets";
import { buttonClick } from "../animations";
import { useNavigate } from "react-router-dom";
import { app } from "../config/firebase.config";
import { setUserNull } from "../context/actions/userAction";
import { getAuth } from "firebase/auth";
const DbHeader = () => {
  const navigate = useNavigate();
  const firebaseAuth = getAuth(app);
  const dispatch = useDispatch();
  const logOut = () => {
    console.log("clickerd");
    firebaseAuth
      .signOut()
      .then(() => {
        dispatch(setUserNull());
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const user = useSelector((state) => state.user);
  return (
    <div className="flex items-center px-6 justify-between gap-3 w-full">
      <p className="text-2xl">
        Welcome to the City
        {user?.name && (
          <span className="block text-gray-400 text-xl  ">
            {user?.name}...!
          </span>
        )}
      </p>

      <div className="flex items-center justify-center gap-4">
        <div className="flex gap-1 border rounded-md shadow-md bg-lightOverlay h-8">
          <MdSearch className="h-8 w-8 bg-red-50 px-1 py-1" />
          <input
            type="text"
            className="bg-red-50 border-none outline-none px-3"
            placeholder="search here . . ."
          />
          <BsToggles2 className="h-8 w-6 bg-red-50" />
        </div>
        <motion.div
          {...buttonClick}
          className="w-8 h-8 rounded-md shadow-md mx-1 cursor-pointer backdrop-blur-md"
        >
          <BsFillBellFill className="px-2 py-2 w-full h-full" />
        </motion.div>
        <div className="w-10 h-110 rounded-md flex items-center justify-center shadow-md overflow-hidden ">
          <motion.img
            src={user?.picture ? user.picture : Avatar}
            whileHover={{ scale: 1.25 }}
            className=" w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <motion.div
          {...buttonClick}
          onClick={logOut}
          className="w-9 h-9 rounded-md shadow-md backdrop-blur-md cursor-pointer "
        >
          <MdLogout className="h-full w-full px-1 py-1" />
        </motion.div>
      </div>
    </div>
  );
};

export default DbHeader;
