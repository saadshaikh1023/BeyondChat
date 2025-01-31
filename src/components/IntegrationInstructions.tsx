import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaEnvelope } from 'react-icons/fa'

export default function IntegrationInstructions() {
  const [integrationMethod, setIntegrationMethod] = useState<'code' | 'email'>('code')

  const codeSnippet = `<script src="https://beyondchats.com/widget.js"></script>
<script>
  BeyondChats.init({
    chatbotId: 'YOUR_CHATBOT_ID'
  });
</script>`

  return (
    <motion.div
      className="bg-white shadow-xl rounded-lg p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Integration Instructions</h3>
      <div className="flex space-x-4 mb-6">
        <motion.button
          onClick={() => setIntegrationMethod('code')}
          className={`flex items-center px-4 py-2 rounded-md ${
            integrationMethod === 'code' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaCode className="mr-2" />
          Copy-paste Code
        </motion.button>
        <motion.button
          onClick={() => setIntegrationMethod('email')}
          className={`flex items-center px-4 py-2 rounded-md ${
            integrationMethod === 'email' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope className="mr-2" />
          Email Instructions
        </motion.button>
      </div>
      {integrationMethod === 'code' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mb-2 text-gray-700">Copy and paste the following code into the {'<head>'} section of your website:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
            {codeSnippet}
          </pre>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mb-2 text-gray-700">Enter your developer&apos;s email address to send integration instructions:</p>
          <input
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="developer@example.com"
          />
          <motion.button
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Instructions
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  )
}