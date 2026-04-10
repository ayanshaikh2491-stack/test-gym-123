import React from 'react'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <nav className='p-6 flex justify-between items-center bg-gray-800'>
        <h1 className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>test-gym-123</h1>
        <div className='space-x-6'><a href='#' className='hover:text-purple-400'>Home</a><a href='#' className='hover:text-purple-400'>Services</a><a href='#' className='hover:text-purple-400'>Contact</a></div>
      </nav>
      <div className='text-center py-20'>
        <motion.h2 initial={{y:20}} animate={{y:0}} className='text-5xl font-bold mb-4'>Welcome to test-gym-123</motion.h2>
        <p className='text-xl text-gray-400 mb-8'>Built with AI Website Builder</p>
        <button className='bg-purple-600 px-8 py-3 rounded-full hover:bg-purple-700'>Get Started</button>
      </div>
      <section className='py-16 px-8'>
        <h3 className='text-3xl font-bold text-center mb-8'>Our Services</h3>
        <div className='grid md:grid-cols-3 gap-6'>
          <div className='bg-gray-800 p-6 rounded-xl'><h4 className='text-xl font-bold mb-2'>Service 1</h4><p className='text-gray-400'>Description of service 1</p></div>
          <div className='bg-gray-800 p-6 rounded-xl'><h4 className='text-xl font-bold mb-2'>Service 2</h4><p className='text-gray-400'>Description of service 2</p></div>
          <div className='bg-gray-800 p-6 rounded-xl'><h4 className='text-xl font-bold mb-2'>Service 3</h4><p className='text-gray-400'>Description of service 3</p></div>
        </div>
      </section>
      <section className='py-16 px-8 bg-gray-800'>
        <h3 className='text-3xl font-bold text-center mb-8'>Contact Us</h3>
        <form className='max-w-md mx-auto space-y-4'>
          <input type='text' placeholder='Your Name' className='w-full bg-gray-700 p-3 rounded-lg' />
          <input type='email' placeholder='Your Email' className='w-full bg-gray-700 p-3 rounded-lg' />
          <textarea placeholder='Message' className='w-full bg-gray-700 p-3 rounded-lg' rows='4'></textarea>
          <button type='button' className='w-full bg-purple-600 py-3 rounded-lg hover:bg-purple-700'>Send Message</button>
        </form>
      </section>
      <footer className='text-center py-8 text-gray-500'>© 2026 test-gym-123 - Built with AI Website Builder</footer>
    </div>
  )
}