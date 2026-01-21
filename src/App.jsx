import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import SolutionDetail from './pages/SolutionDetail'
import Bundles from './pages/Bundles'
import Devis from './pages/Devis'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:slug" element={<SolutionDetail />} />
        <Route path="/bundles" element={<Bundles />} />
        <Route path="/devis" element={<Devis />} />
      </Routes>
    </Layout>
  )
}

export default App
