import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Layout() {
    const currentTheme = useSelector(state => state.theme.value)
    let dynamicStyles = {}
    if (currentTheme === "light") {
        dynamicStyles.backgroundColor = "white"
        dynamicStyles.color = "black"
    } else {
        dynamicStyles.backgroundColor = "black"
        dynamicStyles.color = "white"
    }
    return (
        <main className="min-h-screen flex flex-col justify-between" style={dynamicStyles}>
            <div>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}
