import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { productContext } from "../Context/ProductContext";

const ProductCard = ({ item }) => {
  const { toggleLike, deleteProduct } = useContext(productContext);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title} TITLE
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description} DESCs
        </Typography>
        <Typography variant="caption" color="error">
          {item.author} AUTHOR
        </Typography>
        <div>
          <Typography variant="body" color="error">
            {item.likes} LIKES
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => toggleLike(item.id)}>
          Like
        </Button>
        {item.is_author ? (
          <Button size="small" onClick={() => deleteProduct(item.id)}>
            Delete
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
