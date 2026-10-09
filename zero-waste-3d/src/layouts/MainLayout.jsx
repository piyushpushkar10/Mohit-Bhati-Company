import { Outlet, useLocation } from 'react-router-dom'
import { useProgress } from '../store/useProgress'
import usePointerTracker from '../hooks/usePointerTracker'
import ClassicBackdrop from '../components/ClassicBackdrop'
import AmbientCanvas from '../three/AmbientCanvas'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

// Home renders its own SceneCanvas (the full scroll-journey experience);
// every other route gets the lightweight AmbientCanvas instead, so the
// heavy per-phase 3D scenes only ever mount on the page that uses them.
export default function MainLayout() {
  const mode3D = useProgress((s) => s.mode3D)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  usePointerTracker()

  return (
    <div className="relative min-h-screen">
      {!mode3D && <ClassicBackdrop />}
      {mode3D && !isHome && <AmbientCanvas />}
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
