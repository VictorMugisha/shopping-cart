import React from 'react'

export default function Product() {
    return (
        <div className="border rounded shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <img src="product-image-url" alt="Product Title" className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">Mercedes S Class Suspension</h3>
            <p className="text-gray-600 mb-2">Type: AMG Suspension</p>
            <p className="text-gray-600 mb-2">Max Price: $1200</p>
            <p className="text-gray-600 mb-4">Price: $1100</p>
            <p className="text-sm text-gray-500 mb-4">High-quality suspension for Mercedes S Class.</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600">
                View Details
            </button>
        </div>
    )
}
