import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/filter';

// Debounce function to limit how often a function is invoked
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Create a debounced version of the function that logs the input filter
const debouncedApiRequest = debounce((filterObject, dispatchFilter) => {
    console.log("Updating filter with: ", filterObject.value);
    dispatchFilter(setFilter(filterObject))
}, 1000);

export default function Filter() {
    const [inputFilter, setInputFilter] = useState('');
    const currentTheme = useSelector(state => state.theme.value);
    const inputRef = useRef(null);
    const selectRef = useRef(null);
    
    const availableTypes = useSelector(state => state.products.value)
                            .map(product => {
                                return product.productType
                            })

    const filterTypes = [...new Set(availableTypes)]

    const dispatchFilter = useDispatch()

    function handleInputChange(event) {
        const newValue = event.target.value;
        setInputFilter(newValue);
        const dispatchByInput = {
            type: 'input',
            value: newValue
        }
        debouncedApiRequest(dispatchByInput, dispatchFilter);
    }

    function handleSelectChange(event) {
        const selectedValue = event.target.value.toLowerCase()
        const dispatchBySelect = {
            type: "select",
            value: selectedValue
        }
        debouncedApiRequest(dispatchBySelect, dispatchFilter)
        console.log()
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
                onChange={handleSelectChange}
                className="ml-4 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            >
                <option value="">Filter by Type</option>
                {
                    filterTypes.map(type => (
                        <option value={type}>{type}</option>
                    ))
                }
            </select>
        </div>
    );
}
