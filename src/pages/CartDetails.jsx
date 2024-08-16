import React from 'react';
import { useSelector } from 'react-redux';

export default function CartDetails() {
  const cart = useSelector(state => state.cart)
  const { products } = cart
  const productsOnCart = products.map(productId => {
    return useSelector(state => state.products.value).find(product => product.productId === productId)
  })
  
  return (
    <div className="w-full py-5 px-5 md:px-20">
      <h2 className="text-2xl font-semibold mb-8">Your Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          {
            productsOnCart.map(product => (
              <div className="border rounded-lg p-4 flex justify-between items-center bg-white dark:bg-gray-800">
                <div className="flex items-center gap-4">
                  <img
                    src={product.productImage}
                    alt="Product"
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">{product.productTitle}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Quantity: 1</p>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-800 dark:text-white">$20.00</p>
                  <button className="mt-2 text-sm text-blue-500 hover:underline">Remove</button>
                </div>
              </div>

            ))
          }

        </div>

        {/* Order Summary Section */}
        <div className="border rounded-lg p-4 bg-white dark:bg-gray-800">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <p className="text-gray-600 dark:text-gray-300">Subtotal</p>
            <p className="text-gray-800 dark:text-white">$40.00</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-600 dark:text-gray-300">Tax</p>
            <p className="text-gray-800 dark:text-white">$4.00</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-600 dark:text-gray-300">Shipping</p>
            <p className="text-gray-800 dark:text-white">$5.00</p>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <p className="text-gray-800 dark:text-white">Total</p>
            <p className="text-gray-800 dark:text-white">$49.00</p>
          </div>
          <button className="mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded shadow-sm hover:bg-blue-600 focus:outline-none">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
