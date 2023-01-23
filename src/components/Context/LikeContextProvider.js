import React, { createContext, useReducer } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInLike,
} from "../../helper";

export const likeContext = createContext();

const INIT_STATE = {
  like: JSON.parse(localStorage.getItem("like")),
  likeLength: getCountProductsInLike(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_LIKE":
      return { ...state, like: action.payload };
    default:
      console.log("");
  }
}

const LikeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getLike = () => {
    let like = JSON.parse(localStorage.getItem("like"));

    if (!like) {
      localStorage.setItem(
        "like",
        JSON.stringify({ products: [], totalPrice: 0 })
      );
      like = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: "GET_LIKE",
      payload: like,
    });
  };

  const addProductToLike = (product) => {
    let like = JSON.parse(localStorage.getItem("like"));

    if (!like) {
      like = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = like.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      like.products.push(newProduct);
    } else {
      like.products = like.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

    like.totalPrice = calcTotalPrice(like.products);

    localStorage.setItem("like", JSON.stringify(like));

    dispatch({
      type: "GET_LIKE",
      payload: like,
    });
  };

  const changeProductCount = (count, id) => {
    let like = JSON.parse(localStorage.getItem("like"));

    like.products = like.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    like.totalPrice = calcTotalPrice(like.products);

    localStorage.setItem("like", JSON.stringify(like));

    dispatch({
      type: "GET_LIKE",
      payload: like,
    });
  };

  function checkProductInLike(id) {
    let like = JSON.parse(localStorage.getItem("like"));

    if (like) {
      let newLike = like.products.filter((elem) => elem.item.id === id);
      return newLike.length > 0 ? true : false;
    } else {
      like = {
        product: [],
        totalPrice: 0,
      };
    }
  }

  function deleteLikeProduct(id) {
    let like = JSON.parse(localStorage.getItem("like"));

    like.products = like.products.filter((elem) => elem.item.id !== id);

    like.totalPrice = calcTotalPrice(like.products);

    localStorage.setItem("like", JSON.stringify(like));
    getLike();
    dispatch({
      type: "GET_LIKE",
      payload: like,
    });
  }

  return (
    <likeContext.Provider
      value={{
        getLike,
        addProductToLike,
        changeProductCount,
        deleteLikeProduct,
        checkProductInLike,
        like: state.like,
      }}
    >
      {children}
    </likeContext.Provider>
  );
};

export default LikeContextProvider;
