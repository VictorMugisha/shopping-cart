import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    const { productId } = useParams();
    const product = useSelector(state =>
        state.products.value.find(product => product.productId === productId)
    );
    const currentTheme = useSelector(state => state.theme.value);
    const pageRef = useRef(null);

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

    if (!product) {
        return <div >Product not found.</div>;
    }

    return (
        <div
            ref={pageRef}
            className="w-full py-5 px-5 md:px-20"
        >
            <div className="flex flex-col lg:flex-row gap-6">
                <img
                    src={product.productImage}
                    alt={product.productTitle}
                    className="w-full lg:w-1/2 object-cover rounded-lg border"
                />
                <div className="flex-1">
                    <h2 className="text-3xl font-semibold mb-4">{product.productTitle}</h2>
                    <p className="text-lg mb-4">{product.productDescription}</p>
                    <p className="text-xl font-medium mb-4">${product.productPrice}</p>
                    <div className="flex items-center gap-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
