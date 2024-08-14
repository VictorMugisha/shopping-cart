import React from 'react';
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import Product from '../components/Product';

export default function HomePage() {
  return (
    <div className="w-full py-5 px-5 md:px-20">

      {/* Hero Section */}
      <Hero />

      {/* Filter/Search Bar */}
      <Filter />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Example Product Card */}
        <Product />
        <Product />
        <Product />

        {/* Add more product cards here */}
      </div>
    </div>
  )
}
