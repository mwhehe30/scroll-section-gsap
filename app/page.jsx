'use client';

import StickyCards from '@/components/StickyCards';
import TextScroll from '@/components/TextScroll';
import gsap from 'gsap';
import { ReactLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';
const Home = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <section className='intro'>
        <h1>The Foundation</h1>
      </section>
      <TextScroll />

      <StickyCards />

      <section className='outro'>
        <h1>The Future</h1>
      </section>
    </ReactLenis>
  );
};

export default Home;
