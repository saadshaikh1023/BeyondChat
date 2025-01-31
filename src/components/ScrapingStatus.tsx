import { useState } from 'react'
import { motion } from 'framer-motion'

const dummyData = [
  { url: 'https://google.com', status: 'scraped' },
  { url: 'https://amazon.com/about', status: 'scraped' },
  { url: 'https://tailscan.com/tailwind/backgrounds', status: 'pending' },
  { url: 'https://internshala.com/chat', status: 'detected' },
]

export default function ScrapingStatus() {
  const [selectedPage, setSelectedPage] = useState<string | null>(null)

  const handlePageClick = (url: string) => {
    setSelectedPage(url)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-xl rounded-lg p-6"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Website Scraping Status</h3>
      <ul className="divide-y divide-gray-200">
        {dummyData.map((page, index) => (
          <motion.li 
            key={page.url} 
            className="py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">{page.url}</span>
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                page.status === 'scraped' ? 'bg-green-100 text-green-800' :
                page.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {page.status}
              </span>
            </div>
            <motion.button
              onClick={() => handlePageClick(page.url)}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View scraped data
            </motion.button>
          </motion.li>
        ))}
      </ul>
      {selectedPage && (
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-lg font-medium text-gray-900 mb-2">Scraped Data for {selectedPage}</h4>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            {JSON.stringify({ title: 'Home Page', content: 'Welcome to our platform! Experience the future of AI-powered conversations with our cutting-edge chatbot solutions. Sign up today to explore innovative features designed to enhance user engagement and streamline communication.' }, null, 2)}
          </pre>
        </motion.div>
      )}
    </motion.div>
  )
}