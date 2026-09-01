import { useEffect, useRef, useState } from 'react'

type AudioNarrationProps = { src: string; title: string; transcriptId: string }

export function AudioNarration({ src, title, transcriptId }: AudioNarrationProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onLoaded = () => setDuration(audio.duration || 0)
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }
    const onEnded = () => setIsPlaying(false)

    audio.addEventListener('loadedmetadata', onLoaded)
    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('ended', onEnded)

    return () => {
      audio.removeEventListener('loadedmetadata', onLoaded)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('ended', onEnded)
    }
  }, [])

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds) || seconds <= 0) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const waveHeights = [36, 48, 64, 72, 52, 68, 42]
  const progress = duration ? (currentTime / duration) * 100 : 0

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      await audio.play()
      setIsPlaying(true)
      return
    }

    audio.pause()
    setIsPlaying(false)
  }

  const handleSeek = (value: number) => {
    const audio = audioRef.current
    if (!audio || !duration) return

    const nextTime = (value / 100) * duration
    audio.currentTime = nextTime
    setCurrentTime(nextTime)
  }

  return (
    <div className="audio-narration">
      <div className="audio-narration__header">
        <p className="audio-narration__label">Audio narration</p>
        <span className="audio-narration__status">{isPlaying ? 'Playing' : 'Ready'}</span>
      </div>

      <div className="audio-narration__visual" aria-hidden="true">
        {waveHeights.map((height, index) => (
          <span key={`${height}-${index}`} style={{ height: `${height}%` }} />
        ))}
      </div>

      <div className="audio-narration__controls">
        <button
          type="button"
          className="audio-narration__play"
          aria-label={isPlaying ? 'Pause audio narration' : 'Play audio narration'}
          onClick={togglePlayback}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        <div className="audio-narration__timeline" aria-label="Audio playback timeline">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(event) => handleSeek(Number(event.target.value))}
            aria-label="Seek through audio narration"
          />
          <div className="audio-narration__times">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      <p className="audio-narration__title">{title}</p>

      <audio ref={audioRef} preload="metadata" aria-describedby={transcriptId}>
        <source src={src} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
