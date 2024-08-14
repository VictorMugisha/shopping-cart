import React from 'react';
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import Product from '../components/Product';

import { useSelector } from 'react-redux';

export default function HomePage() {
  const products = useSelector(state => state.products.value)
  return (
    <div className="w-full py-5 px-5 md:px-20">

      {/* Hero Section */}
      <Hero />

      {/* Filter/Search Bar */}
      <Filter />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Product Cards */}
        {products.map(product => (
          <Product key={product.productId} product={product} />
        ))}

        {/* Add more product cards here */}
      </div>
    </div>
  )
}
