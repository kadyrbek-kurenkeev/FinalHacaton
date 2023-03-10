import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { authContext } from "../Context/AuthContext";
import { productContext } from "../Context/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products, pages } = useContext(productContext);

  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();

  const { user } = useContext(authContext);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  function currentData() {
    const begin = (currentPage - 1) * 6;
    const end = begin + 6;
    return products.slice(begin, end);
  }

  console.log(pages);

  console.log(products);

  return (
    <div
      style={{
        marginTop: "70px",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {products ? (
          currentData().map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <h2>Loading ...</h2>
        )}
      </Box>

      <Box>
        <Pagination
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "40px",
            marginBottom: "40px",
          }}
          count={pages}
          variant="outlined"
          color="primary"
          page={currentPage}
          onChange={(e, p) => setCurrentPage(p)}
        />
      </Box>
    </div>
  );
};

export default ProductList;
