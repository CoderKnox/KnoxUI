'use client'

import { useState } from 'react'

const Radio = ({ options, name, value: initialValue, onChange, className = '', buttonStyle = false }) => {
  const [selectedValue, setSelectedValue] = useState(initialValue)

  const handleChange = (e) => {
    setSelectedValue(e.target.value)
    onChange && onChange(e)
  }

  const baseClasses = 'inline-flex items-center cursor-pointer'
  const radioClasses = buttonStyle
    ? 'px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
    : 'mr-4'

  return (
    <div className={`space-y-2 ${className}`}>
      {options.map((option) => (
        <label key={option.value} className={`${baseClasses} ${radioClasses}`}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleChange}
            className={buttonStyle ? 'sr-only' : 'mr-2'}
          />
          {buttonStyle ? (
            <span
              className={`${
                selectedValue === option.value
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors duration-300`}
            >
              {option.label}
            </span>
          ) : (
            <span>{option.label}</span>
          )}
        </label>
      ))}
    </div>
  )
}

export default Radio
