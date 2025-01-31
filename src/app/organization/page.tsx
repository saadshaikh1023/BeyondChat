"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import OrganizationForm from "@/components/OrganizationForm"
import ScrapingStatus from "@/components/ScrapingStatus"
import { motion } from "framer-motion"

export default function OrganizationSetup() {
  const [organizationCreated, setOrganizationCreated] = useState(false)
  const router = useRouter()

  const handleOrganizationSetup = async (name: string, website: string, description: string) => {
    setOrganizationCreated(true)
  }

  const handleContinue = () => {
    router.push("/integration")
  }

  return (
    <div className="min-h-screen bg-[#F3E8FF] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        className="w-full max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-4xl font-extrabold text-black mb-8">Setup Your Organization</h2>
        {!organizationCreated ? (
          <OrganizationForm onSubmit={handleOrganizationSetup} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-xl rounded-lg p-8"
          >
            <ScrapingStatus />
            <motion.button
              onClick={handleContinue}
              className="mt-8 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Continue to Chatbot Integration
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

