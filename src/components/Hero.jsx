import Navbar from './Navbar'
import { motion } from "framer-motion";


function Header() {
  return (
    <div className='min-h-screen  bg-cover bg-center flex items-center w-full overflow-hidden' style={{ backgroundImage: "url('/header_img.png')" }} id='home'>
        <Navbar />
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once: true}}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 
                
                className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'
            >
                Explore Homes that fit your dreams
            </h2>
            <div className='space-x-6 mt-16'>
                <a href="#projects" className='border border-white hover:bg-white hover:text-black px-8 py-3 rounded'>Projects</a>
                <a href="#contactus" className='bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded'>Contact Us</a>
            </div>
        </motion.div>
    </div>
  )
}

export default Header
