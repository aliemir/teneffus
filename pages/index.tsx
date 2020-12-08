import React from 'react'
import {
  SettingsModal,
  Button,
  Head,
  PauseIcon,
  PlayIcon,
  ResetIcon,
  RingIcon,
  SettingsIcon,
} from '../src/components'
import {
  Colors,
  minutes,
  seconds,
  storage,
  useInterval,
} from '../src/definitions'

const Home = () => {
  const [duration, setDuration] = React.useState(() => storage.get())
  const [timeLeft, setTimeLeft] = React.useState(() => storage.get())
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
    storage.set(minute)
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
      <Head title={title} active={active} soundActive={soundActive} />
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
          <Button
            onClick={active ? onPause : onStart}
            color={Colors.purple}
            span={4}
          >
            {!active ? (
              <PlayIcon className='mr-2' />
            ) : (
              <PauseIcon className='mr-2' />
            )}
            {!active ? 'Başlat' : 'Durdur'}
          </Button>
          <Button onClick={onReset} color={Colors.pink} span={4}>
            <ResetIcon className='mr-2' />
            {'Sıfırla'}
          </Button>
          <Button
            onClick={!soundActive ? playSound : stopSound}
            color={Colors.red}
            span={6}
          >
            <RingIcon className='mr-2' />
            Zili&nbsp;
            {!soundActive && (
              <span className='hidden sm:inline'>Hemen&nbsp;</span>
            )}
            {soundActive ? 'Durdur' : 'Çal'}
          </Button>
          <Button onClick={onSettings} color={Colors.white} span={2}>
            <SettingsIcon />
          </Button>
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
