import React from 'react'

export default function Filter() {
    return (
        <div className="flex justify-between items-center mb-8">
            <input
                type="text"
                placeholder="Search for products..."
                className="w-full max-w-lg border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            <select className="ml-4 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                <option value="">Filter by Type</option>
                <option value="AMG Suspension">AMG Suspension</option>
                <option value="Clothing">Clothing</option>
                <option value="Shoes">Shoes</option>
                {/* Add more filter options as needed */}
            </select>
        </div>
    )
}
