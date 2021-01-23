import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Container } from "@material-ui/core";
import Item from "./Item/Item";

import useStyles from './styles'

const Home = () => {

  const classes = useStyles();

  var items = [
    {
      image: "https://i.ibb.co/CtsG33X/BANNER-1.jpg",
    },
    {
      image: "https://i.ibb.co/RckCvBP/BANNER-2.png",
    },
  ];

  return (
    <Container className={classes.container}>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Container>
  );
};

export default Home;
