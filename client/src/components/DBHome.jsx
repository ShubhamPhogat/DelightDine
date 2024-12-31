import React, { useEffect } from "react";
import { CChart } from "@coreui/react-chartjs";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../api";
import { setAllProducts } from "../context/actions/productAction";

const DBHome = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!products) {
      getAllProduct().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []);

  const drinks = products?.filter((item) => item.product_category === "drinks");
  const chinese = products?.filter(
    (item) => item.product_category === "chinese"
  );
  const rice = products?.filter((item) => item.product_category === "rice");
  const bread = products?.filter((item) => item.product_category === "bread");
  const deserts = products?.filter(
    (item) => item.product_category === "deserts"
  );
  const curry = products?.filter((item) => item.product_category === "curry");
  const fruits = products?.filter((item) => item.product_category === "fruits");
  console.log(chinese);
  return (
    <div className="flex items-center justify-center flex-col pt-6 w-full h-full">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className="flex items-center justify-center">
          <div className="w-340 md:w-508">
            <CChart
              type="bar"
              data={{
                labels: [
                  "Drinks",
                  "Deserts",
                  "Fruits",
                  "Curry",
                  "Rice",
                  "Bread",
                ],
                datasets: [
                  {
                    label: "Category wise count",
                    backgroundColor: "#f87979",
                    data: [
                      drinks?.length,
                      deserts?.length,
                      rice?.length,
                      curry?.length,
                      chinese?.length,
                      fruits?.length,
                      bread?.length,
                    ],
                  },
                ],
              }}
              labels="months"
            />
          </div>
        </div>
        <div className="w-full h-full items-center justify-center">
          <div className="w-275 md:w-460">
            <CChart
              type="doughnut"
              data={{
                labels: ["Drinks", "Desserts", "Rice", "Bread", "Curry"],
                datasets: [
                  {
                    backgroundColor: [
                      "#41B883",
                      "#E46651",
                      "#00D8FF",
                      "#DD1B16",
                    ],
                    data: [40, 20, 80, 10],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBHome;
