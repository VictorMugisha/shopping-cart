import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
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
