import { useState } from "react"
import { motion } from "framer-motion"

interface OrganizationFormProps {
  onSubmit: (name: string, website: string, description: string) => void
}

export default function OrganizationForm({ onSubmit }: OrganizationFormProps) {
  const [name, setName] = useState("")
  const [website, setWebsite] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(name, website, description)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white shadow-xl rounded-lg p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-1">
          Company Name
        </label>
        <input
          type="text"
          id="company-name"
          required
          className="block w-full border-2 border-[#F3E8FF] rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="website-url" className="block text-sm font-medium text-gray-700 mb-1">
          Company Website URL
        </label>
        <input
          type="url"
          id="website-url"
          required
          className="block w-full border-2 border-[#F3E8FF] rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="company-description" className="block text-sm font-medium text-gray-700 mb-1">
          Company Description
        </label>
        <textarea
          id="company-description"
          rows={4}
          className="block w-full border-2 border-[#F3E8FF] rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none text-black"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <motion.button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Create Organization
        </motion.button>
      </div>
    </motion.form>
  )
}

