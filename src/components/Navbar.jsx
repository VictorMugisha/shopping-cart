import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navbar() {
    function handleToggleTheme(event) {
        const button = event.target;
        button.classList.toggle("left-1");
        button.classList.toggle("right-1");
    }

    return (
        <header className="w-full py-5 px-5 md:px-20 flex items-center justify-between shadow-md">
            <div>
                <Link to="/">
                    <h2 className="font-semibold text-2xl md:text-3xl select-none cursor-pointer">
                        Fake Shop
                    </h2>
                </Link>
            </div>
            <nav className="flex items-center gap-5 md:gap-10">
                <ul className="hidden sm:flex items-center gap-5 md:gap-7">
                    <li>
                        <Link to="/" className="text-sm md:text-base">Products</Link>
                    </li>
                    <li>
                        <Link to="/new-product" className="text-sm md:text-base">Add Product</Link>
                    </li>
                </ul>
                <div className="theme">
                    <div className="relative w-12 h-6 md:w-16 md:h-7 bg-gray-400 rounded-3xl cursor-pointer">
                        <button
                            className="absolute top-1 bottom-1 right-1 rounded-full bg-white w-6 md:w-8 outline-none"
                            onClick={handleToggleTheme}
                        ></button>
                    </div>
                </div>
                <Link to="cart">
                    <div className="relative">
                        <span
                            className="absolute text-white bg-red-500 rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center top-[-7px] md:top-[-10px] right-[-7px] md:right-[-10px]"
                        >9</span>
                        <FaCartShopping className="text-xl md:text-2xl cursor-pointer" />
                    </div>
                </Link>
            </nav>
        </header>
    )
}
