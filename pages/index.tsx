import Head from 'next/head'
import React from 'react'
import { Start, Reset, Ring, Settings, SettingsModal } from '../src/components'
import {
  getStoreDuration,
  minutes,
  seconds,
  setStoreDuration,
  useInterval,
} from '../src/definitions'

const Home = () => {
  const [duration, setDuration] = React.useState(() => getStoreDuration())
  const [timeLeft, setTimeLeft] = React.useState(() => getStoreDuration())
  const [title, setTitle] = React.useState('Ders Zamanlayıcı - teneffus.app')
  const audioRef = React.useRef<HTMLAudioElement>()
  const [active, setActive] = React.useState(false)
  const [soundActive, setSoundActive] = React.useState(false)
  const [settingsVisible, setSettingsVisible] = React.useState(false)

  const setNewDuration = (minute: number) => {
    setDuration(minute * 60)
    if (!active) {
      setTimeLeft(minute * 60)
    }
    console.log(minute)
    setStoreDuration(minute)
  }

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play()
      setSoundActive(true)
    }
  }

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setSoundActive(false)
    }
  }

  const onReset = () => {
    setTimeLeft(duration)
    setActive(false)
  }

  const onSettings = () => {
    setSettingsVisible(true)
  }

  const onDone = () => {
    playSound()
    onReset()
  }

  const tick = () => {
    setTimeLeft((prev) => {
      if (prev > 0) {
        if (prev >= 60) {
          setTitle(`${minutes(prev)} dakika kaldı - teneffus.app`)
        } else {
          setTitle(`${seconds(prev)} saniye kaldı - teneffus.app`)
        }
        return prev - 1
      } else {
        onDone()
      }
    })
  }

  const onStart = () => {
    tick()
    setActive(true)
  }

  const onPause = () => {
    setActive(false)
  }

  useInterval(tick, active ? 1000 : null)

  React.useEffect(() => {
    if (!active && !soundActive) {
      setTitle('Ders Zamanlayıcı - teneffus.app')
    } else if (!active && soundActive) {
      setTitle('Ders Bitti! - teneffus.app')
    }
  }, [active, soundActive])

  return (
    <>
      <Head>
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
      </Head>
      <div className='bg-white p-6 shadow-xl rounded-2xl max-w-screen-sm mx-auto'>
        <h1 className='text-purple-500 text-3xl font-black text-center pb-4'>
          Ders Zamanlayıcı
        </h1>
        <div className='text-center text-gray-600 text-7xl sm:text-8xl md:text-10xl font-black pb-6 pt-2'>
          {minutes(timeLeft)}
          <span className=''>{':'}</span>
          {seconds(timeLeft)}
        </div>
        <div className='grid gap-3 grid-cols-8'>
          <Start active={active} onClick={active ? onPause : onStart} />
          <Reset onClick={onReset} />
          <Ring
            active={soundActive}
            onClick={!soundActive ? playSound : stopSound}
          />
          <Settings onClick={onSettings} />
        </div>
      </div>
      <div className='text-center my-3 text-gray-200 text-sm hover:text-gray-50'>
        <a href='mailto:bilgi@teneffus.app'>bilgi@teneffus.app</a>
      </div>
      <SettingsModal
        visible={settingsVisible}
        defaultMinutes={duration / 60}
        onSave={setNewDuration}
        onClose={() => setSettingsVisible(false)}
      />
      <audio id='ring' ref={audioRef} onEnded={stopSound}>
        <source src='ring.mp3' type='audio/mp3' />
      </audio>
    </>
  )
}

export default Home
