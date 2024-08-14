
export default function NewProduct() {
    return (
        <div className="w-full py-5 px-5 md:px-20">
            <h2 className="text-2xl font-semibold mb-8">Add New Product to the Store</h2>
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Input box card */}
                    <div>
                        <p className="text-sm font-medium mb-2">Product Title</p>
                        <div>
                            <input 
                                type="text" 
                                placeholder="Enter Product Title" 
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                    {/* Input box card */}
                    <div>
                        <p className="text-sm font-medium mb-2">Product Type</p>
                        <div>
                            <input 
                                type="text" 
                                placeholder="Provide Product Type" 
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                    {/* Input box card */}
                    <div>
                        <p className="text-sm font-medium mb-2">Product Max Price</p>
                        <div>
                            <input 
                                type="text" 
                                placeholder="Type Product Maximum Price" 
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                    {/* Input box card */}
                    <div>
                        <p className="text-sm font-medium mb-2">Product Price</p>
                        <div>
                            <input 
                                type="text" 
                                placeholder="Type Product Price" 
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                    {/* Input box card */}
                    <div className="md:col-span-2 lg:col-span-3">
                        <p className="text-sm font-medium mb-2">Product Description</p>
                        <textarea 
                            placeholder="Give the description of the product"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 h-24 resize-none"
                        ></textarea>
                    </div>
                </div>
                <div className="flex justify-end mt-6 gap-4">
                    <button 
                        type="reset" 
                        className="py-2 px-4 bg-gray-200 rounded shadow-sm hover:bg-gray-300 focus:outline-none"
                    >
                        Reset
                    </button>
                    <button 
                        type="submit" 
                        className="py-2 px-4 bg-blue-500 text-white rounded shadow-sm hover:bg-blue-600 focus:outline-none"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}
