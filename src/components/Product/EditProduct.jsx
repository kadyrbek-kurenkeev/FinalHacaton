import React, { useContext, useEffect, useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { authContext } from "../Context/AuthContext";
import { productContext } from "../Context/ProductContext";
import { MDBFile } from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { user } = useContext(authContext);
  const {
    addProducts,
    error,
    // getCategories,
    getProductDetails,
    saveEditProduct,
    productDetails,
  } = useContext(productContext);

  const params = useParams();

  //   useEffect(() => {
  //     getCategories();
  //   }, []);

  useEffect(() => {
    getProductDetails(params.id);
  }, []);

  const [product, setProduct] = useState(productDetails);

  const handleInp = (e) => {
    if (e.target.name === "image") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("name", product.name);
    newProduct.append("author", product.author);
    newProduct.append("description", product.description);
    newProduct.append("price", product.price);
    newProduct.append("category", product.category);
    newProduct.append("image", product.image);
    newProduct.append("amount", product.amount);

    saveEditProduct(newProduct);
  }

  return (
    <div>
      {user === "admin@admin.com" ? (
        <Box
          sx={{
            width: "40vw",
            margin: "70px auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ m: 2 }}>
            Edit Product
          </Typography>
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            value={productDetails.name || ""}
            onChange={handleInp}
          />
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Author"
            variant="outlined"
            fullWidth
            name="author"
            value={product.author || ""}
            onChange={handleInp}
          />
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Description"
            variant="outlined"
            fullWidth
            name="description"
            value={product.description || ""}
            onChange={handleInp}
          />
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Price"
            variant="outlined"
            fullWidth
            name="price"
            value={product.price || ""}
            onChange={handleInp}
          />
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Amount"
            variant="outlined"
            fullWidth
            name="amount"
            value={product.amount || ""}
            onChange={handleInp}
          />
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Category"
            variant="outlined"
            fullWidth
            name="category"
            value={product.category || ""}
            onChange={handleInp}
          />
          <MDBFile
            id="customFile"
            value={product.image || ""}
            onChange={handleInp}
            style={{
              width: "350px",
              maxWidth: "100%",
              color: "#444",
              padding: "5px",
              background: "#fff",
              margin: "10px",
              borderRadius: "10px",
              border: "1px solid #555",
            }}
          />

          <Button
            sx={{
              m: 1,
              color: "black",
              width: "30%",
            }}
            variant="outlined"
            fullWidth
            size="large"
            onClick={handleSave}
          >
            Edit
          </Button>
          {error ? (
            <Alert severity="error">{error.map((item) => item)}</Alert>
          ) : null}
        </Box>
      ) : (
        <div
          style={{
            display: "flex",
            textAlign: "center",
            marginTop: "250px",
            marginBottom: "250px",
            justifyContent: "center",
            alignContent: "center",
            color: "red",
            textTransform: "uppercase",
          }}
        >
          You are not admin!
        </div>
      )}
    </div>
  );
};

export default Edit;
