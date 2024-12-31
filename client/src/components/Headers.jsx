import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Avatar, Logo } from "../assesets";
import "./Headers.css";
import { motion, motionValue } from "framer-motion";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import { buttonClick, slideTop } from "../animations";
import { MdLogout, MdShoppingCart } from "../assesets/icnons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.config";
import { setUserNull } from "../context/actions/userAction";
import { setCartOn } from "../context/actions/displayCartAction";
const Headers = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [isMenu, setIsMenu] = useState(false);
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
  return (
    <div>
      <header className=" flex fixed inset-x-0 backdrop-blur-md z-50 top-0 items-center justify-between px-12 py-6 md:px-20">
        <NavLink to={"/"} className="flex item-center justify-center gap-4">
          <img src={Logo} className="w-12" alt="" />
          <p className="font-semibold text-xl text-slate-300">City</p>
        </NavLink>

        <nav className="flex items-center justify-center gap-8">
          <ul className="hidden md:flex items-center justify-center gap-16">
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyles : isNotActiveStyles
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyles : isNotActiveStyles
              }
              to={"/menu"}
            >
              Menu
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyles : isNotActiveStyles
              }
              to={"/services"}
            >
              Services
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyles : isNotActiveStyles
              }
              to={"/aboutUs"}
            >
              About us
            </NavLink>
          </ul>
          <motion.div
            {...buttonClick}
            onClick={() => {
              console.log("clicked");
              dispatch(setCartOn());
            }}
            className="relative cursor-pointer"
          >
            <MdShoppingCart className="text-3xl text-textColor" />
            {cart?.length > 0 && (
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 -right-1">
                <p className="text-primary text-base font-semibold">
                  {cart.length}
                </p>
              </div>
            )}
          </motion.div>
          {user ? (
            <>
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => setIsMenu(true)}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-md overflow-hidden hover:w-15 hover:h-15">
                  <motion.img
                    src={user?.picture ? user.picture : Avatar}
                    whileHover={{ scale: 1.25 }}
                    className=" w-full h-full object-cover  "
                    referrerPolicy="no-referrer"
                  />
                </div>
                {isMenu && (
                  <motion.div
                    {...slideTop}
                    // animate={(motionValue(10), 200, { duration: 2 })}
                    onMouseLeave={() => setIsMenu(false)}
                    className="px-6 py-4 bg-slate-100 flex flex-col justify-center shadow-md rounded-md absolute top-12 right-6 w-48 gap-4 hover:ease-in-out"
                  >
                    {user?.user_id === process.env.ADMIN_ID && (
                      <Link
                        className="hover:text-red-500 text-xl hover:-translate-y-1 text-textColor"
                        to={"/dashboard/home"}
                      >
                        Dashboard
                      </Link>
                    )}
                    <Link
                      className="hover:text-red-500 text-xl hover:-translate-y-1 text-textColor"
                      to={"/dashboard/myProfile"}
                    >
                      My profile
                    </Link>
                    <Link
                      className="hover:text-red-500 text-xl hover:-translate-y-1 text-textColor"
                      to={"/users_orders"}
                    >
                      Orders
                    </Link>
                    <hr />
                    <motion.div
                      {...buttonClick}
                      onClick={logOut}
                      className="group flex items-center justify-center rounded-md shadow-md bg-gray-100 hover:bg-gray-300 gap-3"
                    >
                      <MdLogout className="text-2xl text-textColor group-hover::text-headingColor" />
                      <p className="text-textColor text-xl group-hover:text-headingColor">
                        Sign Out
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </>
          ) : (
            <>
              <NavLink to={"/login"}>
                <motion.button
                  {...buttonClick}
                  className="px-4 py-2 rounded-md shadow-md bg-lightOverlay border border-red-300 cursor-pointer"
                >
                  Login
                </motion.button>
              </NavLink>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Headers;
