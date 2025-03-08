"use client";

import { useEffect, useRef } from "react";

export default function HeroAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let points = [];
    let gridSize = 30;
    
    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      initGrid();
    };

    const initGrid = () => {
      points = [];
      
      // Create grid points
      const cols = Math.ceil(canvas.width / gridSize) + 2;
      const rows = Math.ceil(canvas.height / gridSize) + 2;
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          points.push({
            x: i * gridSize,
            y: j * gridSize,
            originX: i * gridSize,
            originY: j * gridSize,
            offsetX: 0,
            offsetY: 0,
            distortion: Math.random() * 0.3 + 0.1,
            brightness: Math.random() * 0.3 + 0.1
          });
        }
      }
    };

    const drawPoint = (point) => {
      // Apply subtle movement
      point.offsetX = Math.sin(point.y * 0.01 + performance.now() * 0.0005) * 2 * point.distortion;
      point.offsetY = Math.cos(point.x * 0.01 + performance.now() * 0.0005) * 2 * point.distortion;
      
      point.x = point.originX + point.offsetX;
      point.y = point.originY + point.offsetY;
      
      // Draw point
      ctx.beginPath();
      ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
      
      // Glow effect
      const pulse = (Math.sin(performance.now() * 0.001) + 1) * 0.5;
      const opacity = pulse * 0.3 * point.brightness + 0.1;
      
      ctx.fillStyle = 'rgba(100, 130, 255, ' + opacity + ')';
      ctx.fill();
    };

    const drawLines = () => {
      const cols = Math.ceil(canvas.width / gridSize) + 2;
      const rows = Math.ceil(canvas.height / gridSize) + 2;
      
      // Draw horizontal lines
      for (let i = 0; i < rows; i++) {
        ctx.beginPath();
        for (let j = 0; j < cols - 1; j++) {
          const idx = i * cols + j;
          const p1 = points[idx];
          const p2 = points[idx + 1];
          
          if (j === 0) {
            ctx.moveTo(p1.x, p1.y);
          } else {
            ctx.lineTo(p1.x, p1.y);
          }
          ctx.lineTo(p2.x, p2.y);
        }
        
        // Set line style
        const pulse = (Math.sin(i * 0.1 + performance.now() * 0.0005) + 1) * 0.5;
        const opacity = pulse * 0.15 + 0.02;
        ctx.strokeStyle = 'rgba(120, 150, 255, ' + opacity + ')';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      
      // Draw vertical lines
      for (let j = 0; j < cols; j++) {
        ctx.beginPath();
        for (let i = 0; i < rows - 1; i++) {
          const idx1 = i * cols + j;
          const idx2 = (i + 1) * cols + j;
          const p1 = points[idx1];
          const p2 = points[idx2];
          
          if (i === 0) {
            ctx.moveTo(p1.x, p1.y);
          } else {
            ctx.lineTo(p1.x, p1.y);
          }
          ctx.lineTo(p2.x, p2.y);
        }
        
        // Set line style
        const pulse = (Math.sin(j * 0.1 + performance.now() * 0.0005) + 1) * 0.5;
        const opacity = pulse * 0.15 + 0.02;
        ctx.strokeStyle = 'rgba(120, 150, 255, ' + opacity + ')';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    };

    const drawFocalPoints = () => {
      // Draw a few brighter focal points
      const time = performance.now() * 0.0001;
      const focalPoints = [
        {
          x: canvas.width * (0.6 + 0.2 * Math.sin(time * 0.5)),
          y: canvas.height * (0.4 + 0.2 * Math.cos(time * 0.7)),
          radius: 80 + 20 * Math.sin(time * 2),
          opacity: 0.05
        },
        {
          x: canvas.width * (0.3 + 0.1 * Math.sin(time * 0.6)),
          y: canvas.height * (0.6 + 0.1 * Math.cos(time * 0.8)),
          radius: 60 + 15 * Math.sin(time * 3),
          opacity: 0.03
        }
      ];
      
      focalPoints.forEach(point => {
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, point.radius
        );
        gradient.addColorStop(0, 'rgba(150, 120, 255, ' + point.opacity + ')');
        gradient.addColorStop(1, 'rgba(150, 120, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };

    const animate = () => {
      // Clear canvas with a very dark color
      ctx.fillStyle = 'rgba(10, 12, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines
      drawLines();
      
      // Draw points at intersections
      points.forEach(drawPoint);
      
      // Draw focal points
      drawFocalPoints();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
} 