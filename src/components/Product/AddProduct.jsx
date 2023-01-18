import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { authContext } from "../Contexts/AuthContext";
import { productContext } from "../Contexts/ProductContext";

const AddProduct = () => {
  const { user } = useContext(authContext);
  const { addProducts, error, categories, getCategories } =
    useContext(productContext);

  useEffect(() => {
    getCategories();
  }, []);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
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
    newProduct.append("title", product.title);
    newProduct.append("description", product.description);
    newProduct.append("price", product.price);
    newProduct.append("category", product.category);
    newProduct.append("image", product.image);
    addProducts(newProduct);
  }

  return (
    <div>
      {" "}
      {user === "admin@admin.com" ? (
        <Box
          sx={{
            width: "40vw",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ m: 2 }}>
            Add new product
          </Typography>
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Title"
            variant="outlined"
            fullWidth
            name="title"
            value={product.title}
            onChange={handleInp}
          />
          <TextField
            sx={{ m: 1 }}
            id="standard-basic"
            label="Description"
            variant="outlined"
            fullWidth
            name="description"
            value={product.description}
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="сфеупщкн"
              onChange={handleInp}
              value={product.category}
              name="category"
            >
              {categories?.map((item) => (
                <MenuItem value={item.id} key={item.id}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <input
            type="file"
            // hidden
            name="image"
          />

          <Button
            sx={{
              m: 1,
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
        <>You are not admin</>
      )}
    </div>
  );
};

export default AddProduct;
