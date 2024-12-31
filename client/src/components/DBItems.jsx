// import MaterialTable from "material-table";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiCurrencyRupee } from "../assesets/icnons";
import { ThemeProvider, createTheme } from "@mui/material";
// import DataTable from "./DataTable";
import MaterialTable from "material-table";
import { deleteAProduct, getAllProduct } from "../api";
import { setAllProducts } from "../context/actions/productAction";
import { alertNULL, alertSuccess } from "../context/actions/alertActions";
const DBItems = () => {
  const products = useSelector((state) => state.products);
  const defalutMaterialTheme = createTheme();
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-6 h-800 9/12 object-contain">
      <ThemeProvider theme={defalutMaterialTheme}>
        <MaterialTable
          className="h-800"
          columns={[
            {
              title: "Image",
              field: "imageURL",
              render: (rowData) => (
                <img
                  src={rowData.imageURL}
                  className="w-32 h-16 object-contain rounded-md"
                />
              ),
            },
            {
              title: "Name",
              field: "product_name",
            },
            {
              title: "category",
              field: "product_category",
            },
            {
              title: "Price",
              field: "product_price",
              render: (rowData) => (
                <p className="text-2xl front-semibold text-textColor flex items-center justify-center gap-2">
                  <HiCurrencyRupee className="text-red-400 flex items-center justify-center gap-2" />
                  {parseFloat(rowData.product_price).toFixed(2)}
                </p>
              ),
            },
          ]}
          data={products}
          title="List of Products"
          actions={[
            {
              icon: "edit",
              tooltip: "Edit Data",
              onClick: (event, rowData) => {
                alert("You want to edit" + rowData.productId);
              },
            },
            {
              icon: "delete",
              tooltip: "Delete Data",
              onClick: (event, rowData) => {
                if (window.confirm("want to permanently dele the item")) {
                  alert("product deleted");
                  // deleteAProduct(rowData.productId).then((res) => {
                  //   dispatch(alertSuccess("product deleted"));
                  //   setInterval(() => {
                  //     dispatch(alertNULL);
                  //   }, 3000);
                  //   getAllProduct().then((data) => {
                  //     console.log(data);
                  //     dispatch(setAllProducts(data));
                  //   });
                  // });
                }
              },
            },
          ]}
        />
      </ThemeProvider>
    </div>
  );
};

export default DBItems;
