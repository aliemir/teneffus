import React from 'react'
import { default as NextHead } from 'next/head'

export const Head: React.FC<{
  title: string
  active: boolean
  soundActive: boolean
}> = ({ title, active, soundActive }) => {
  return (
    <NextHead>
      <title>{title}</title>
      {active && (
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-active.png'
        />
      )}
      {!active && !soundActive && (
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-idle.png'
        />
      )}
      {!active && soundActive && (
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-done.png'
        />
      )}
    </NextHead>
  )
}
