import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { productContext } from "../Context/ProductContext";
import { cartContext } from "../Context/CartContextProvider";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { likeContext } from "../Context/LikeContextProvider";
import { authContext } from "../Context/AuthContext";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { toggleLike, deleteProduct } = useContext(productContext);
  const {
    getCart,
    addProductToCart,
    changeProductCount,
    deleteCartProduct,
    checkProductInCart,
  } = useContext(cartContext);

  const navigate = useNavigate();

  const { user } = useContext(authContext);

  const { getLike, addProductToLike, deleteLikeProduct, checkProductInLike } =
    useContext(likeContext);

  return (
    <Card
      sx={{
        maxWidth: "350px",
        maxHeight: "650px",
        margin: "10px",
        position: "relative",
        // width: "300px",
        // height: "400px",
      }}
    >
      <CardMedia
        component="img"
        image={item.image}
        alt={item.name}
        style={{
          objectFit: "fill",
          height: "280px",
          width: "280px",
        }}
      />
      <CardContent style={{ display: "flex", flexDirection: "column" }}>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.descriptions}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genre: {item.category}
        </Typography>
        {user === "admin@admin.com" ? (
          <Typography variant="caption" color="error">
            {item.author}
          </Typography>
        ) : null}
        <Typography variant="caption" style={{ fontSize: "16px" }} color="dark">
          Price: {item.price}
        </Typography>
        <Typography variant="caption" style={{ fontSize: "13px" }} color="dark">
          Number #{item.amount}
        </Typography>
        <div style={{ position: "absolute", bottom: "15%", left: "30%" }}>
          <Typography variant="body" color="error">
            {item.likes}
          </Typography>
        </div>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "space-around" }}>
        <IconButton size="lg" onClick={() => addProductToLike(item)}>
          <FavoriteIcon color={checkProductInLike(item.id) ? "warning" : ""} />
        </IconButton>
        <IconButton size="lg" onClick={() => addProductToCart(item)}>
          <ShoppingCartIcon
            color={checkProductInCart(item.id) ? "success" : ""}
          />
        </IconButton>
      </CardActions>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {user === "admin@admin.com" ? (
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              style={{ color: "primary" }}
              size=""
              onClick={() => navigate(`/edit/${item.id}`)}
            >
              Edit
            </Button>
            <Button
              style={{ color: "red" }}
              size=""
              onClick={() => deleteProduct(item.id)}
            >
              Delete
            </Button>
          </Box>
        ) : null}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
