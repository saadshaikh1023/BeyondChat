'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import IntegrationInstructions from '@/components/IntegrationInstructions'
import SuccessScreen from '@/components/SuccessScreen'
import { motion } from 'framer-motion'

export default function Integration() {
  const [integrationSuccess, setIntegrationSuccess] = useState(false)
  const router = useRouter()

  const handleTestIntegration = () => {
    setTimeout(() => {
      setIntegrationSuccess(true)
    }, 2000)
  }

  const handleExploreAdmin = () => {
    router.push('/dashboard')
  }

  const handleStartChatbot = () => {
    router.push('/test-chatbot')
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-8">
          Chatbot Integration
        </h2>
        {!integrationSuccess ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <IntegrationInstructions />
            <motion.button
              onClick={handleTestIntegration}
              className="mt-8 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Test Integration
            </motion.button>
          </motion.div>
        ) : (
          <SuccessScreen
            onExploreAdmin={handleExploreAdmin}
            onStartChatbot={handleStartChatbot}
          />
        )}
      </motion.div>
    </div>
  )
}