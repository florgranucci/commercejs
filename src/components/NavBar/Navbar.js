import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import logo from "../../assets/logo.jpg";
import useStyles from "./styles";

import { Link, useLocation } from 'react-router-dom';

const Navbar = ({totalItems}) => {
  const classes = useStyles();

  //to remove the cart icon i we're currently in '/cart'. 
  const location = useLocation();

  //useLocation use property 'path name'
  //if(location.pathname === '/'){
  //}

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
            <img src={logo} height="28px" className={classes.image} />
            Fitness-Shop
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && ( 
          <div className={classes.button}>
            {/* <Link to='/cart'>go to cart</Link> */}
            <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div> 
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
