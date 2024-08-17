import React, { useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import Product from '../components/Product';

import { useSelector } from 'react-redux';

export default function HomePage() {
  const products = useSelector(state => state.products.value)
  const [localProducts, setLocalProducts] = useState(products)
  const currentTheme = useSelector(state => state.theme.value)
  const pageRef = useRef(null)

  const filterValue = useSelector(state => state.filter.value)

  useEffect(() => {
    if (filterValue.value && filterValue.type === "input") {
      const newProducts = products.filter(product => product.productTitle.toLowerCase().includes(filterValue.value.toLowerCase()))
      setLocalProducts(newProducts)
    } else if (filterValue.value  && filterValue.type === "select") {
      const newProducts = products.filter(product => product.productType.toLowerCase().includes(filterValue.value.toLowerCase()))
      setLocalProducts(newProducts)
    } else {
      setLocalProducts(products)
    }
  }, [filterValue])

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
        {localProducts.map(product => (
          <Product key={product.productId} product={product} />
        ))}
      </div>
    </div>
  )
}
