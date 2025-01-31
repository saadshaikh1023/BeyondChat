import { useState, useEffect } from "react"
import ReactConfetti from "react-confetti"
import { motion } from "framer-motion"
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"

interface SuccessScreenProps {
  onExploreAdmin: () => void
  onStartChatbot: () => void
}

export default function SuccessScreen({ onExploreAdmin, onStartChatbot }: SuccessScreenProps) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <motion.div
      className="text-center bg-[#F3E8FF] shadow-xl rounded-lg p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ReactConfetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={200}
        colors={["#F3E8FF", "#000000", "#8B5CF6", "#C4B5FD"]}
      />
      <motion.h3
        className="text-3xl font-bold text-black mb-4"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        Integration Successful!
      </motion.h3>
      <motion.p
        className="text-gray-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Your chatbot is now ready to use on your website.
      </motion.p>
      <div className="space-y-4">
        <motion.button
          onClick={onExploreAdmin}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Admin Panel
        </motion.button>
        <motion.button
          onClick={onStartChatbot}
          className="w-full flex justify-center py-2 px-4 border-2 border-black rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Talking to Your Chatbot
        </motion.button>
      </div>
      <div className="mt-8">
        <h4 className="text-lg font-medium text-black mb-4">Share Your Success</h4>
        <div className="flex justify-center space-x-4">
          <motion.button
            className="text-black hover:text-gray-600 transition-colors duration-200"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter className="w-6 h-6" />
          </motion.button>
          <motion.button
            className="text-black hover:text-gray-600 transition-colors duration-200"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebook className="w-6 h-6" />
          </motion.button>
          <motion.button
            className="text-black hover:text-gray-600 transition-colors duration-200"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

