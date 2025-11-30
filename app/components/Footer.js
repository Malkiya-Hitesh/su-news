import React from 'react'
import Link from 'next/link'
import { NavLink } from './Navbar'
import { FaInstagram } from "react-icons/fa";
export default function Footer() {


return (
    <footer className="bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            <div className="flex-1">
                <Link href="/" className="text-2xl font-semibold inline-block">SU News</Link>
                <p className="text-sm text-gray-600 mt-1">Independent student news and features</p>
            </div>

            <nav aria-label="Footer navigation" className="flex-1 md:flex md:justify-center">
                <ul className="flex flex-col md:flex-row gap-3 md:gap-6 list-none p-0 m-0">
                    <li><NavLink data={'Home'} h={'/'} /></li>
                    <li><NavLink data={'About'} h={'/about'} /></li>
                    <li><NavLink data={'Contact'} h={'/contact'} /></li>
                    <li><NavLink data={'Privacy'} h={'/privacy'} /></li>
                </ul>
            </nav>

            <div className="flex-1 flex items-start justify-end">
               <Link href="" > <FaInstagram /></Link>  
            </div>
        </div>

        <div className="border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <small className="text-xs text-gray-500">© 2025 SU News — All rights reserved.</small>
            </div>
        </div>
    </footer>
)
}
