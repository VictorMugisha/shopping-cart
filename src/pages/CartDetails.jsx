import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../store/cart';

export default function CartDetails() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const { products, summary } = cart
  const productsOnCart = products.map(productId => {
    return useSelector(state => state.products.value).find(product => product.productId === productId)
  })

  function handleRemoveFromCart(id) {
    dispatch(removeProduct(id))
  }

  return (
    <div className="w-full py-5 px-5 md:px-20">
      <h2 className="text-2xl font-semibold mb-8">Your Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          {
            productsOnCart.map(product => (
              <div key={product.productId} className="border rounded-lg p-4 flex justify-between items-center bg-white dark:bg-gray-800">
                <div className="flex items-center gap-4">
                  <img
                    src={product.productImage}
                    alt="Product"
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">{product.productTitle}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Quantity: {product.quantity}</p>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-800 dark:text-white">${product.productPrice}</p>
                  <div className="flex items-center justify-between gap-4">
                    <button
                      className="mt-2 text-xl text-gray-800 border border-gray-200 bg-gray-100 px-1 lg:px-3 lg:py-1"
                    >-

                    </button>
                    <button
                      className="mt-2 text-xl text-gray-800 border border-gray-200 bg-gray-100 px-1 lg:px-3 lg:py-1"
                    >+

                    </button>
                    <button
                      className="mt-2 text-sm text-blue-500 hover:underline"
                      onClick={() => handleRemoveFromCart(product.productId)}
                    >
                      Remove
                    </button>
                  </div>
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
            <p className="text-gray-800 dark:text-white">${summary.subTotal}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-600 dark:text-gray-300">Tax</p>
            <p className="text-gray-800 dark:text-white">${summary.withholdingTax}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-600 dark:text-gray-300">Shipping</p>
            <p className="text-gray-800 dark:text-white">$5.00</p>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <p className="text-gray-800 dark:text-white">Total</p>
            <p className="text-gray-800 dark:text-white">${summary.total}</p>
          </div>
          <button className="mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded shadow-sm hover:bg-blue-600 focus:outline-none">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
