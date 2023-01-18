import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productContext } from "../Contexts/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products, pages } = useContext(productContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

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

  console.log(products);

  return (
    <div>
      <Box>
        ProductList
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Box>
        <Pagination
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
