import React from 'react'
import { ResetIcon } from '../icons'

export const ResetButton = (props) => {
  return (
    <button
      type='button'
      className='col-span-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-pink-500 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
      {...props}
    >
      <ResetIcon className='mr-2' />
      Sıfırla
    </button>
  )
}
