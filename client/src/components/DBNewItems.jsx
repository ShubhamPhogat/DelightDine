import React from "react";
import { useState } from "react";
import { statuses } from "../utils/styles";
import Spinner from "./Spinner";
import { FaCloudUploadAlt } from "react-icons/fa";
import {
  getDownloadURL,
  uploadBytesResumable,
  ref,
  deleteObject,
} from "firebase/storage";
import { storage } from "../config/firebase.config";
import { motion } from "framer-motion";
import {
  alertDanger,
  alertInfo,
  alertNULL,
  alertSuccess,
} from "../context/actions/alertActions";
import { useDispatch, useSelector } from "react-redux";
import { buttonClick } from "../animations";
import { MdDelete } from "react-icons/md";
import LinearBuffer from "./ProgressBar";
import { addNewProduct, getAllProduct } from "../api/index";
import { setAllProducts } from "../context/actions/productAction";

const DBNewItems = () => {
  const [itemName, setItemName] = useState("");
  const [Price, setPrice] = useState("");
  const [Progress, setProgress] = useState("");
  const [imageDownloadUrl, setimageDownloadUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("");
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}_${imageFile.name}`);

    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (error) => {
        dispatchEvent(alertDanger(`Error :${error}`));
        setTimeout(() => {
          dispatch(alertNULL());
        }, 3000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setimageDownloadUrl(downloadURL);
          setIsLoading(false);
          setProgress(null);
          dispatch(alertSuccess("Images Uploded to cloud"));
          setInterval(() => {
            dispatch(alertNULL());
          }, 3000);
        });
      }
    );
  };
  const deleteImageFromFirebase = () => {
    setIsLoading(true);
    const deleteref = ref(storage, imageDownloadUrl);
    deleteObject(deleteref).then(() => {
      setimageDownloadUrl(null);
      setIsLoading(false);
      dispatch(alertInfo("image removed from the cloud"));
      setTimeout(() => {
        dispatch(alertNULL());
      }, 3000);
    });
  };
  const saveFileData = () => {
    const data = {
      product_name: itemName,
      product_category: category,
      product_price: Price,
      imageURL: imageDownloadUrl,
    };
    var correct = true;
    if (!itemName || itemName === "") {
      dispatch(alertDanger("name field cant be empty"));
      correct = false;
    }
    if (!category || category === "") {
      dispatch(alertDanger("category field cant be empty"));

      correct = false;
    }
    if (!Price || Price === "") {
      dispatch(alertDanger("price field cant be empty"));

      correct = false;
    }
    if (!imageDownloadUrl || imageDownloadUrl === "") {
      dispatch(alertDanger("image field cant be empty"));

      correct = false;
    }
    if (correct) {
      console.log(data);
      addNewProduct(data).then((res) => {
        console.log(res);
        dispatch(alertSuccess("New item added"));
        setTimeout(() => {
          dispatch(alertNULL(""));
        }, 2000);
        setimageDownloadUrl(null);
        setItemName("");
        setPrice("");
        setCategory(null);
      });
      getAllProduct().then((data) => {
        console.log(data);
        dispatch(setAllProducts(data));
      });
    } else {
      setTimeout(() => {
        dispatch(alertNULL());
        console.log("hat ja");
      }, 3000);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center  gap-4  pt-6 px-24 w-full">
      <div className=" border border-gray-300 rounded-md p-4 w-full flex flex-col items-center justify-center gap-4">
        <InputValueFiekd
          type="text"
          placeholder="item name here "
          stateFunc={setItemName}
        />
        <div className="w-full flex items-center justify-around gap-3 flex-wrap">
          {statuses &&
            statuses?.map((data) => (
              <p
                key={data.id}
                onClick={() => setCategory(data.category)}
                className={` px-4 py-3 rounded-md text-xl  font-semibold cursor-pointer hover:shadow-xl  border border-gray-200 backdrop-blur-md ${
                  data.category === category
                    ? "bg-red-400 text-primary shadow-red-200"
                    : "bg-none"
                }`}
              >
                {data.title}
              </p>
            ))}
        </div>
        <InputValueFiekd
          type="number"
          placeholder={"items price here"}
          stateFunc={setPrice}
          stateValue={Price}
        />
        <div className="w-full bg-card h-300 rounded-md shadow-md border-gray-300 border-dotted cursor-pointer">
          {isLoading ? (
            <>
              <div className="w-full h-full flex item-center py-24 justify-center">
                <Spinner />
                {/* {Progress} */}
                <LinearBuffer />
              </div>
            </>
          ) : (
            <>
              {!imageDownloadUrl ? (
                <>
                  <label>
                    <div className="flex flex-col items-center justify-center h-full w-full cursor-pointer">
                      <div className="flex flex-col items-center justify-center cursor-pointer">
                        <p className=" font-bold text-4xl">
                          <FaCloudUploadAlt className="-rotate-0" />
                        </p>
                        <p className="text-lg text-textColor">
                          CLick to upload an image
                        </p>
                      </div>
                    </div>
                    <input
                      type="file"
                      name="upload-image"
                      accept="image/*"
                      onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </label>{" "}
                </>
              ) : (
                <>
                  <div className="relative w-full h-full overflow-hidden rounded-md">
                    <motion.img
                      whileHover={{ scale: 1.15 }}
                      src={imageDownloadUrl}
                      className="w-full h-full object-cover"
                    />
                    <motion.button
                      {...buttonClick}
                      type="button"
                      className="absolute top-3 right-3 p-3 rounded-full
                       bg-red-500 text-xl cursor-pointer outline-none
                        hover:shadow-md duration-500 transition-all ease-in-out"
                      onClick={() => {
                        deleteImageFromFirebase(imageDownloadUrl);
                      }}
                    >
                      <MdDelete className="-rotate-0" />
                    </motion.button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <motion.button
          {...buttonClick}
          onClick={saveFileData}
          className="w-9/12 py-2 rounded-md shadow-md bg-red-400 hover:bg-red-600 cursor-pointer text-primary"
        >
          Save
        </motion.button>
      </div>
    </div>
  );
};
export const InputValueFiekd = ({
  type,
  placeholder,
  stateValue,
  stateFunc,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-lightOverlay shadow-md outline-none rounded-md border border-gray-200 focus:border-red-400 "
        value={stateValue}
        onChange={(e) => stateFunc(e.target.value)}
      />
    </>
  );
};

export default DBNewItems;
