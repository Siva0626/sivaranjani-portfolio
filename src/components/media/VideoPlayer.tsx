import { useRef, useState } from 'react'

type VideoPlayerProps = {
  title: string
  imageSrc: string
  slides: Array<{ label: string; title: string; description: string }>
}

export function VideoPlayer({ title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoSrc = '/Portfolio%20Video.mp4'

  const togglePlayback = async () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      await video.play()
      setIsPlaying(true)
      return
    }

    video.pause()
    setIsPlaying(false)
  }

  return (
    <div className="video-player">
      <div className="video-player__label-row">
        <span className="video-player__label">Video narration</span>

        <button
          type="button"
          className="video-player__toggle"
          onClick={togglePlayback}
          aria-label={
            isPlaying
              ? 'Pause the portfolio video'
              : 'Play the portfolio video'
          }
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>

      <div
        className={`video-player__frame ${
          isPlaying ? 'video-player__frame--playing' : ''
        }`}
      >
        <video
          ref={videoRef}
          className="video-player__screen"
          preload="metadata"
          playsInline
          aria-label={title}
          title={title}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag. This portfolio video is
          available in the project assets.
        </video>

        {!isPlaying && (
          <button
            type="button"
            className="video-player__youtube"
            onClick={togglePlayback}
            aria-label="Play portfolio video"
          >
            <span className="video-player__youtube-icon">▶</span>
          </button>
        )}

        <div className="video-player__overlay" aria-hidden="true">
          <span className="video-player__overlay-badge">
            A short introduction
          </span>
        </div>
      </div>

      <p className="media-fallback">
        Portfolio video: a short overview of Sivaranjani Selvaraj’s work across
        operations, learning, data and AI-assisted digital workflows.
      </p>
    </div>
  )
}