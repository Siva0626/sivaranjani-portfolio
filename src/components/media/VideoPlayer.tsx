type VideoPlayerProps = {
  title: string
  imageSrc: string
  slides: Array<{ label: string; title: string; description: string }>
}

export function VideoPlayer({ title, imageSrc }: VideoPlayerProps) {
  const videoSrc = '/Portfolio%20Video.mp4'

  return (
    <div className="video-player">
      <video
        className="video-player__screen"
        controls
        preload="metadata"
        playsInline
        poster={imageSrc}
        aria-label={title}
        title={title}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag. This portfolio video is available in the project assets.
      </video>
      <p className="media-fallback">Portfolio video: a short overview of Sivaranjani Selvaraj’s work across operations, learning, data and AI-assisted digital workflows.</p>
    </div>
  )
}
