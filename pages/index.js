/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import Link from 'next/link';
import Cart from '../components/Cart'

export const IndexPage = () => (
  <div>
    <Head title='Home'/>
    <h1>Welcome!</h1>

    <Link href="/shop">
        <a>Go to Shop</a>
      </Link>
  </div>
);

export default IndexPage;
