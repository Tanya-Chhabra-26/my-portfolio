'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <motion.nav
            className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50"
            initial={{ y: -60 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-pink-600 font-bold text-2xl">
                    Tanya Chhabra
                </Link>
                <ul className="hidden md:flex space-x-8 text-pink-700 font-medium">
                    <li><a href="#about" className="hover:text-fuchsia-600 transition">About</a></li>
                    <li><a href="#projects" className="hover:text-fuchsia-600 transition">Projects</a></li>
                    <li><a href="#skills" className="hover:text-fuchsia-600 transition">Skills</a></li>
                    <li><a href="#contact" className="hover:text-fuchsia-600 transition">Contact</a></li>
                </ul>
                <button className="md:hidden text-pink-700" onClick={toggleMenu}>
                    ☰
                </button>
            </div>
            {isOpen && (
                <ul className="md:hidden flex flex-col items-center bg-white text-pink-700 py-4 space-y-4">
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            )}
        </motion.nav>
    )
}
