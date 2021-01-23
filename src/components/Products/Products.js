import React from "react";
import { Grid, Container } from "@material-ui/core";
import Product from "./Product";

import useStyles from "./productsStyles";

const Products = ({ products, onAddToCart}) => {
  const classes = useStyles();

  return (
    <Container className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} ms={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
