import { useState } from 'react';
import Image from 'next/image';
import groupPhoto from '../../public/photos/lotus/P1102065.webp';
import seminarPhoto from '../../public/photos/lotus/P1102157.webp';

const photos = [
  { src: groupPhoto, alt: 'Group photo at Tohoku' },
  { src: seminarPhoto, alt: 'Seminar during the Tohoku fellowship' },
];

export default function FellowshipPhotos() {
  const [{ open, index }, setPreview] = useState({ open: false, index: 1 });
  const [position, setPosition] = useState(null);
  const positionPreview = (event) => {
    const bounds = event.currentTarget.parentElement.getBoundingClientRect();
    setPosition({ left: event.clientX - bounds.left, top: event.clientY - bounds.top });
  };
  const showPreview = () => setPreview((previous) => previous.open
    ? previous
    : { open: true, index: (previous.index + 1) % photos.length });
  const hidePreview = () => setPreview((previous) => ({ ...previous, open: false }));

  return (
    <div
      className="fellowship"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) hidePreview();
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') hidePreview();
      }}
    >
      <a
        href="https://www.jst.go.jp/program/india/en/outline/"
        target="_blank"
        rel="noopener noreferrer"
        aria-expanded={open}
        aria-controls="fellowship-photos"
        onMouseEnter={(event) => {
          positionPreview(event);
          showPreview();
        }}
        onMouseMove={positionPreview}
        onMouseLeave={hidePreview}
        onFocus={(event) => {
          if (event.currentTarget.matches(':focus-visible')) {
            setPosition(null);
            showPreview();
          }
        }}
      >
        <span>India - Japan Lotus Research Fellow</span>
        <span>Topic : AI In VR ( Files &amp; Data Reterval )</span>
      </a>
      <div id="fellowship-photos" className="photos" style={position || undefined} hidden={!open} role="region" aria-label="Photos from the Tohoku fellowship">
        <Image src={photos[index].src} alt={photos[index].alt} sizes="160px" />
      </div>
      <style jsx>{`
        .fellowship { position: relative; align-self: start; min-width: 0; }
        a {
          display: block;
          padding: 0;
          border: 0;
          background: transparent;
          color: inherit;
          font: inherit;
          text-align: left;
          cursor: pointer;
        }
        a span { display: block; }
        a:focus-visible { outline: 1px solid currentColor; outline-offset: 4px; }
        .photos {
          position: absolute;
          pointer-events: none;
          top: 100%;
          left: 0;
          z-index: 50;
          width: min(172px, 80vw);
          display: grid;
          padding: 0;
        }
        .photos[hidden] { display: none; }
        .photos :global(img) { display: block; width: 100%; height: auto; }
      `}</style>
    </div>
  );
}
