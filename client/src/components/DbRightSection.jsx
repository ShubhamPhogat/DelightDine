import React from "react";
import DbHeader from "./DbHeader";
import { Route, Routes } from "react-router-dom";
import DBHome from "./DBHome";
import DBItems from "./DBItems";
import DBNewItems from "./DBNewItems";
import DBOrders from "./DBOrders";
import DBusers from "./DBusers";
import AllUsers from "./AllUsers";
import { useDispatch, useSelector } from "react-redux";

// import Alive from "./Alive";

const DbRightSection = () => {
  // const dispatch=useDispatch();
  console.log("admin id is ", process.env.REACT_APP_ADMIN_ID);
  const user = useSelector((state) => state.user);
  return (
    <div>
      {user?.user_id === process.env.REACT_APP_ADMIN_ID ? (
        <>
          <div className=" w-full flex-col flex py-12">
            <DbHeader />

            <Routes>
              <Route path="/home" element={<DBHome />} />
              <Route path="/items" element={<DBItems />} />
              <Route path="/newItem" element={<DBNewItems />} />
              <Route path="/orders" element={<DBOrders />} />
              <Route path="/users" element={<DBusers />} />
              <Route path="/AllUsers" element={<AllUsers />} />
            </Routes>
          </div>
        </>
      ) : (
        <>
          <div className="relative left-40">
            <img
              className=" absolute left-80 top-40"
              src="https://firebasestorage.googleapis.com/v0/b/restaurant-app-ee8c7.appspot.com/o/Images%2Fadmin.png?alt=media&token=ddd5f5d8-78b1-4f97-8b42-2d62c5dd1a46"
              alt="You are not an admin"
            />
            <h1 className=" relative font-bold left-80 top-80 text-center">
              {" "}
              You are not an admin
            </h1>
          </div>
        </>
      )}
    </div>

    // <div className=" w-full flex-col flex py-12">
    //   <DbHeader />

    //   <Routes>
    //     <Route path="/home" element={<DBHome />} />
    //     <Route path="/items" element={<DBItems />} />
    //     <Route path="/newItem" element={<DBNewItems />} />
    //     <Route path="/orders" element={<DBOrders />} />
    //     <Route path="/users" element={<DBusers />} />
    //     <Route path="/AllUsers" element={<AllUsers />} />
    //   </Routes>
    // </div>
  );
};

export default DbRightSection;
