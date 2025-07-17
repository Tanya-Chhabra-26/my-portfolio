
'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutMe() {
    return (
        <motion.section
            id="about"
            className="w-full max-w-5xl mx-auto mt-20 p-6 rounded-3xl bg-white shadow-xl border border-pink-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-pink-700 text-center mb-6">
                About Me
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-pink-300 shadow-md">
                    <Image
                        src="/images/Image-1.jpg"
                        alt="Tanya Chhabra"
                        width={160}
                        height={160}
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="text-gray-700 text-lg leading-relaxed max-w-xl">
                    <p className="mb-4">
                        I’m <span className="text-fuchsia-600 font-medium">Tanya Chhabra</span>, a front-end developer passionate about pretty pixels and clean code. I love working with <strong className="text-pink-500">React</strong>, <strong className="text-purple-500">Next.js</strong>, and <strong className="text-rose-400">Tailwind CSS</strong>.
                    </p>
                    <p>
                        I enjoy designing websites that feel smooth, friendly, and beautiful — from elegant portfolios to animated landing pages. Currently exploring ✨ Framer Motion ✨ to bring interfaces to life.
                    </p>
                </div>
            </div>
        </motion.section>
    )
}
