import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../api";
import { setOrders } from "../context/actions/orederActions";
import OrderData from "./OrderData";
import Headers from "./Headers";

const UserOrders = () => {
  const dispatch = useDispatch();
  const [userOrders, setuserOrders] = useState(null);
  const orders = useSelector((state) => state.orders);
  const user = useSelector((state) => state.user);
  console.log(window.location.href);
  useEffect(() => {
    if (!orders) {
      getAllOrders().then((data) => {
        dispatch(setOrders(data));
        setuserOrders(data.filter((item) => item.userId === user.user_id));
      });
    } else {
      setuserOrders(orders.filter((data) => data.userId === user.user_id));
    }
  }, [orders]);
  return (
    <main className="w-screen min-h-screen flex items-center justify-start flex-col bg-primary">
      <Headers />
      <div className="w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
        {userOrders ? (
          <>
            {userOrders.map((item, i) => (
              <OrderData key={i} index={i} data={item} admin={true} />
            ))}
          </>
        ) : (
          <>
            <h1 className="text-headingColor font-bold text-[72px]"></h1>
          </>
        )}
      </div>
    </main>
  );
};

export default UserOrders;
