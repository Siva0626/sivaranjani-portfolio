import { Routes, Route } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { HomePage } from '../pages/HomePage'
import { AboutPage } from '../pages/AboutPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { CapabilitiesPage } from '../pages/CapabilitiesPage'
import { CourseCreationPage } from '../pages/CourseCreationPage'
import { DataAnalysisPage } from '../pages/DataAnalysisPage'
import { ContactPage } from '../pages/ContactPage'

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/capabilities" element={<CapabilitiesPage />} />
        <Route path="/course-creation" element={<CourseCreationPage />} />
        <Route path="/data-analysis" element={<DataAnalysisPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </AppShell>
  )
}
