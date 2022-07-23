import React from 'react';
import { Card, CardContent, CardActions, CardMedia, Typography, Button} from '@material-ui/core'
import { string } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const images = "https://cdn.shopify.com/s/files/1/1135/7914/products/009062_itype-now-plus_polaroid_camera_white_front_tilted_828x.png?v=1649670810"


function ShopItem({product_id, name,id, description, image_url, price,is_on_sale, onAddtoCart}) {
   image_url="https://cdn.shopify.com/s/files/1/1135/7914/products/009062_itype-now-plus_polaroid_camera_white_front_tilted_828x.png?v=1649670810"
  
  const addToCart = () => {
      onAddtoCart({product_id, name, id, description, image_url, price, is_on_sale, quantity:1})

  }

  return (
    <Card style={{height: "400px"}} variant="outlined" color='secondary'>
      <CardMedia
        style={{height:"150px"}}
        image={images}
        />
      <CardContent>
        <Typography variant="h6">{name}</Typography> 
        <Typography variant="subtitle2">{description}</Typography>  
        <Typography variant="h6">${price}</Typography> 
        <Typography variant="h6">{is_on_sale}</Typography>
     </CardContent>
      <CardActions>
      <button onClick={addToCart} size="small" > Add To Cart</button>
      </CardActions>
    </Card>
  );
}

export default ShopItem;