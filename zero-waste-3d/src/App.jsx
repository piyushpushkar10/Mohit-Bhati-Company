import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import WasteTypesIndex from './pages/WasteTypesIndex'
import WasteTypeDetail from './pages/WasteTypeDetail'
import SolutionsIndex from './pages/SolutionsIndex'
import SolutionDetail from './pages/SolutionDetail'
import RefurbishedLaptops from './pages/RefurbishedLaptops'
import About from './pages/About'
import Careers from './pages/Careers'
import Qehs from './pages/Qehs'
import Blogs from './pages/Blogs'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="waste-types" element={<WasteTypesIndex />} />
        <Route path="waste-types/:slug" element={<WasteTypeDetail />} />
        <Route path="solutions" element={<SolutionsIndex />} />
        <Route path="solutions/:slug" element={<SolutionDetail />} />
        <Route path="refurbished-laptops" element={<RefurbishedLaptops />} />
        <Route path="about" element={<About />} />
        <Route path="careers" element={<Careers />} />
        <Route path="qehs" element={<Qehs />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
