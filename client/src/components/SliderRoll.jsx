import React, { useState } from "react";
import { HiCurrencyRupee, IoBasket } from "../assesets/icnons";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";
import { addNewItemToCart, getAllCartItems, updateLikes } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { alertSuccess, alertNULL } from "../context/actions/alertActions";
import { setAllCartItems, setCartItems } from "../context/actions/cartAction";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const SliderRoll = ({ data, index }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [liked, setliked] = useState(false);
  const id = "mZrgMxQDY4OC0gAShF3R";
  const hadnlelike = (type) => {
    console.log(type);

    if (!liked) {
      setliked(true);
      updateLikes(id, type)
        .then(() => {
          dispatch(alertSuccess("Thanks for feedback"));
          setTimeout(() => {
            dispatch(alertNULL());
            console.log("hat ja");
          }, 3000);
        })
        .catch((err) => console.log("can update likes", err));
    } else {
      setliked(false);
    }
  };

  const sendToCart = async () => {
    console.log(`slider roll data : ${data.productID}`);
    await addNewItemToCart(user?.user_id, data)
      .then((res) => {
        getAllCartItems(user?.user_id).then((items) => {
          dispatch(setCartItems(items));
        });
        console.log(res);
        dispatch(alertSuccess(`Item added to the cart`));
        setTimeout(() => {
          dispatch(alertNULL());
        }, 3000);
      })
      .catch((error) => {
        console.log(`error in adding item to cart ${error}`);
      });
  };
  return (
    <div>
      <div className="bg-gray-100 hover:bg-gray-200 shadow-lg backdrop-blur-xl rounded-xl flex items-center justify-between relative px-4 py-2 w-full md:w-340 md:min-w-350 gap-3">
        <img src={data.imageURL} className="w-40 h-40 object-contain" />
        <div className="relative pt-12">
          <p className="text-xl text-headingColor font-semibold">
            {data.product_name}
          </p>
          <p className="text-lg font-semibold text-red-500 flex items-center justify-center gap-1">
            <HiCurrencyRupee className="text-red-500" />
            {parseFloat(data.product_price).toFixed(2)}
          </p>
          <div className="flex flex-row">
            <motion.div
              {...buttonClick}
              onClick={sendToCart}
              className="w-8 h-8 rounded-full bg-red-500 flex item-center justify-center absolute -top-4 right-2 cursor-pointer"
            >
              <IoBasket className="text-2xl text-primary" />
            </motion.div>
            <motion.div
              {...buttonClick}
              onClick={() => {
                hadnlelike(data.product_category);
              }}
              className="w-8 h-8  rounded-full flex item-center justify-center absolute -top-3 right-12 cursor-pointer"
            >
              {liked ? (
                <FcLike className="text-2xl text-primary" />
              ) : (
                <FcLikePlaceholder className="text-2xl text-primary" />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderRoll;
