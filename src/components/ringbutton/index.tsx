import React from 'react'
import { RingIcon } from '../icons'

export const RingButton = ({ active, ...props }) => {
  return (
    <button
      type='button'
      className='col-span-6 sm:col-span-7 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400'
      {...props}
    >
      <RingIcon className='mr-2' />
      Zili&nbsp;
      {!active && <span className='hidden sm:inline'>Hemen&nbsp;</span>}
      {active ? 'Durdur' : 'Çal'}
    </button>
  )
}
