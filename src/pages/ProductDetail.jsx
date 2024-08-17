import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from "../store/cart";
import { updateProduct } from '../store/product';

export default function ProductDetail() {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector(state =>
        state.products.value.find(product => product.productId === productId)
    );
    const currentTheme = useSelector(state => state.theme.value);
    const pageRef = useRef(null);

    const productsOnCart = useSelector(state => state.cart.products);

    function handleAddToCart() {
        if (!productsOnCart.includes(productId)) {
            dispatch(addToCart(productId));

            const newProduct = {
                ...product,
                quantity: 1,
                isOnCart: true
            };
            dispatch(updateProduct(newProduct));
        }
    }

    useEffect(() => {
        const { current } = pageRef;
        if (currentTheme === "dark") {
            current.classList.add("bg-gray-700");
            current.classList.add("text-white");
        } else {
            current.classList.remove("bg-gray-700");
            current.classList.remove("text-white");
        }
    }, [currentTheme]);

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div ref={pageRef} className="w-full py-5 px-5 md:px-20">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2">
                    <img
                        src={product.productImage}
                        alt={product.productTitle}
                        className="object-cover rounded-lg border w-full"
                    />
                    <div className="flex gap-2 mt-4">
                        {/* Thumbnail Images */}
                        {/* Placeholder thumbnails as per the design; replace with actual thumbnails */}
                        {product.thumbnails && product.thumbnails.map((thumb, index) => (
                            <img key={index} src={thumb} alt={`Thumbnail ${index}`} className="w-16 h-16 object-cover rounded-lg border" />
                        ))}
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className="text-3xl font-semibold mb-4">{product.productTitle}</h2>
                    <div className="flex items-center mb-4">
                        <p className="text-gray-500 line-through mr-2 text-xl">${product.oldPrice || 0}</p>
                        <p className="text-red-500 text-2xl font-bold">${product.productPrice}</p>
                        <span className="ml-2 text-green-600 text-sm">({product.discountPercentage || 0}% off)</span>
                    </div>
                    <p className="text-lg mb-4">{product.productDescription}</p>
                    <div className="mb-4">
                        <p>Color: <span className="font-medium">Black</span></p>
                        <p>Availability: <span className="font-medium">{product.isInStock ? "In stock" : "Out of stock"}</span></p>
                        <p>Category: <span className="font-medium">Shoes</span></p>
                        <p>Shipping Area: <span className="font-medium">All over the world</span></p>
                        <p>Shipping Fee: <span className="font-medium">Free</span></p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                        <button
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-400"
                        >
                            Compare
                        </button>
                    </div>
                    <div className="flex mt-4 space-x-4">
                        {/* Social Media Share Icons */}
                        {/* Hardcoded social media icons - Replace with actual links and icons */}
                        <a href="#" className="text-blue-500">FB</a>
                        <a href="#" className="text-blue-400">TW</a>
                        <a href="#" className="text-red-600">IG</a>
                        <a href="#" className="text-blue-600">LI</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
