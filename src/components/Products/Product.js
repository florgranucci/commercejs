import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
<>
      <div>
        <img src={product.media.source} className={classes.media}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        {/* {product.name} */}
        <Typography variant="h6" gutterBotton className={classes.title}>
          {product.name}
        </Typography>
          {/* {product.price} */}
          <Typography variant="h6" className={classes.title}>
            {product.price.formatted_with_symbol}
          </Typography>
          {/* Button to add a product to Cart */}
          <IconButton aria-label="Add to Cart" className={classes.title} onClick={() => onAddToCart(product.id, 1)}>
            <AddShoppingCart />
          </IconButton>
      </div>
    </>
);
    {/* <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className="classes.cardContent">
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          variant="body2"
          color="textSecondary"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton onClick={() => onAddToCart(product.id, 1)} aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card> */}
  
};

export default Product;
