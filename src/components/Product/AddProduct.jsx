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
import { authContext } from "../Context/AuthContext";
import { productContext } from "../Context/ProductContext";
import { MDBFile } from "mdb-react-ui-kit";

const AddProduct = () => {
  const { user } = useContext(authContext);
  const { addProducts, error, categories, getCategories } =
    useContext(productContext);

  useEffect(() => {
    getCategories();
  }, []);

  const [product, setProduct] = useState({
    name: "",
    author: "",
    description: "",
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
    newProduct.append("description", product.description);
    newProduct.append("price", product.price);
    newProduct.append("category", product.category);
    newProduct.append("image", product.image);
    newProduct.append("amount", product.amount);

    addProducts(newProduct);
  }

  return (
    <div>
      {/* {user === "admin@admin.com" ? ( */}
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
        {/* <FormControl fullWidth>
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
        </FormControl> */}
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
          ADD PRODUCT
        </Button>
        {error ? (
          <Alert severity="error">{error.map((item) => item)}</Alert>
        ) : null}
      </Box>
      {/* ) : ( */}
      <>You are not admin</>
      {/* ) */}
      {/* } */}
    </div>
  );
};

export default AddProduct;
