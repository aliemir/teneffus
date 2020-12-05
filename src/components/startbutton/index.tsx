import React from 'react'
import { PlayIcon } from '../icons'

export const StartButton = ({ active, ...props }) => {
  return (
    <button
      type='button'
      className='col-span-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
      {...props}
    >
      <PlayIcon className='mr-2' />
      {active ? 'Durdur' : 'Başlat'}
    </button>
  )
}
