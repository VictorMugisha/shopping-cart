import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import Product from '../components/Product';

import { useSelector } from 'react-redux';

export default function HomePage() {
  const products = useSelector(state => state.products.value)
  const currentTheme = useSelector(state => state.theme.value)
  const pageRef = useRef(null)

  useEffect(() => {
    const { current } = pageRef
    if (currentTheme === "dark") {
      current.classList.add("bg-gray-700")
      current.classList.add("text-white")
    }
    else {
      current.classList.remove("bg-gray-700")
      current.classList.remove("text-white")
    }
  }, [currentTheme])
  return (
    <div
      ref={pageRef}
      className="w-full py-5 px-5 md:px-20"
    >
      <Hero />
      <Filter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <Product key={product.productId} product={product} />
        ))}
      </div>
    </div>
  )
}
