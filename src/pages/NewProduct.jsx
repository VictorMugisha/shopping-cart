import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/product"

export default function NewProduct() {
    const currentTheme = useSelector(state => state.theme.value)
    const dispatch = useDispatch()
    const initialState = {
        productId: '',
        productTitle: '',
        productType: '',
        productMaxPrice: 0,
        productPrice: 0,
        productDescription: '',
        productImage: null,
        isOnCart: false
    }
    const [productData, setProductData] = useState(initialState);
    const [imagePreview, setImagePreview] = useState('');

    function handleChange(event) {
        const { name, value } = event.target;
        setProductData(currentState => ({
            ...currentState,
            productId: nanoid(),
            [name]: value
        }));
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            // Create a FileReader to read the file and set the preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setProductData(currentState => ({
                    ...currentState,
                    productId: nanoid(),
                    productImage: reader.result
                }));
            };
            reader.readAsDataURL(file);
        } else {
            setProductData(currentState => ({
                ...currentState,
                productId: nanoid(),
                productImage: "https://via.placeholder.com/80"
            }));
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addProduct(productData))
        setProductData(initialState)
        setImagePreview("")
    }

    const baseInputClass = "w-full border rounded px-3 py-2 focus:outline-none focus:ring";
    const themeClass = currentTheme === "dark"
        ? "bg-gray-700 text-white border-gray-600 focus:border-blue-500"
        : "bg-white text-gray-800 border-gray-300 focus:border-blue-300";

    return (
        <div className="w-full py-5 px-5 md:px-20">
            <h2 className="text-2xl font-semibold mb-8">Add New Product to the Store</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Input box card */}
                    <div>
                        <p className="text-sm font-medium mb-2">Product Title</p>
                        <div>
                            <input
                                type="text"
                                name="productTitle"
                                value={productData.productTitle}
                                onChange={handleChange}
                                placeholder="Enter Product Title"
                                className={`${baseInputClass} ${themeClass}`}
                            />
                        </div>
                    </div>
                    {/* Input box card */}
                    <div>
                        <p className="text-sm font-medium mb-2">Product Type</p>
                        <div>
                            <input
                                type="text"
                                name="productType"
                                value={productData.productType}
                                onChange={handleChange}
                                placeholder="Provide Product Type"
                                className={`${baseInputClass} ${themeClass}`}
                            />
                        </div>
                    </div>
                    {/* Input box card */}
                    <div>
                        <p className="text-sm font-medium mb-2">Product Max Price</p>
                        <div>
                            <input
                                type="number"
                                name="productMaxPrice"
                                value={productData.productMaxPrice}
                                onChange={handleChange}
                                placeholder="Type Product Maximum Price"
                                className={`${baseInputClass} ${themeClass}`}
                            />
                        </div>
                    </div>
                    {/* Input box card */}
                    <div>
                        <p className="text-sm font-medium mb-2">Product Price</p>
                        <div>
                            <input
                                type="number"
                                name="productPrice"
                                value={productData.productPrice}
                                onChange={handleChange}
                                placeholder="Type Product Price"
                                className={`${baseInputClass} ${themeClass}`}
                            />
                        </div>
                    </div>
                    {/* Input box card */}
                    <div>
                        <p className="text-sm font-medium mb-2">Product Image</p>
                        <input
                            type="file"
                            name="productImage"
                            onChange={handleFileChange}
                            className={`${baseInputClass} ${themeClass}`}
                        />
                        {imagePreview && (
                            <div className="mt-4">
                                <img
                                    src={imagePreview}
                                    alt="Image preview"
                                    className="w-full h-auto rounded border border-gray-300"
                                />
                            </div>
                        )}
                    </div>
                    {/* Input box card */}
                    <div className="md:col-span-2 lg:col-span-3">
                        <p className="text-sm font-medium mb-2">Product Description</p>
                        <textarea
                            placeholder="Give the description of the product"
                            name="productDescription"
                            value={productData.productDescription}
                            onChange={handleChange}
                            className={`${baseInputClass} ${themeClass} h-24 resize-none`}
                        ></textarea>
                    </div>
                </div>
                <div className="flex justify-end mt-6 gap-4">
                    <button
                        type="reset"
                        className={`py-2 px-4 rounded shadow-sm hover:bg-gray-300 focus:outline-none ${currentTheme === "dark" ? "bg-gray-600 text-white hover:text-gray-800" : "bg-gray-200"}`}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className={`py-2 px-4 rounded shadow-sm focus:outline-none ${currentTheme === "dark" ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
