import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SingleProgramView from './components/SingleProgramView/SingleProgramView';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import OrderSuccess from './components/OrderSuccess/OrderSuccess';
// @ts-ignore
import trainingProgramsData from './data/trainingProgram';
import type { TrainingProgram } from './types';

const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));
const TrainingPrograms = lazy(
  () => import('./components/TrainingPrograms/TrainingPrograms')
);
const NutritionPlan = lazy(
  () => import('./components/NutritionPlan/NutritionPlan')
);
const MuscleLadder = lazy(
  () => import('./components/MuscleLadder/MuscleLadder')
);
const Sponsors = lazy(() => import('./components/Sponsors/Sponsors'));
const Blog = lazy(() => import('./components/Blog/Blog'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const NotFound = () => <h2>Page not found</h2>;

const TITLES: Record<string, string> = {
  '/': 'L-Twins',
  '/about': 'L-Twins | About',
  '/training-programs': 'L-Twins | Training Programs',
  '/nutrition-plan': 'L-Twins | Nutrition Plan',
  '/muscle-ladder': 'L-Twins | The Muscle Ladder',
  '/sponsors': 'L-Twins | Sponsors',
  '/blog': 'L-Twins | Blog',
  '/contact': 'L-Twins | Contact',
  '/cart': 'L-Twins | Cart',
  '/checkout': 'L-Twins | Checkout',
  '/order-success': 'L-Twins | Order Complete',
};

export default function App() {
  const location = useLocation();
  const trainingPrograms: TrainingProgram[] = trainingProgramsData as TrainingProgram[];

  useEffect(() => {
    // Check if it's a single program view route
    const programMatch = location.pathname.match(/^\/singleProgramView\/(.+)$/);
    
    if (programMatch) {
      const programId = programMatch[1];
      const program = trainingPrograms.find(p => String(p.id) === String(programId));
      document.title = program ? `L-Twins | ${program.title}` : 'L-Twins | Program Not Found';
    } else {
      document.title = TITLES[location.pathname] || 'L-Twins | Not Found';
    }
  }, [location.pathname]);

  return (
    <Suspense fallback={<div>Loading…</div>}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="training-programs" element={<TrainingPrograms />} />
          <Route path="nutrition-plan" element={<NutritionPlan />} />
          <Route path="muscle-ladder" element={<MuscleLadder />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-success" element={<OrderSuccess />} />
          <Route path="singleProgramView/:id" element={<SingleProgramView />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
