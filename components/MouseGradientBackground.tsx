'use client';
import React, { useEffect, useState } from 'react';

const MouseGradientBackground = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const backgroundStyle = {
    background: `radial-gradient(600px at ${coords.x}px ${coords.y}px, rgba(29, 78, 216, 0.2), transparent 80%)`,
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none transition-all duration-200 ease-linear"
      style={backgroundStyle}
    />
  );
};

export default MouseGradientBackground;
