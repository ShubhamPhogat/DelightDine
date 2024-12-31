import axios from "axios";
export const baseURL =
  "http://127.0.0.1:5001/restaurant-app-ee8c7/us-central1/app";
export const validateUserJwtToken = async (token) => {
  try {
    const res = await axios.get(`${baseURL}/api/user/jwtVerification`, {
      headers: { Authorization: "Bearer " + token },
    });
    return res.data.data;
  } catch (error) {
    return null;
  }
};

export const addNewProduct = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/api/products/create`, { ...data });
    console.log(res.data);
    return res.data.data;
  } catch (error) {
    return null;
  }
};
// get all the products

export const getAllProduct = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/products/all`);
    console.log(res);
    return res.data.data;
  } catch (error) {
    return null;
  }
};
export const deleteAProduct = async (productId) => {
  try {
    const res = await axios.delete(
      `${baseURL}/api/products/delete/${productId}`
    );
    console.log(res.data);
    return res.data.data;
  } catch (error) {
    return null;
  }
};
export const getAllUsers = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/user/all`);
    // console.log(res.data.data);
    return res.data.data;
  } catch (err) {
    return null;
  }
};
export const addNewItemToCart = async (user_id, data) => {
  try {
    const res = await axios.post(
      `${baseURL}/api/products/addToCart/${user_id}`,
      { ...data }
    );
    console.log(res.data);
    return res.data.data;
  } catch (error) {
    console.log(`error in adding item to cart ${error}`);
  }
};
export const getAllCartItems = async (user_id) => {
  try {
    const res = await axios.post(
      `${baseURL}/api/products/getCartItems/${user_id}`
    );
    return res.data.data;
  } catch (error) {
    console.log(` error nin colllecting user data :${error}`);
  }
};
export const incrementItemQuant = async (user_id, productId, type) => {
  console.log(user_id);
  console.log(productId);
  console.log(type);
  try {
    const res = axios.post(
      `${baseURL}/api/products/updateCart/${user_id}`,
      null,
      { params: { productId: productId, type: type } }
    );
    return res.data.data;
  } catch (error) {
    return null;
  }
};
export const getAllOrders = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/products/orders`);
    return res.data.data;
  } catch (error) {
    console.log(` error nin colllecting order data :${error}`);
  }
};
export const updateOrederSts = async (order_id, sts) => {
  try {
    const res = await axios.post(
      `${baseURL}/api/products/updateOrder/${order_id}`,
      null,
      { params: { sts: sts } }
    );
    return res.data.data;
  } catch (error) {
    console.log("error in updating item", error);
  }
};
export const updateLikes = async (id, type) => {
  try {
    const res = await axios.post(
      `${baseURL}/api/products/updateLikes/${id}`,
      null,
      { params: { type: type } }
    );
    console.log("data", res.data);
    return res.data;
  } catch (err) {
    console.log("error in likes", err);
  }
};
