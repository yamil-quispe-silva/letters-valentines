'use client';

import { useState, useEffect } from 'react';

const IMAGES = [
  '/images/bg1.png',
  '/images/bg2.png',
  '/images/bg3.png',
  '/images/bg4.png',
  '/images/bg5.jpg',
];

export default function BackgroundSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slideshow">
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className="bg-slide"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}
      <div className="bg-overlay" />
    </div>
  );
}
