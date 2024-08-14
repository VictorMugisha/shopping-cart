import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Layout() {
    const currentTheme = useSelector(state => state.theme.value)
    const mainRef = useRef(null)

    useEffect(() => {
        const { current } = mainRef
        if (currentTheme === "dark") {
            current.classList.add("bg-gray-700")
            current.classList.add("text-white")
        } 
        else {
            current.classList.remove("bg-gray-700")
            current.classList.remove("text-white")
        }
    }, [currentTheme])
    return (
        <main
            ref={mainRef}
            className="min-h-screen flex flex-col justify-between"
        >
            <div>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}
