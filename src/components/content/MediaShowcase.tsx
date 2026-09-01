import profileImage from '../../app/assets/profile.png'
import { AudioNarration } from '../media/AudioNarration'
import { VideoPlayer } from '../media/VideoPlayer'

const transcript = 'This portfolio presents Sivaranjani Selvaraj’s work across operations and management, digital workflows, instructional design, data analysis, course creation, and AI-assisted work. The interactive 3D visual above brings those connected capability areas together. The walkthrough highlights a practical approach to organising work, creating structured learning content, working with data, and using AI tools to support digital workflows.'

const slides = [
  { label: 'Portfolio overview', title: 'Operations and digital workflows', description: 'A practical professional portfolio grounded in structured operations and management.' },
  { label: 'Learning and data', title: 'Content, courses and analysis', description: 'Instructional design, course material creation, data cleaning and data analysis.' },
  { label: 'AI-assisted work', title: 'Tools that support delivery', description: 'AI-assisted workflows used alongside digital work, learning content and development workflows.' },
]

export function MediaShowcase() {
  return (
    <section className="media-showcase" aria-labelledby="media-showcase-title">
      <div className="section-heading">
        <p className="eyebrow">Portfolio walkthrough</p>
        <h2 id="media-showcase-title">A concise view of the work</h2>
        <p>A short multimedia overview connects the portfolio’s operations, learning, data and AI-assisted workflow areas.</p>
      </div>

      <div className="media-showcase__grid">
        <VideoPlayer title="Sivaranjani portfolio walkthrough" imageSrc={profileImage} slides={slides} />
        <div className="media-showcase__narration">
          <AudioNarration src="/media/portfolio-narration.wav" title="A narrated introduction to the professional portfolio." transcriptId="portfolio-transcript" />
          <details className="media-transcript" open>
            <summary>Accessible transcript</summary>
            <p id="portfolio-transcript">{transcript}</p>
          </details>
        </div>
      </div>
    </section>
  )
}
