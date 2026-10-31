import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GridContainer from '../components/GridContainer';
import ProjectTitle from '../components/projects/ProjectTitle';

const NAV_ITEMS = [
  { id: 'overview',              label: 'Overview',                svgs: [1] },
  { id: 'context',               label: 'Context',                 svgs: [2] },
  { id: 'research',              label: 'Research',                svgs: [3, 4] },
  { id: 'solution',              label: 'Solution',                svgs: [5, 6] },
  { id: 'core-flows',            label: 'Core Flows',              svgs: [7, 8, 9] },
  { id: 'design-decisions',      label: 'Design Decisions',        svgs: [10, 11, 12] },
  { id: 'prototyping',           label: 'Prototyping & Testing',   svgs: [13, 14] },
  { id: 'hardware-constraints',  label: 'Hardware Constraints',    svgs: [15, 16] },
  { id: 'reflection',            label: 'Reflection',              svgs: [17] },
];

export default function ERSS() {
  const [active, setActive] = useState('overview');
  const [hoveredNav, setHoveredNav] = useState(null);
  const observerRef = useRef(null);
  const touchTimeoutRef = useRef(null);

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach((s) => observerRef.current.observe(s));
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.main className="min-h-[70vh] pt-6 md:pt-8">
      <GridContainer className="gap-y-12">
        {/* Left sticky column: title + vertically centered nav */}
        <div className="col-span-full md:col-end-4 md:sticky md:top-0 md:h-screen md:self-start text-zinc-100 relative">
          {/* Heading in previous top position */}
          <div className="pt-2 md:pt-[5em]">
            <h1 className="mb-1 h1">ERSS | NG 112</h1>
            <p className="caption normal-case text-zinc-500">Fellowship Project</p>
          </div>

          {/* Sidebar nav: bare floating dots on mobile, vertically centered text list on desktop */}
          <div className="fixed left-3 sm:left-5 top-1/2 -translate-y-1/2 z-40 md:left-0 md:z-auto md:absolute md:top-1/2 md:-translate-y-1/2">
            <nav className="flex flex-col gap-2.5 md:gap-[0.15rem]">
              {NAV_ITEMS.map(({ id, label }) => {
                const isActive = active === id;
                const isHovered = hoveredNav === id;
                return (
                  <button
                    key={id}
                    onClick={(e) => {
                      e.currentTarget.blur();
                      setHoveredNav(null);
                      scrollTo(id);
                    }}
                    onMouseEnter={() => setHoveredNav(id)}
                    onMouseLeave={() => setHoveredNav(null)}
                    onTouchStart={() => {
                      if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
                      setHoveredNav(id);
                    }}
                    onTouchEnd={() => {
                      touchTimeoutRef.current = setTimeout(() => {
                        setHoveredNav(null);
                      }, 750);
                    }}
                    onBlur={() => setHoveredNav(null)}
                    aria-label={label}
                    className="group relative flex items-center justify-center w-6 h-6 -ml-1 bg-transparent border-none cursor-pointer text-left outline-none md:w-auto md:h-auto md:ml-0 md:justify-start md:gap-[0.45rem] md:py-[0.08rem] md:px-0"
                  >
                    {/* Dot / bullet */}
                    <span
                      className={`block flex-shrink-0 transition-all duration-200 ${
                        isActive
                          ? 'w-2.5 h-2.5 rounded-full bg-[#8E47DF] shadow-[0_0_8px_rgba(142,71,223,0.7)] md:scale-100 md:rounded-none md:w-[0.35rem] md:h-[0.35rem] md:shadow-none'
                          : `${isHovered ? 'bg-zinc-200 scale-125' : 'bg-zinc-600'} w-1.5 h-1.5 rounded-full group-hover:bg-zinc-200 group-hover:scale-125 md:bg-transparent md:group-hover:bg-transparent md:group-hover:scale-100 md:rounded-none md:w-[0.35rem] md:h-[0.35rem]`
                      }`}
                    />

                    {/* Section label (hover tooltip on mobile, inline text on desktop) */}
                    <span
                      className={`
                        absolute left-7 px-2.5 py-1 rounded-md bg-zinc-900/95 border border-zinc-700/80 text-[11px] text-zinc-100 whitespace-nowrap shadow-xl
                        transition-all duration-150
                        ${isHovered ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-2 pointer-events-none'}
                        md:static md:left-auto md:px-0 md:py-0 md:rounded-none md:bg-transparent md:border-none md:shadow-none md:opacity-100 md:translate-x-0 md:pointer-events-auto
                        md:text-[0.8rem] md:leading-[1.3]
                        ${isActive ? 'md:text-white md:font-medium' : 'md:text-zinc-500 md:font-normal'}
                      `}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Right content column */}
        <div className="col-span-full md:col-span-9 md:col-start-4 space-y-0">
          <div className="space-y-0">
            {NAV_ITEMS.map(({ id, svgs }) =>
              svgs.map((n, i) => (
                <div key={`erss${n}`} id={i === 0 ? id : undefined} className={i === 0 ? 'scroll-mt-16 md:scroll-mt-20' : undefined}>
                  <Image
                    src={`/work/erss/erss${n}.svg`}
                    alt={`ERSS section ${n}`}
                    width={1280}
                    height={720}
                    className="block w-full h-auto"
                    priority={n === 1}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </GridContainer>
    </motion.main>
  );
}
