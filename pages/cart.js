import React from 'react';
import Head from '../components/head';
import Link from 'next/link';
import Cart from '../components/Cart'

import { Container, Typography } from '@material-ui/core'

export const CartPage = () => (
  <Container>
    <Head title='Cart'/>
    <div>
      <Typography variant="h3">My Cart</Typography>  
        <img src= "https://dribbble.com/tags/thrift"/> 
    </div>
    <div>
      <Link href="/shop">
        <a>Back to Shop</a>
      </Link>
    </div>
    <Cart />
  </Container>
);

export default CartPage;