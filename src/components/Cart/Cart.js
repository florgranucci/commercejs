import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import CartItem from './CartItems/CartItem';
import { Link } from 'react-router-dom';

import useStyles from "./styles";

function Cart({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) {
  const classes = useStyles();
 
  const EmptyCart = () => (
    <Typography variant="subtitle1" color='secondary'>You have no items in your shopping cart,
    <Link to='/' className={classes.link} color='secondary'>start adding some!!</Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={2}>
        {cart.line_items.map((item) => (
          <Grid item key={item.id}>
            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h5" >Subtotal carrito: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button onClick={handleEmptyCart} className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" >Vaciar carrito</Button>
          <Button component={Link} to='/checkout' className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Finalizar compra</Button>
        </div>
      </div>
    </>
  );


   if(!cart.line_items) return 'Loading...'; 

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" gutterBottom >
        Carrito:
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
}


export default Cart;
