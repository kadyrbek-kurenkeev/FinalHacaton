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
  productDetails: {},
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        pages: Math.ceil(action.payload.length / 8),
      };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_PRODUCT_DETAIL":
      return { ...state, productDetails: action.payload };
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
      const res = await axios(`${API_PRODUCTS}/${window.location.search}`);
      console.log(res.data);

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

  const getProductDetails = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(`${API_PRODUCTS}/${id}`, config);
      dispatch({
        type: "GET_PRODUCT_DETAIL",
        payload: res.data,
      });
      getProducts();
    } catch (e) {
      console.log(e);
      //~ setError(e.response.data);
    }
  };

  const saveEditProduct = async (newProd, id) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.patch(`${API_PRODUCTS}/${id}`, newProd, config);
      console.log(res.data);
      navigate("/products");
    } catch (e) {
      console.log(Object.values(e.response.data).flat(5));
      setError(Object.values(e.response.data));
    }
  };

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

      const res = await axios.post(`${API_PRODUCTS}/${id}/like/`, config);
      getProducts();
    } catch (e) {
      console.log(e);
      // setError(e.response.data);
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
    productDetails: state.productDetails,

    getCategories,
    getProductDetails,
    saveEditProduct,
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
