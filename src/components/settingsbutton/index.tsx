import React from 'react'
import { SettingsIcon } from '../icons'

export const SettingsButton = (props) => {
  return (
    <button
      type='button'
      className='col-span-2 sm:col-span-1 inline-flex items-center justify-center px-1 py-1 border border-transparent rounded-md text-lg font-bold text-center text-red-400 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400'
      {...props}
    >
      <SettingsIcon className='' />
    </button>
  )
}
