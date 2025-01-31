"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import AuthForm from "@/components/AuthForm"
import { motion } from "framer-motion"

export default function Register() {
  const [verificationSent, setVerificationSent] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [verificationCode, setVerificationCode] = useState("")

  const handleRegister = async (email: string, password: string) => {
    setEmail(email)
    setPassword(password)
    setVerificationSent(true)
  }

  const handleVerification = async () => {
    if (verificationCode === "1234") {
      await signIn("credentials", {
        email,
        password,
        code: verificationCode,
        callbackUrl: "/organization",
      })
    } else {
      alert("Invalid verification code. Please try again.")
    }
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
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">Welcome to BeyondChats</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Create your account and start building amazing chatbots
          </p>
        </div>
        {!verificationSent ? (
          <AuthForm onSubmit={handleRegister} />
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <p className="mb-4 text-center text-gray-700">Please enter the verification code sent to your email.</p>
            <input
              type="text"
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button
              onClick={handleVerification}
              className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Verify
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

