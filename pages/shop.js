import React from 'react';
import Head from '../components/head';
import Link from 'next/link';

import ShopItemList from '../components/ShopItemList'
import { Container, Typography, withWidth } from '@material-ui/core'
import Box from '@material-ui/core/Box';



export const ShopPage = () => (
  <Container>
    <Head title='Home'/> 
    <div>
      <img src= "https://cdn.dribbble.com/users/5523414/screenshots/14552234/media/6a95ac7e919971be161bbc9ab491f364.png?compress=1&resize=400x300"/>
      <Typography variant="h2" weight="bold" className='labels'>My Shop</Typography>   
    </div>
    <div className='PageNames'>
      <Link href="/cart">
        <a>View Cart</a>
      </Link>
      <br></br><br></br>
    </div>
    <ShopItemList/> 
  </Container>
);



export default ShopPage;