import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../store/cart';
import { updateProduct } from '../store/product';

export default function CartDetails() {
  const cart = useSelector(state => state.cart);
  const storeProducts = useSelector(state => state.products.value);
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => state.theme.value)
  
  const { products } = cart;

  // State to store the computed summary
  const [computedSummary, setComputedSummary] = useState({
    subTotal: 0,
    tax: 0,
    total: 0
  });

  // Map product IDs to their corresponding product objects
  const productsOnCart = products.map(productId => {
    return storeProducts.find(product => product.productId === productId);
  }).filter(product => product !== undefined); // Filter out undefined products

  function handleRemoveFromCart(id) {
    const currentProduct = storeProducts.find(product => product.productId === id);
    dispatch(removeProduct(currentProduct)); // Pass only the product ID
    if (currentProduct) {
      const newProduct = {
        ...currentProduct,
        quantity: null,
        isOnCart: false
      };
      dispatch(updateProduct(newProduct));
    }
  }

  function handleIncreaseQuantity(prod) {
    const newProduct = {
      ...prod,
      quantity: prod.quantity + 1
    };
    dispatch(updateProduct(newProduct));
  }

  function handleDecreaseQuantity(prod) {
    const currentQuantity = prod.quantity;
    if (currentQuantity === 1) {
      handleRemoveFromCart(prod.productId);
      return;
    }
    const newProduct = {
      ...prod,
      quantity: prod.quantity - 1
    };
    dispatch(updateProduct(newProduct));
  }

  useEffect(() => {
    const cartProducts = storeProducts.filter(product => products.includes(product.productId));
    const newSummary = {
      subTotal: 0,
      tax: 0,
      total: 0
    };
    cartProducts.forEach(product => {
      newSummary.subTotal += (product.productPrice * (product.quantity || 1)); // Use quantity or default to 1
    });
    newSummary.tax = newSummary.subTotal * 0.15; // 15% tax
    newSummary.total = newSummary.subTotal + newSummary.tax + 5.00; // Add $5 shipping
    setComputedSummary(newSummary);
  }, [products, storeProducts]);

  return (
    <div className="w-full py-5 px-5 md:px-20">
      <h2 className="text-2xl font-semibold mb-8">Your Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items Section */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          {
            productsOnCart.map(product => (
              <div key={product.productId} className={`border rounded-lg p-4 flex justify-between items-center ${currentTheme === "dark" ? 'bg-gray-600' : 'bg-white'}`}>
                <div className="flex items-center gap-4">
                  <img
                    src={product.productImage}
                    alt="Product"
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <div>
                    <h3 className={`text-lg font-medium ${currentTheme === "dark" ? 'text-white' : 'text-gray-800'}`}>{product.productTitle}</h3>
                    <p className={`text-sm dark:text-gray-400 ${currentTheme === "dark" ? 'text-white' : 'text-gray-500'}`}>Quantity: {product.quantity}</p>
                  </div>
                </div>
                <div>
                  <p className={`text-lg font-medium ${currentTheme === "dark" ? 'text-white' : 'text-gray-800'}`}>${product.productPrice}</p>
                  <div className="flex items-center justify-between gap-4">
                    <button
                      className="mt-2 text-xl text-gray-800 border border-gray-200 bg-gray-100 px-1 lg:px-3 lg:py-1"
                      onClick={() => handleDecreaseQuantity(product)}
                    >
                      -
                    </button>
                    <button
                      className="mt-2 text-xl text-gray-800 border border-gray-200 bg-gray-100 px-1 lg:px-3 lg:py-1"
                      onClick={() => handleIncreaseQuantity(product)}
                    >
                      +
                    </button>
                    <button
                      className={`mt-2 text-sm hover:underline ${currentTheme === "dark" ? 'text-white' : 'text-blue-500'}`}
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
        <div className={`border rounded-lg p-4 bg-white ${currentTheme === "dark" ? 'bg-gray-500' : 'bg-white'}`}>
          <h3 className={`text-xl font-semibold ${currentTheme === "dark" ? 'text-white' : 'text-gray-800'} mb-4`}>Order Summary</h3>
          <div className={`flex justify-between mb-2`}>
            <p className={`${currentTheme === "dark" ? 'text-white' : 'text-gray-600'}`}>Subtotal</p>
            <p className={`${currentTheme === "dark" ? 'text-white' : 'text-gray-800'}`}>${computedSummary.subTotal.toFixed(2)}</p>
          </div>
          <div className={`flex justify-between mb-2`}>
            <p className={`${currentTheme === "dark" ? 'text-white' : 'text-gray-600'}`}>Tax</p>
            <p className={`${currentTheme === "dark" ? 'text-white' : 'text-gray-800'}`}>${computedSummary.tax.toFixed(2)}</p>
          </div>
          <div className={`flex justify-between mb-4`}>
            <p className={`${currentTheme === "dark" ? 'text-white' : 'text-gray-600'}`}>Shipping</p>
            <p className={`${currentTheme === "dark" ? 'text-white' : 'text-gray-800'}`}>$5.00</p>
          </div>
          <div className={`flex justify-between font-bold text-lg`}>
            <p className={`${currentTheme === "dark" ? 'text-white' : 'text-gray-800'}`}>Total</p>
            <p className={`${currentTheme === "dark" ? 'text-white' : 'text-gray-800'}`}>${computedSummary.total.toFixed(2)}</p>
          </div>
          <button className="mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded shadow-sm hover:bg-blue-600 focus:outline-none">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
