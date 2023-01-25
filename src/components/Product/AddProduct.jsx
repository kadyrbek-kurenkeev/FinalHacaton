import React, { useContext, useEffect, useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { authContext } from "../Context/AuthContext";
import { productContext } from "../Context/ProductContext";
import { MDBFile } from "mdb-react-ui-kit";

const AddProduct = () => {
  const { user } = useContext(authContext);
  const { addProducts, error } = useContext(productContext);

  // useEffect(() => {
  //   getCategories();
  // }, []);

  const [product, setProduct] = useState({
    name: "",
    author: "",
    descriptions: "",
    price: "",
    category: "",
    image: "",
    amount: "",
  });

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
    newProduct.append("descriptions", product.descriptions);
    newProduct.append("price", product.price);
    newProduct.append("category", product.category);
    newProduct.append("image", product.image);
    newProduct.append("amount", product.amount);

    addProducts(newProduct);
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
            Add New Product
          </Typography>
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            value={product.name}
            onChange={handleInp}
          />
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Author"
            variant="outlined"
            fullWidth
            name="author"
            value={product.author}
            onChange={handleInp}
          />
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Descriptions"
            variant="outlined"
            fullWidth
            name="descriptions"
            value={product.descriptions}
            onChange={handleInp}
          />
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Price"
            variant="outlined"
            fullWidth
            name="price"
            value={product.price}
            onChange={handleInp}
          />
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Amount"
            variant="outlined"
            fullWidth
            name="amount"
            value={product.amount}
            onChange={handleInp}
          />
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Category"
            variant="outlined"
            fullWidth
            name="category"
            value={product.category}
            onChange={handleInp}
          />
          <MDBFile
            id="customFile"
            name="image"
            onChange={handleInp}
            style={{
              width: "350px",
              maxWidth: "100%",
              color: "#444",
              padding: "10px",
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
            ADD PRODUCT
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

export default AddProduct;
