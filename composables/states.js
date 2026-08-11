import { coursesData } from "@/data/courses";
// import { useCourseStore } from '@/stores/courseStore'
// const courseStore = useCourseStore();
export const cartCourses = () => useState("cartCourses", () => []);

const setCartCourses = (val) => {
  cartCourses().value = val;
};

export const addCourseToCart = (id) => {
  if (!cartCourses().value.filter((elm) => elm.id == id)[0]) {
    const item = {
      ...coursesData.filter((elm) => elm.id == id)[0],
      quantity: 1,
    };
    setCartCourses([...cartCourses().value, item]);
  }
};
export const isAddedToCartCourses = (id) => {
  if (cartCourses().value.filter((elm) => elm.id == id)[0]) {
    return true;
  }
  return false;
};

import { events } from "@/data/events";

export const cartEvents = () => useState("cartEvents", () => []);

export const setCartEvents = (val) => {
  cartEvents().value = val;
};

export const addEventToCart = (id) => {
  if (!cartEvents().value.filter((elm) => elm.id == id)[0]) {
    const item = { ...events.filter((elm) => elm.id == id)[0], quantity: 1 };
    setCartEvents([...cartEvents().value, item]);
  }
};
export const isAddedToCartEvents = (id) => {
  if (cartEvents().value.filter((elm) => elm.id == id)[0]) {
    return true;
  }
  return false;
};

import { productData } from "@/data/products";

export const cartProducts = () => useState("cartProducts", () => []);

export const setCartProducts = (val) => {
  cartProducts().value = val;
};

export const addProductToCart = (id) => {
  if (!cartProducts().value.filter((elm) => elm.id == id)[0]) {
    const item = {
      ...productData.filter((elm) => elm.id == id)[0],
      quantity: 1,
    };
    setCartProducts([...cartProducts().value, item]);
  }
};

export const isAddedToCartProducts = (id) => {
  if (cartProducts().value.filter((elm) => elm.id == id)[0]) {
    return true;
  }
  return false;
};

//clear cart
export const clearCart = () => {
  setCartCourses([]);
  setCartEvents([]);
  setCartProducts([]);
};

//place order
export const placeOrder = ({ enrollmentIds = [], eventIds = [], productIds = [] }) => {
  //mock API call
  console.log("Placing order with:", {
    enrollmentIds,
    eventIds,
    productIds,
  });
  return { success: true, orderId: Math.floor(Math.random() * 1000000) };
}
