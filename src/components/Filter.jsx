import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

// Debounce function to limit how often a function is invoked
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Create a debounced version of the function that logs the input filter
const debouncedApiRequest = debounce((filter) => {
    console.log("Requesting", filter);
}, 1000);

export default function Filter() {
    const [inputFilter, setInputFilter] = useState('');
    const currentTheme = useSelector(state => state.theme.value);
    const inputRef = useRef(null);
    const selectRef = useRef(null);

    function handleInputChange(event) {
        const newValue = event.target.value;
        setInputFilter(newValue);
        debouncedApiRequest(newValue);
    }

    useEffect(() => {
        const { current } = inputRef;
        if (current) {
            if (currentTheme === "dark") {
                selectRef.current.classList.add("bg-gray-600", "text-white");
                current.classList.add("bg-gray-600", "text-white");
            } else {
                selectRef.current.classList.remove("bg-gray-600", "text-white");
                current.classList.remove("bg-gray-600", "text-white");
            }
        }
    }, [currentTheme]);

    return (
        <div className="flex justify-between items-center mb-8">
            <input
                ref={inputRef}
                value={inputFilter}
                onChange={handleInputChange}
                type="text"
                placeholder="Search for products..."
                className="w-full max-w-lg border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            <select
                ref={selectRef}
                className="ml-4 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            >
                <option value="">Filter by Type</option>
                <option value="AMG Suspension">AMG Suspension</option>
                <option value="Clothing">Clothing</option>
                <option value="Shoes">Shoes</option>
            </select>
        </div>
    );
}
