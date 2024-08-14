import React from 'react'
import { useSelector } from 'react-redux'

export default function Product({ product }) {
    const currentTheme = useSelector(state => state.theme.value)
    return (
        <div className="border rounded shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
            <div>
                <img src={product.productImage} alt="Product Title" className="w-full h-40 object-cover mb-4 rounded" />
                <h3 className="text-xl font-semibold mb-2">{product.productTitle}</h3>
                <p className={`mb-2 ${currentTheme === "light" ? "text-gray-600" : "text-white"}`}>Type: {product.productType}</p>
                <p className={`mb-2 ${currentTheme === "light" ? "text-gray-600" : "text-white"}`}>Max Price: ${product.productMaxPrice}</p>
                <p className={`mb-4 ${currentTheme === "light" ? "text-gray-600" : "text-white"}`}>Price: ${product.productPrice}</p>
                <p className={`text-sm mb-4 ${currentTheme === "light" ? "text-gray-500" : "text-white"}`}>{product.productDescription}</p>
            </div>
            <div className="flex items-center justify-center gap-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    View
                </button>
                <button className="bg-gray-100 text-blue-800 py-2 px-4 rounded hover:bg-gray-200">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
