import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInOut } from "../animations";

const LoginInput = ({
  placeholder,
  icons,
  type,
  inputState,
  inputStateFunction,
  isSignUp,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <motion.div
      {...fadeInOut}
      className={`flex items-center justify-center gap-4 bg-slate-50 backdrop-blur-md rounded-lg w-full px-4 py-2 z-10 ${
        isFocus ? "shadow-md shadow-red-400" : "shadow-none"
      }`}
    >
      {icons}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-full  text-headingColor text-lg border-none font-semibold rounded-md outline-none "
        value={inputState}
        onChange={(e) => inputStateFunction(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </motion.div>
  );
};

export default LoginInput;
