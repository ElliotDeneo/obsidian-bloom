import { useEffect, useRef, useCallback, useState } from 'react';

const CursorEffect = () => {
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const smoothRef = useRef({ x: 0.5, y: 0.5 });
  const glowRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number>(0);
  const [hasMoved, setHasMoved] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    };
    glowRef.current = { x: e.clientX, y: e.clientY };
    if (!hasMoved) setHasMoved(true);
  }, [hasMoved]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    const getParallaxElements = () =>
      document.querySelectorAll<HTMLElement>('.gallery-item img, [data-parallax]');

    const glowEl = document.getElementById('cursor-glow');
    const smoothGlow = { x: -200, y: -200 };

    const tick = () => {
      smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.06;
      smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.06;

      const offsetX = (smoothRef.current.x - 0.5) * 2;
      const offsetY = (smoothRef.current.y - 0.5) * 2;

      getParallaxElements().forEach((el) => {
        const depth = parseFloat(el.dataset.parallaxDepth || '0.6');
        el.style.transform = `translate(${offsetX * depth * 8}px, ${offsetY * depth * 5}px) scale(1.04)`;
      });

      // Heavy smoothing on glow position — more fluid lag
      smoothGlow.x += (glowRef.current.x - smoothGlow.x) * 0.025;
      smoothGlow.y += (glowRef.current.y - smoothGlow.y) * 0.025;

      if (glowEl) {
        glowEl.style.transform = `translate(${smoothGlow.x}px, ${smoothGlow.y}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
      getParallaxElements().forEach((el) => {
        el.style.transform = '';
      });
    };
  }, [handleMouseMove]);

  return (
    <div
      id="cursor-glow"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: -175,
        left: -175,
        width: 350,
        height: 350,
        borderRadius: '50%',
        background: 'radial-gradient(circle, hsla(0, 0%, 75%, 0.12) 0%, hsla(0, 0%, 60%, 0.055) 40%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 9998,
        willChange: 'transform',
        filter: 'blur(35px)',
        opacity: hasMoved ? 1 : 0,
        transition: 'opacity 1.5s ease',
      }}
    />
  );
};

export default CursorEffect;
