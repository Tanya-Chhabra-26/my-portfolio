'use client'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaFileAlt } from 'react-icons/fa'

export default function Contact() {
    return (
        <div className="w-full max-w-5xl mx-auto mt-20 bg-gradient-to-br from-pink-50 via-white to-purple-100 flex flex-col items-center justify-center text-center p-10">
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-pink-700 mb-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Let's Connect!
            </motion.h2>

            <motion.p
                className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                Feel free to reach out via any platform below. I’d love to connect with you!
            </motion.p>

            <motion.div
                className="flex flex-wrap justify-center gap-6 text-pink-700 text-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <a
                    href="www.linkedin.com/in/tanya-chhabra-cse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition"
                    title="LinkedIn"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://github.com/Tanya-Chhabra-26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition"
                    title="GitHub"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.instagram.com/__tanya_chhabra__"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition"
                    title="Instagram"
                >
                    <FaInstagram />
                </a>

                <a
                    href="mailto:tanyachhabra883@gmail.com"
                    className="hover:text-pink-500 transition"
                    title="Email"
                >
                    <FaEnvelope />
                </a>

                <a
                    href="/resume_Tanya.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition"
                    title="Resume"
                >
                    <FaFileAlt />
                </a>
            </motion.div>
        </div>
    )
}
