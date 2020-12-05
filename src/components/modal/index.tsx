import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { getStoreDuration } from '../../definitions'

interface ModalProps {
  onSave: (minutes: number) => void
  onClose: (minutes: number) => void
  defaultMinutes: number
}

export const SettingsModal = ({ defaultMinutes, onSave, onClose, visible }) => {
  const [minutes, setMinutes] = React.useState<number>(defaultMinutes)

  const increment = (event: React.MouseEvent) => {
    event.stopPropagation()
    if (minutes < 60) {
      setMinutes((prev) => prev + 1)
    }
  }

  const decrement = (event: React.MouseEvent) => {
    event.stopPropagation()
    if (minutes > 1) {
      setMinutes((prev) => prev - 1)
    }
  }

  const save = (event: React.MouseEvent) => {
    event.stopPropagation()
    onSave(minutes)
    onClose()
  }

  const close = (event: React.MouseEvent) => {
    event.stopPropagation()
    onClose()
  }

  const outside = (event: React.MouseEvent) => {
    onClose()
  }

  const inside = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  return (
    <div
      onClick={outside}
      className={`absolute ${
        visible ? 'top-0' : 'top-full'
      } left-0 w-full h-full flex justify-center items-center p-8 transition-all duration-500 ease-in-out`}
    >
      <div
        onClick={inside}
        className='bg-white p-4 shadow-2xl rounded-xl w-full max-w-sm '
      >
        <div className='flex items-center justify-center'>
          <button
            type='button'
            onClick={decrement}
            className='select-none inline-flex items-center justify-center px-1 py-1 border border-transparent rounded-md text-7xl font-bold text-center text-red-400 w-14 h-14 bg-pink-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400'
          >
            -
          </button>
          <div className='flex items-center py-1 px-3 text-8xl font-bold text-gray-600'>
            {minutes < 10 ? `0${minutes}` : minutes}
          </div>
          <button
            type='button'
            onClick={increment}
            className='select-none inline-flex items-center justify-center px-1 py-1 border border-transparent rounded-md text-6xl font-bold text-center text-red-400 w-14 h-14 bg-pink-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400'
          >
            +
          </button>
        </div>
        <div className='text-center text-2xl font-bold text-gray-500 mb-6'>
          dakika
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <button
            type='button'
            onClick={save}
            className='justify-center col-span-2 sm:col-span-1 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
          >
            Kaydet
          </button>
          <button
            type='button'
            onClick={close}
            className='justify-center col-span-2 sm:col-span-1 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg font-bold text-red-600 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600'
          >
            Geri Dön
          </button>
        </div>
      </div>
    </div>
  )
}