'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import AuthForm from '@/components/AuthForm'
import { motion } from 'framer-motion'

export default function Register() {
  const [verificationSent, setVerificationSent] = useState(false)

  const handleRegister = async (email: string, password: string) => {
    setVerificationSent(true)
  }

  const handleVerification = async (code: string) => {
    await signIn('credentials', { email: 'user@example.com', password: 'password', callbackUrl: '/organization' })
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8"
      >
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            Welcome to BeyondChats
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Create your account and start building amazing chatbots
          </p>
        </div>
        {!verificationSent ? (
          <AuthForm onSubmit={handleRegister} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 text-center text-gray-700">Please enter the verification code sent to your email.</p>
            <input
              type="text"
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Verification Code"
              onChange={(e) => handleVerification(e.target.value)}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}