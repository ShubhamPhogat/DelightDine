import React, { useEffect } from "react";
import Headers from "../components/Headers";
import Home from "../components/Home";
import HomeSlider from "../components/HomeSlider";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts } from "../context/actions/productAction";
import { getAllProduct } from "../api";
import FilterSection from "../components/FilterSection";
import Cart from "../components/Cart";

const Main = () => {
  const products = useSelector((state) => state.products);
  const isCart = useSelector((state) => state.isCart);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!products) {
      getAllProduct().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []);

  return (
    <main className="w-screen min-h-screen flex items-center justify-start flex-col bg-primary">
      <Headers />
      <div className="w-full flex flex-col justify-center items-start mt-40 px-6 md:px-24 2xl:px-90  gap-12 pb-24">
        <Home />
        <HomeSlider />
        <FilterSection />
      </div>
      {isCart && <Cart />}
    </main>
  );
};

export default Main;
