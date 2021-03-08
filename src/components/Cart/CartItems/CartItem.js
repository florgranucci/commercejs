import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Divider } from '@material-ui/core';

import useStyles from './styles'

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

    const classes = useStyles();

    return (
        <Card className='card-item' className={classes.root}>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="body1" style={{marginRight: 10}}>{item.name}</Typography>
        <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)} type="button" size="small">-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)} type="button" size="small">+</Button>
        </div>
        <div className={classes.emptyButton}>
          <Button onClick={() => onRemoveFromCart(item.id)} variant="contained" type="button" color="secondary">Eliminar</Button>
        </div>
      </CardActions>
        </Card>
    )
}

export default CartItem;
