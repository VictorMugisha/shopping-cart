import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Layout() {
    const currentTheme = useSelector(state => state.theme.value)
    return (
        <main className="min-h-screen flex flex-col justify-between">
            <div>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}
