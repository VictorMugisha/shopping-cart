import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <div>
                <h2>Fake Shop</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">All Products</Link>
                    </li>
                    <li>
                        <Link to="/">Cars</Link>
                    </li>
                    <li>
                        <Link to="/">Clothings</Link>
                    </li>
                    <li>
                        <Link to="/">Shoes</Link>
                    </li>
                </ul>
                <FaCartShopping />
            </nav>
        </header>
    )
}
