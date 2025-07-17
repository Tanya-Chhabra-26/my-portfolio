import { motion } from 'framer-motion'
import AboutMe from '@/components/aboutme'
import Navbar from '@/components/navbar'
import Contact from '@/components/contact'
export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="pt-20 min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-100 flex flex-col items-center justify-center text-center p-6 cedarville-cursive-regular">


        <motion.h1
          className="text-5xl md:text-6xl font-bold text-pink-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, i’m Tanya Chhabra!
        </motion.h1>

        <motion.p
          className="mt-4 text-xl md:text-2xl text-gray-700 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Front-End Developer & Creative Coder crafting beautiful, responsive websites.
        </motion.p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-pink-600 text-white rounded-2xl shadow-lg hover:bg-pink-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white border-2 border-pink-600 text-pink-600 rounded-2xl hover:bg-pink-50 transition"
          >
            Contact Me
          </a>
        </div>
        <AboutMe />
        <Contact />
      </div>
    </>
  )
}
