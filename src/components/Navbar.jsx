import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../store/theme";
import { useEffect, useRef } from "react";

export default function Navbar() {
    const currentTheme = useSelector(state => state.theme.value)
    const themeDispatch = useDispatch()
    const headerRef = useRef(null)
    const toggleButtonRef = useRef(null)

    useEffect(() => {
        const { current } = headerRef
        const { classList } = current
        classList.toggle("bg-gray-800")
        classList.toggle("text-white")
        toggleButtonRef.current.classList.toggle("right-1")
        toggleButtonRef.current.classList.toggle("left-1")
        toggleButtonRef.current.classList.toggle("bg-white")
    }, [currentTheme])

    function handleToggleTheme() {
        if (currentTheme === "light") themeDispatch(changeTheme("dark"))
        if (currentTheme === "dark") themeDispatch(changeTheme("light"))
    }

    return (
        <header
            ref={headerRef}
            className="w-full py-5 px-5 md:px-20 flex items-center justify-between shadow-md"
        >
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
                    <div
                        className="relative w-12 h-6 md:w-16 md:h-7 bg-gray-400 rounded-3xl cursor-pointer"
                    >
                        <button
                            ref={toggleButtonRef}
                            className="absolute top-1 bottom-1 right-1 rounded-full bg-gray-700 w-6 md:w-8 outline-none"
                            onClick={handleToggleTheme}
                        ></button>
                    </div>
                </div>
                <Link to="cart">
                    <div className="relative">
                        <span
                            className="absolute text-white bg-red-500 rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center top-[-7px] md:top-[-10px] right-[-7px] md:right-[-10px]"
                        >0</span>
                        <FaCartShopping className="text-xl md:text-2xl cursor-pointer" />
                    </div>
                </Link>
            </nav>
        </header>
    )
}
