"use client"

import React from 'react'
import { FaPhone, FaWhatsapp, FaComments, FaSearch } from 'react-icons/fa'

const ContactBar = () => {
  const contactOptions = [
    {
      icon: FaPhone,
      label: 'Call',
      action: () => {
        // Add your phone number here
        window.open('tel:+1234567890', '_self')
      }
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      action: () => {
        // Add your WhatsApp number here
        window.open('https://wa.me/1234567890', '_blank')
      }
    },
    {
      icon: FaComments,
      label: 'Chat',
      action: () => {
        // Add your chat functionality here
        console.log('Open chat')
      }
    },
    {
      icon: FaSearch,
      label: 'Enquire',
      action: () => {
        // Add your enquiry functionality here
        console.log('Open enquiry form')
      }
    }
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-around items-center">
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon
            return (
              <button
                key={index}
                onClick={option.action}
                className="flex flex-col items-center space-y-1 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 group"
              >
                <IconComponent 
                  className="w-6 h-6 text-black group-hover:text-[#ED1C25] transition-colors duration-200" 
                />
                <span className="text-xs font-medium text-black group-hover:text-[#ED1C25] transition-colors duration-200">
                  {option.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ContactBar
