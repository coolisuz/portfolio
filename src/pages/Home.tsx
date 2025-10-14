import { lazy, Suspense } from 'react';
import { Hero } from '../components/Hero';
import { Philosophy } from '../components/Principles';

const Skills = lazy(() => import('../components/Skills').then(m => ({ default: m.Skills })));
const Experience = lazy(() => import('../components/Experience').then(m => ({ default: m.Experience })));

const LoadingSection = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-12 h-12 border-4 border-github-accent-emphasis border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export const Home = () => {
  return (
    <>
      <Hero />
      <Philosophy />
      <Suspense fallback={<LoadingSection />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Experience />
      </Suspense>
    </>
  );
};
