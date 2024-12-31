import React, { useEffect } from "react";
import { LoginBg, Logo } from "../assesets";
import LoginInput from "../components/LoginInput";
import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";
import { FcGoogle } from "react-icons/fc";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../config/firebase.config";
import { validateUserJwtToken } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../context/actions/userAction";
import { alertInfo, alertWarning } from "../context/actions/alertActions";
import { BsDisplay } from "react-icons/bs";
const Login = () => {
  const [useremail, setuserEmail] = useState("");
  const [userPassword, setuserPasssword] = useState("");
  const [userConfirmPassword, setuserConfirmPasssword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const alert = useSelector((state) => state.alert);
  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  const signInWithGoogle = async () => {
    console.log("clicked");
    await signInWithPopup(firebaseAuth, provider).then((userCard) => {
      firebaseAuth.onAuthStateChanged((cred) => {
        if (cred) {
          cred.getIdToken().then((token) => {
            validateUserJwtToken(token).then((data) => {
              dispatch(setUserDetails(data));
            });
          });
        }
      });
    });
  };
  const signUpWithEmailPass = async () => {
    console.log("cliclked");
    if (useremail === "" || userPassword === "" || userConfirmPassword === "") {
      dispatch(alertInfo("Rquired fields should no be empty"));
    } else {
      if (userPassword === userConfirmPassword) {
        await createUserWithEmailAndPassword(
          firebaseAuth,
          useremail,
          userPassword
        ).then((userCred) => {
          firebaseAuth.onAuthStateChanged((cred) => {
            if (cred) {
              cred.getIdToken().then((token) => {
                validateUserJwtToken(token).then((data) => {
                  console.log(data);
                  dispatch(setUserDetails(data));
                });
                navigate("/", { replace: true });
              });
            }
          });
        });
      } else {
        dispatch(alertWarning("Password doesn't match"));
      }
    }
  };
  const signInWithEmailPass = async () => {
    if (useremail !== "" && userPassword !== "") {
      await signInWithEmailAndPassword(
        firebaseAuth,
        useremail,
        userPassword
      ).then((userCred) => {
        firebaseAuth.onAuthStateChanged((cred) => {
          if (cred) {
            cred.getIdToken().then((token) => {
              validateUserJwtToken(token).then((data) => {
                console.log(data);
                dispatch(setUserDetails(data));
              });
              navigate("/", { replace: true });
            });
          }
        });
      });
    }
  };

  return (
    <div
      className="w-screen h-screen relative overflow-hidden flex
    "
    >
      <img
        src={LoginBg}
        className="w-full h-full object-cover absolute"
        alt=""
      />

      <div className="flex flex-col items-center  bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6 ">
        <div className="flex items-center justify-start gap-4 w-full">
          <img src={Logo} className="w-8" alt="" />
          <p className="text-slate-400 fint-semibold text-3xl">city</p>
        </div>

        <p className="text-3xl font-semibold text-slate-400">Welcome Back</p>
        <p className="text-xl text-slate-400 -mt-6">
          {" "}
          {isSignUp
            ? "Register up with following"
            : "Sign up with the following"}
        </p>

        <div className=" w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
          <LoginInput
            placeholder={`  Email Here`}
            inputState={useremail}
            inputStateFunction={setuserEmail}
            type="email"
            icons={<FaEnvelope className="text-xl text-textColor" />}
          />
          <LoginInput
            placeholder={`  Paasword Here`}
            inputState={userPassword}
            inputStateFunction={setuserPasssword}
            type="password"
            icons={<FaLock className="text-xl text-textColor" />}
          />
          {isSignUp && (
            <LoginInput
              placeholder={` Confirm Paasword Here`}
              inputState={userConfirmPassword}
              inputStateFunction={setuserConfirmPasssword}
              type="password"
              icons={<FaLock className="text-xl text-textColor" />}
            />
          )}
          {!isSignUp ? (
            <p className="text-slate-400 mx-1">
              {" "}
              Doesn't have an account:
              <motion.button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-red-400 underline cursor-pointer bg-transparent"
                {...buttonClick}
              >
                create one
              </motion.button>
            </p>
          ) : (
            <p className="text-slate-400 mx-1">
              {" "}
              Already have an account:
              <motion.button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-red-400 underline cursor-pointer bg-transparent"
                {...buttonClick}
              >
                sign up
              </motion.button>
            </p>
          )}
          {!isSignUp ? (
            <motion.button
              {...buttonClick}
              onClick={signInWithEmailPass}
              className=" w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-teal-50 text-xl capitalize hover:bg-red-600 transition-all duration-150"
            >
              {" "}
              sign up
            </motion.button>
          ) : (
            <motion.button
              onClick={signUpWithEmailPass}
              {...buttonClick}
              className=" w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-teal-50 text-xl capitalize hover:bg-red-600 transition-all duration-150"
            >
              {" "}
              sign in
            </motion.button>
          )}
        </div>
        <div className=" flex items-center justify-between  gap-16">
          <div className="w-24 h-[1px] rounded-md bg-white ">
            <p className="text-white mx-9">or</p>
            {/* <div className="w-24 h-[1px] rounded-md bg-white "></div> */}
          </div>
        </div>
        <motion.div
          onClick={signInWithGoogle}
          {...buttonClick}
          className="flex items-center justify-center px-20 py-2 my-4 bg-white backdrop-blur-md cursor-pointer rounded-3xl gap-4"
        >
          <FcGoogle className="text-3xl" />
          <p className=" capitalize text-base text-headingColor">
            {" "}
            sign in with Google
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
