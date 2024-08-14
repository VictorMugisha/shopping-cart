import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

export default function Filter() {
    const currentTheme = useSelector(state => state.theme.value)
    const inputRef = useRef(null)
    const selectRef = useRef(null)

    useEffect(() => {
        const { current } = inputRef
        if (currentTheme === "dark") {
            selectRef.current.classList.add("bg-gray-600")
            selectRef.current.classList.add("text-white")
            current.classList.add("bg-gray-600")
            current.classList.add("text-white")
        }
        else {
            selectRef.current.classList.remove("bg-gray-600")
            selectRef.current.classList.remove("text-white")
            current.classList.remove("bg-gray-600")
            current.classList.remove("text-white")
        }
    }, [currentTheme])
    return (
        <div
            className="flex justify-between items-center mb-8"
        >
            <input
                ref={inputRef}
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
    )
}
