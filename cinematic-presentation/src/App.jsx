import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { NavigationOverlay } from './components/layout/NavigationOverlay';
import { ProblemSlide } from './slides/ProblemSlide';
import { SolutionSlide } from './slides/SolutionSlide';
import { ArchitectureSlide } from './slides/ArchitectureSlide';
import { ProductUISlide } from './slides/ProductUISlide';
import { ImpactSlide } from './slides/ImpactSlide';

const slides = [
  ProblemSlide,
  SolutionSlide,
  ArchitectureSlide,
  ProductUISlide,
  ImpactSlide,
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Basic touch swipe
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div 
      className="relative w-full h-screen overflow-hidden text-white"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="noise-overlay" />
      <div className="ambient-light-1" />
      <div className="ambient-light-2" />
      
      <AnimatePresence mode="wait">
        <CurrentSlideComponent key={currentSlide} />
      </AnimatePresence>

      <NavigationOverlay currentSlide={currentSlide} totalSlides={slides.length} />
    </div>
  );
}

export default App;
