import React from 'react';
import { Paper, Container, Grid } from '@material-ui/core';

import useStyles from './styles'

const Item = ({ item }) => {
    
    const classes = useStyles();

    return (       
            <Grid>
            <img styles={{ width: '100%'}} src={item.image} />
            </Grid>  
    )
}

export default Item
