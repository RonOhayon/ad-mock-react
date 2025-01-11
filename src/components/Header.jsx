import React from 'react'

const Header = ({title}) => {
  return (
    <header className='bg-green-400 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-green-300'>
        <div className='max-w-7xl mx-auto py-4 sm:px-6 lg:px-8'>
            <h1 className='text-2xl font-semibold text-gray-200'>Ad Mock {title}</h1>
        </div>
    </header>
  )
}

export default Header
