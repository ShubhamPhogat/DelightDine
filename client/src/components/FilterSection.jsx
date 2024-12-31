import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { staggerFadeInOut } from "../animations";
import { IoFastFood } from "react-icons/io5";
import { statuses } from "../utils/styles";
import SliderRoll from "./SliderRoll";
const FilterSection = () => {
  const [category, setCategory] = useState("fruits");
  const products = useSelector((state) => state.products);
  // console.log("this is product", products);
  return (
    <motion.div className="w-full flex items-start justify-start flex-col">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-2xl text-headingColor font-bold">Our Hot dishes</p>
          <div className="w-40 h-1 rounded-md bg-orange-500"></div>
        </div>
      </div>
      <div className="w-full overflow-x-scroll pt-6 flex items-center justify-center gap-6 py-8">
        {statuses && (
          <>
            <FilterCard
              setCategory={setCategory}
              key={0}
              data={"rice"}
              index={0}
            />
            <FilterCard
              setCategory={setCategory}
              key={1}
              data={"deserts"}
              index={1}
            />
            <FilterCard
              setCategory={setCategory}
              key={2}
              data={"fruits"}
              index={2}
            />
            <FilterCard
              setCategory={setCategory}
              key={3}
              data={"drinks"}
              index={3}
            />
            <FilterCard
              setCategory={setCategory}
              key={4}
              data={"bread"}
              index={4}
            />
            <FilterCard
              setCategory={setCategory}
              key={5}
              data={"curry"}
              index={5}
            />
            <FilterCard
              setCategory={setCategory}
              key={6}
              data={"chinese"}
              index={6}
            />
          </>
        )}
      </div>
      <div className="w-full flex items-center justify-evenly flex-wrap gap-4 mt-12">
        {products &&
          products
            .filter((data) => data.product_category === category)
            .map((data, i) => <SliderRoll key={i} data={data} index={i} />)}
      </div>
    </motion.div>
  );
};

export const FilterCard = ({ data, index, category, setCategory }) => {
  return (
    <motion.div
      key={index}
      onClick={() => setCategory(data)}
      {...staggerFadeInOut(index)}
      className={`group w-28 min-w-[128px] cursor-pointer rounded-md py-6 ${
        category === data ? "bg-red-500" : "bg-primary"
      } hover:bg-red-300 hover:translate-y-2 shadow-md flex flex-col items-center justify-center gap-4 `}
    >
      <div
        className={`w-10 h-10 rounded=full shadow-md flex items-center justify-center group-hover:bg-primary ${
          category === data ? " bg-primary" : " bg-red-500"
        } `}
      >
        <IoFastFood
          className={`${
            category === data ? " text-red-500" : "text-primary "
          } group-hover:text-red-500`}
        />
      </div>
      <p
        className={`text-xl font-semibold ${
          category === data ? "text-primary" : "text-textColor"
        } group-hover:text-primary`}
      >
        {data}
      </p>
    </motion.div>
  );
};

export default FilterSection;
