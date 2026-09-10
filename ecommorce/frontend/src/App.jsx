import { Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Home from './pages/Home/Home';
import BrandGuideline from './pages/BrandGuideline/BrandGuideline';
import CaseStudy from './pages/CaseStudy/CaseStudy';

/**
 * Three pages were converted from the Rumdoul mockups: the storefront
 * itself, its printable brand guideline, and a portfolio case study
 * about the build. `react-router-dom` was already a project dependency
 * (unused until now), so routing uses it rather than a hand-rolled
 * switch — real URLs instead of hash fragments.
 */
export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ShopProvider freeDeliveryOver={12}>
            <Home />
          </ShopProvider>
        }
      />
      <Route path="/brand-guideline" element={<BrandGuideline />} />
      <Route path="/case-study" element={<CaseStudy />} />
    </Routes>
  );
}
