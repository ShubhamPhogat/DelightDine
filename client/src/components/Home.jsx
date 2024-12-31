import React from "react";
import { motion } from "framer-motion";
// import { Delivery } from "../assesets";
import { MdDeliveryDining } from "react-icons/md";
import { buttonClick, staggerFadeInOut } from "../animations";
import { Herobg } from "../assesets";
import { randomData } from "../utils/styles";
const Home = () => {
  // console.log(randomData);
  return (
    <motion.div className="  w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col items-start justify-start gap-6">
        <div className="px-4 py-1 bg-orange-200 rounded-full flex items-center justify-center gap-4">
          <p className=" text-orange-500 font-semibold text-lg ">
            {" "}
            Free Delivery
          </p>
          <div className="flex items-center justify-center bg-primary rounded-full w-10 h-10 shadow-md  ">
            <MdDeliveryDining className="flex items-center justify-center h-full w-full " />
          </div>
        </div>
        <p className="text-[40px] mr-30 text-headingColor md:text-[72px] font-sans font-extrabold tracking-wider">
          The Fasetest Delivery in{" "}
          <span className="text-orange-600"> Your City</span>{" "}
        </p>
        <p className="text-lg text-textColor">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, ea nemo
          suscipit minus quis aspernatur cumque qui dolorem aliquid libero quod
          perferendis, voluptatem eligendi sapiente vel sequi eveniet! Magnam,
          unde?
        </p>
        <motion.div
          {...buttonClick}
          className=" cursor-pointer bg-gradient-to-bl from-orange-400 to-orange-700 px-4 py-2 rounded-xl text-black text-base font-semibold"
        >
          {" "}
          Order Now
        </motion.div>
      </div>
      <div className="py-2 flex-1 px-12 flex items-center justify-end relative ">
        <img
          className="absolute  top-0 right-0 md:-right-12 w-full h-420 md:w-auto md:h-650 rounded-3xl"
          src={Herobg}
        />

        <div className="w-full md:w-460 ml-0 flex flex-wrap h-full items-center justify-center gap-4 gap-y-14  ">
          <motion.div
            {...buttonClick}
            key={0}
            {...staggerFadeInOut(0)}
            className="w-32 hover:w-90 hover:h-90 cursor-pointer shadow-md h-36 md:h-auto md:w-190 p-4 bg-lightOverlay backdrop-blur-3xl rounded-3xl felx flex-col items-center justify-center drop-shadow-lg"
          >
            <img
              src={randomData[0].imageURL}
              className="w-12 h-12 md:w-32 md:h-32 md:-mt-16 object-contain"
              alt=""
            />
            <p className="text-sm lg:text-xl font-semibold text-textColor">
              {randomData[0].product_name.slice(0, 14)}
            </p>
            <p className="text-[12px] text-center md:text-base text-lighttextGray font-semibold capitalize">
              {randomData[0].product_category}
            </p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="text-xs text-red-600">$</span>
              {randomData[0].product_price}
            </p>
          </motion.div>
          <motion.div
            {...buttonClick}
            key={1}
            {...staggerFadeInOut(1)}
            className="   cursor-pointer w-32 h-36 md:h-auto md:w-190 p-4 bg-lightOverlay backdrop-blur-3xl shadow-md rounded-3xl felx flex-col items-center justify-center drop-shadow-lg"
          >
            <img
              src={randomData[1].imageURL}
              className="w-12 h-12 md:w-32 md:h-32 md:-mt-16 object-contain"
              alt=""
            />
            <p className="text-sm lg:text-xl font-semibold text-textColor">
              {randomData[1].product_name.slice(0, 14)}
            </p>
            <p className="text-[12px] text-center md:text-base text-lighttextGray font-semibold capitalize">
              {randomData[1].product_category}
            </p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="text-xs text-red-600">$</span>
              {randomData[1].product_price}
            </p>
          </motion.div>
          <motion.div
            {...buttonClick}
            key={2}
            {...staggerFadeInOut(2)}
            className=" shadow-md w-32 cursor-pointer h-36 md:h-auto md:w-190 p-4 bg-lightOverlay backdrop-blur-3xl rounded-3xl felx flex-col items-center justify-center drop-shadow-lg"
          >
            <img
              src={randomData[2].imageURL}
              className="w-12 h-12 md:w-32 md:h-32 md:-mt-16 object-contain"
              alt=""
            />
            <p className="text-sm lg:text-xl font-semibold text-textColor">
              {randomData[2].product_name.slice(0, 14)}
            </p>
            <p className="text-[12px] text-center md:text-base text-lighttextGray font-semibold capitalize">
              {randomData[2].product_category}
            </p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="text-xs text-red-600">$</span>
              {randomData[2].product_price}
            </p>
          </motion.div>
          <motion.div
            {...buttonClick}
            key={3}
            {...staggerFadeInOut(3)}
            className=" shadow-md w-32 cursor-pointer h-36 md:h-auto md:w-190 p-4 bg-lightOverlay backdrop-blur-3xl rounded-3xl felx flex-col items-center justify-center drop-shadow-lg"
          >
            <img
              src={randomData[3].imageURL}
              className="w-12  h-12 md:w-32 md:h-32 md:-mt-16 object-contain"
              alt=""
            />
            <p className="text-sm lg:text-xl font-semibold text-textColor">
              {randomData[3].product_name.slice(0, 14)}
            </p>
            <p className="text-[12px] text-center md:text-base text-lighttextGray font-semibold capitalize">
              {randomData[3].product_category}
            </p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="text-xs text-red-600">$</span>
              {randomData[3].product_price}
            </p>
          </motion.div>
          <motion.div
            {...buttonClick}
            key={4}
            {...staggerFadeInOut(4)}
            className=" shadow-md w-32 h-36 cursor-pointer md:h-auto md:w-190 p-4 bg-lightOverlay backdrop-blur-3xl rounded-3xl felx flex-col items-center justify-center drop-shadow-lg"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/restaurant-app-ee8c7.appspot.com/o/Images%2F1686229223325_f2.png?alt=media&token=42653ce1-882f-4a98-9927-80648e3c295f"
              className="w-12 h-12 md:w-32 md:h-32 md:-mt-16 object-contain"
              alt=""
            />
            <p className="text-sm lg:text-xl font-semibold text-textColor">
              {randomData[4].product_name.slice(0, 14)}
            </p>
            <p className="text-[12px] text-center md:text-base text-lighttextGray font-semibold capitalize">
              {randomData[4].product_category}
            </p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="text-xs text-red-600">$</span>
              {randomData[4].product_price}
            </p>
          </motion.div>
          <motion.div
            {...buttonClick}
            key={5}
            {...staggerFadeInOut(5)}
            className="w-32 shadow-md cursor-pointer h-36 md:h-auto md:w-190 p-4 bg-lightOverlay backdrop-blur-3xl rounded-3xl felx flex-col items-center justify-center drop-shadow-lg"
          >
            <img
              src={randomData[5].imageURL}
              className="w-12 h-12 md:w-32 md:h-32 md:-mt-16 object-contain"
              alt=""
            />
            <p className="text-sm lg:text-xl font-semibold text-textColor">
              {randomData[5].product_name.slice(0, 14)}
            </p>
            <p className="text-[12px] text-center md:text-base text-lighttextGray font-semibold capitalize">
              {randomData[5].product_category}
            </p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="text-xs text-red-600">$</span>
              {randomData[5].product_price}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
