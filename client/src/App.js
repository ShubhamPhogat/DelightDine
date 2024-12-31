import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./container/Main";
import Login from "./container/Login";
import { getAuth } from "firebase/auth";
import { app } from "./config/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setUserDetails } from "./context/actions/userAction";
import { getAllCartItems, validateUserJwtToken } from "./api";
import { fadeInOut } from "./animations";
import { motion } from "framer-motion";
import { Alert, MainLoader } from "./components";
import Dashboard from "./container/Dashboard";
import DBusers from "./components/DBusers";
import { setCartItems } from "./context/actions/cartAction";
import CheckOut from "./components/CheckOut";
import UserOrders from "./components/UserOrders";

function App() {
  const firebaseAuth = getAuth(app);
  const [isLoading, setIsLoading] = useState(false);
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    firebaseAuth.onAuthStateChanged((cred) => {
      if (cred) {
        cred.getIdToken().then((token) => {
          validateUserJwtToken(token).then((data) => {
            if (data) {
              getAllCartItems(data.user_id).then((items) => {
                console.log(items);
                dispatch(setCartItems(items));
              });
            }
            console.log(data);
            dispatch(setUserDetails(data));
          });
        });
      }
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      {isLoading && (
        <motion.div
          {...fadeInOut}
          className="fixed z-50 inset-0 bg-lightOverlay backdrop-blur-md flex items-center justify-center w-full"
        >
          <MainLoader />
        </motion.div>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Main />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/checkout_success" element={<CheckOut />} />
        <Route path="/users_orders" element={<UserOrders />} />
      </Routes>
      {alert?.type && <Alert type={alert?.type} message={alert?.message} />}
    </div>
  );
}

export default App;
