import React from 'react'

export default function Product({ product }) {
    return (
        <div className="border rounded shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
            <div>
                <img src={product.productImage} alt="Product Title" className="w-full h-40 object-cover mb-4 rounded" />
                <h3 className="text-xl font-semibold mb-2">{product.productTitle}</h3>
                <p className="text-gray-600 mb-2">Type: {product.productType}</p>
                <p className="text-gray-600 mb-2">Max Price: ${product.productMaxPrice}</p>
                <p className="text-gray-600 mb-4">Price: ${product.productPrice}</p>
                <p className="text-sm text-gray-500 mb-4">{product.productDescription}</p>
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
