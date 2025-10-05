'use client';

import '@/css/StickyCards.css';
import { sections } from '@/data';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

// 🔑 wajib register plugin sebelum dipakai
gsap.registerPlugin(ScrollTrigger);

const StickyCards = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const stickyCards = document.querySelectorAll('.sticky-card');

      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            endTrigger: stickyCards[stickyCards.length - 1],
            end: 'top top',
            pin: true,
            pinSpacing: false,
          });
        }

        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: 'top bottom',
            end: 'top top',
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = 1 - progress * 0.25;
              const rotation = (index % 2 === 0 ? 5 : -5) * progress;
              const afterOpacity = progress;

              gsap.set(card, {
                scale,
                rotation,
                '--after-opacity': afterOpacity,
              });
            },
          });
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <div className='sticky-cards' ref={containerRef}>
      {sections.map(({ index, title, description, image }) => (
        <div key={index} className='sticky-card'>
          <div className='sticky-card-index'>
            <h1>{index}</h1>
          </div>

          <div className='sticky-card-content'>
            <div className='sticky-card-content-wrapper'>
              <h1 className='sticky-card-header'>{title}</h1>

              <div className='sticky-card-image'>
                <img src={image} alt={title} />
              </div>

              <div className='sticky-card-copy'>
                <div className='sticky-card-label'>
                  <p>(About the state)</p>
                </div>

                <div className='sticky-card-description'>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyCards;
