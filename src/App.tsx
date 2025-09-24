import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HeavyEquipment from './pages/HeavyEquipment';
import SupportSolutions from './pages/SupportSolutions';
import Contracting from './pages/Contracting';
import SoftwareSolutions from './pages/SoftwareSolutions';
import CeoVision from './pages/CeoVision';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heavy-equipment" element={<HeavyEquipment />} />
        <Route path="/support-solutions" element={<SupportSolutions />} />
        <Route path="/contracting" element={<Contracting />} />
        <Route path="/software-solutions" element={<SoftwareSolutions />} />
        <Route path="/ceo-vision" element={<CeoVision />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;