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

const ProductCard = ({ item }) => {
  const { toggleLike, deleteProduct } = useContext(productContext);
  const {
    getCart,
    addProductToCart,
    changeProductCount,
    deleteCartProduct,
    checkProductInCart,
  } = useContext(cartContext);

  const { getLike, addProductToLike, deleteLikeProduct, checkProductInLike } =
    useContext(likeContext);

  return (
    <Card sx={{ maxWidth: 370 }}>
      <CardMedia
        component="img"
        height="170"
        width="370"
        image={item.image}
        alt={item.name}
      />
      <CardContent style={{ display: "flex", flexDirection: "column" }}>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.descriptions}
        </Typography>
        <Typography variant="caption" color="error">
          {item.author}
        </Typography>
        <Typography variant="caption" color="error">
          {item.price}
        </Typography>
        <div>
          <Typography variant="body" color="error">
            {item.likes}
          </Typography>
        </div>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton size="lg" onClick={() => addProductToLike(item)}>
          <FavoriteIcon color={checkProductInCart(item.id) ? "danger" : ""} />
        </IconButton>
        <IconButton size="lg" onClick={() => addProductToCart(item)}>
          <ShoppingCartIcon
            color={checkProductInCart(item.id) ? "success" : ""}
          />
        </IconButton>
        {item.is_author ? (
          <Button size="" onClick={() => deleteProduct(item.id)}>
            Delete
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
