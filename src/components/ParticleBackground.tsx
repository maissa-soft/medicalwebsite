"use client";

import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let width: number;
    let height: number;

    class Particle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      angle: number;
      distance: number;
      speed: number;
      size: number;
      color: string;
      opacity: number;

      constructor(w: number, h: number) {
        this.originX = w / 2;
        this.originY = h / 2;
        this.angle = Math.random() * Math.PI * 2;
        this.distance = Math.random() * (Math.max(w, h) * 0.6);
        this.x = this.originX + Math.cos(this.angle) * this.distance;
        this.y = this.originY + Math.sin(this.angle) * this.distance;
        this.speed = 0.001 + Math.random() * 0.002;
        this.size = Math.random() * 2.5 + 0.5;
        
        // AntiGravity colors: cyan-blue to magenta-pink
        const colors = ['#3b82f6', '#4f46e5', '#8b5cf6', '#d946ef', '#ec4899'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.6 + 0.2;
      }

      update() {
        this.angle += this.speed;
        // Subtle drift in distance
        this.distance += Math.sin(this.angle * 0.5) * 0.2;
        
        this.x = this.originX + Math.cos(this.angle) * this.distance;
        this.y = this.originY + Math.sin(this.angle) * this.distance;
      }

      draw() {
        if (!ctx) return;
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        
        // AntiGravity particles are slightly elongated or soft dots
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      
      particles = [];
      const count = 250; 
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.originX = width / 2;
        p.originY = height / 2;
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen"
    />
  );
};

export default ParticleBackground;
