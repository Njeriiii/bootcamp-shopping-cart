import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import ShopItem from "./ShopItem"



function ShopItemList() {

  // this is the state we will use to hold the response from the api
  const [products, setProducts] = useState([]);
  const router = useRouter()

  const getProductsUrl = "http://localhost:8000/v1/products"
  const addToCartUrl = "http://localhost:8000/v1/cartitems"

  useEffect(async () => {
  const response = await fetch (getProductsUrl, {method: "GET"});
    const json = await response.json();
    setProducts(json)
    /* fetch list of products here */
    /* update product state with response */
  }, [])

  const handleAddToCart = async (product) => {
    /* add product to cart via api */
    /* redirect to the cart page */
    const body = JSON.stringify(product);
    const response = await fetch (addToCartUrl, {method: "POST", body, headers: {'content-type': 'application/json'}});
    router.push("/cart")
  } 

  return (
    <Grid container direction='row' spacing={8} cols={2} cellheight="auto" rows={2}>
        {products.map((product,index) => 
            <Grid item xs key={index}>
                <ShopItem 
                key={product.id}
                product_id={product.id}
                name={product.name} 
                description={product.description} 
                price={product.price} 
                image_url={product.image_url}
                is_on_sale={product.is_on_sale}
                onAddtoCart={handleAddToCart}/>
            </Grid>
        )}
    </Grid>
  )
}
export default ShopItemList