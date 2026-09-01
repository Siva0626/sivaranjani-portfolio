type AudioNarrationProps = { src: string; title: string; transcriptId: string }

export function AudioNarration({ src, title, transcriptId }: AudioNarrationProps) {
  return (
    <div className="audio-narration">
      <p className="audio-narration__label">Audio narration</p>
      <audio controls preload="metadata" aria-describedby={transcriptId}>
        <source src={src} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
      <p>{title}</p>
    </div>
  )
}
