import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_CATEGORY, API_PRODUCTS } from "../../helper";

export const productContext = createContext();

const INIT_STATE = {
  products: [],
  pages: 0,
  oneProduct: {},
  categories: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 5),
      };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [error, setError] = useState([]);

  const navigate = useNavigate();

  async function getProducts() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(
        `${API_PRODUCTS}/${window.location.search}`,
        config
      );

      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function getCategories() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(`${API_CATEGORY}/list/`, config);

      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.results,
      });
    } catch (e) {
      console.log(e);
      // setError(Object.values(e.response.data));
    }
  }

  async function addProducts(newProd) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API_PRODUCTS}/`, newProd, config);
      console.log(res.data);
      navigate("/products");
    } catch (e) {
      console.log(Object.values(e.response.data).flat(5));
      setError(Object.values(e.response.data));
    }
  }

  async function toggleLike(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(`${API_PRODUCTS}/${id}/toggle_like/`, config);
      getProducts();
    } catch (e) {
      console.log(e);
      //~ setError(e.response.data);
    }
  }

  async function deleteProduct(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.delete(`${API_PRODUCTS}/${id}/`, config);
      getProducts();
    } catch (e) {
      console.log(e);
      //~ setError(e.response.data);
    }
  }

  let values = {
    products: state.products,
    pages: state.pages,
    categories: state.categories,
    error,

    getCategories,
    addProducts,
    getProducts,
    toggleLike,
    deleteProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
