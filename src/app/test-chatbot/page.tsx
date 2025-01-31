'use client'

import { useState } from 'react'
import ChatbotTest from '@/components/ChatbotTest'
import { motion } from 'framer-motion'

export default function TestChatbot() {
  const [showFeedback, setShowFeedback] = useState(false)

  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <motion.div
          className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Test Your Chatbot</h1>
          <div className="bg-white overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <motion.button
                onClick={() => setShowFeedback(!showFeedback)}
                className="text-sm text-black hover:text-indigo-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showFeedback ? 'Hide Feedback Form' : 'Chatbot not working as intended? Share feedback'}
              </motion.button>
            </div>
            {showFeedback && (
              <motion.div 
                className="p-4 bg-gray-50"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <textarea
                  className="w-full h-24 p-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  placeholder="Please provide your feedback here..."
                ></textarea>
                <motion.button
                  className="mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit Feedback
                </motion.button>
              </motion.div>
            )}
            <ChatbotTest />
          </div>
        </motion.div>
      </div>
    </div>
  )
}