import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders } from "../api";
import { setOrders } from "../context/actions/orederActions";
import OrderData from "./OrderData";
const DBOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  console.log(orders);
  useEffect(() => {
    if (!orders) {
      getAllOrders().then((data) => {
        dispatch(setOrders(data));
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center flex-col pt-6 w-full gap-4">
      {orders ? (
        <>
          {orders.map((item, i) => (
            <OrderData key={i} index={i} data={item} admin={true} />
          ))}
        </>
      ) : (
        <>
          <h1 className="text-headingColor font-bold text-[72px]"></h1>
        </>
      )}
    </div>
  );
};

export default DBOrders;
