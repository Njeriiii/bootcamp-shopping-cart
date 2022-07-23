import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const images = "https://cdn.shopify.com/s/files/1/1135/7914/products/009062_itype-now-plus_polaroid_camera_white_front_tilted_828x.png?v=1649670810"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  }
}));

function CartItem({ product_id, name, id, images, price, quantity, onRemoveFromCart }) {
  
  const removeFromCart = () => {
    onRemoveFromCart(id)
  }

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={images}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h6">{name}</Typography>   
          <Typography variant="h5">{quantity} x ${price}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={removeFromCart} color="primary">Remove from cart</Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default CartItem;