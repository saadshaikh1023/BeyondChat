"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F3E8FF]">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-6xl mb-2">BeyondChats</h1>
          <p className="text-xl text-gray-600">The Next-Gen Chatbot Platform</p>
        </motion.div>
        <motion.h2
          className="text-3xl font-bold text-black sm:text-4xl mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Create, deploy, and manage AI-powered chatbots with ease
        </motion.h2>
        <motion.p
          className="mt-4 text-xl leading-7 text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Empower your business with intelligent conversations. Our platform simplifies the process of building and
          integrating advanced chatbots, enhancing customer engagement and streamlining operations.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/register" passHref>
            <motion.a
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get started
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </Link>
          <Link href="/test-chatbot" passHref>
            <motion.a
              className="inline-flex items-center justify-center px-6 py-3 border border-black text-base font-medium rounded-full text-black bg-transparent hover:bg-black hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Demo
              <MessageCircle className="ml-2 h-5 w-5" />
            </motion.a>
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="w-full max-w-4xl mt-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gray-100 px-6 py-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-end">
                <div className="bg-[#F3E8FF] text-black rounded-lg py-2 px-4 max-w-xs">
                  Hello! How can I assist you today?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-200 text-black rounded-lg py-2 px-4 max-w-xs">
                  I&apos;d like to know more about your chatbot services.
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#F3E8FF] text-black rounded-lg py-2 px-4 max-w-xs">
                  Our chatbots are AI-powered and can be customized for various industries. They can handle customer
                  inquiries, process orders, and even provide personalized recommendations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

