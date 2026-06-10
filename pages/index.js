import ProjectCard from '../components/home/ProjectCard';
import React from 'react';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import DessysCover from '../public/project-covers/dessysprojectcard.png';
import ERSSCover from '../public/project-covers/erssprojectcard.png';
import NHAICover from '../public/project-covers/nhaiprojectcard.png';
import DarkpattCover from '../public/project-covers/darkpattprojectcard.png';
import TechniquesCover from '../public/project-covers/techniquesprojectcard.png';
import VRImage from '../public/project-covers/vrprojectcard.png';
import DatavisCover from '../public/project-covers/datavisprojectcard.png';
import PlayoCover from '../public/project-covers/playoprojectcard.png';

const gapValue = 'gap-6';

// File: pages/extra.js
// Purpose: Render a page that mirrors the homepage but with a 3-column
// layout specific to the `/extra` route. The page is data-driven: each
// section in `sections` contains metadata (title + cards) and the
// rendering logic maps cards into columns based on an optional
// `column` property on each card.
//
// High-level structure:
// - imports: UI components and static assets
// - `sections` array: defines section titles and project cards
// - main JSX: renders an about block, then for each section renders
//   the section header, a divider, and a grid where cards are
//   distributed into `totalColumns` columns.

export default function Extra() {
  // `sections` is an array of objects. Each object represents a group
  // of project cards rendered under a single header. Cards may include
  // an optional `column` number (1-based) to request placement in a
  // specific column. If multiple cards request the same column they
  // will be stacked; cards without a `column` are distributed
  // round-robin into the remaining slots.
  const sections = [
    {
  title: 'Service / System Design',
      cards: [
        {
          title: 'NHAI',
          description: 'Industry Collaboration Project',
          link: '/nhai',
          content: NHAICover,
          column: 3,
        },
        {
          title: 'ERSS - 112',
          description: 'Fellowship Project',
          link: '/erss',
          content: ERSSCover,
          column: 2,
        },
      ],
    },
    {
  title: 'VR | UX Research | Design System',
      cards: [
        {
          title: 'DARK PATTERNS',
          description: 'Quantitative Analysis',
          link: '/darkpatt',
          content: DarkpattCover,
          column: 2,
        },
        {
          title: 'Playo',
          description: 'Sports Community Platform',
          link: '/playo',
          content: PlayoCover,
          column: 3,
        },
        {
          title: 'VR',
          description: 'Experiential Explorations',
          link: '/vr',
          content: VRImage,
          column: 3,
        },
        {
          title: 'Interaction Design',
          description: 'Design Systems',
          link: '/dessys',
          content: DessysCover,
          column: 2,
        },
      ],
    },
    {
  title: 'Data VIsualisation | Multimodal Interactions',
      cards: [
        {
          title: 'DATA VISUALIZATION',
          description: 'India',
          link: 'https://bukil.github.io/MAPA/',
          isExternal: true,
          content: DatavisCover,
          column: 4,
        },
        {
          title: 'Interaction Techniques',
          description: 'Methods',
          link: '/techniques',
          content: TechniquesCover,
          column: 2,
        },
      ],
    },
  ];

  return (
    <main>
      <GridContainer>
        {/* ABOUT SECTION */}

        <br></br>
        <br></br>
        
  <section className="mt-6 mb-2 grid-layout">
          {/* LEFT COLUMN - ABOUT */}
          <div className="flex flex-col col-start-1 col-end-13 gap-3 md:col-end-7">
            <p
              className={`col-start-1 col-end-13 mb-4 text-zinc-300 body font-normal z-1000 md:col-start-1 md:col-span-5 md:mb-0`}
            >
              I’m Abhishek (he/him), and I design Art and Experiences. I thrive at the
              intersection of Art and AI, working with interactive media, spatial
              storytelling, and user-centred solutions. Currently, I’m pursuing
              Interaction Design at{' '}
              <TextLink link="https://www.idc.iitb.ac.in/">IDC, IIT Bombay</TextLink>
              {', '}with a background in Architecture. My passion lies in blending Art and
              GenAI, exploring the fine line between functionality and imagination.
              If you’d like to chat about Art, GenAI, or chai, I’d love to{' '}
              <TextLink link="mailto:abhishekbenny98@gmail.com">connect</TextLink>.
            </p>
          </div>
          {/* RIGHT COLUMN - CURRENTLY AT */}
          <div className="col-start-1 col-end-13 md:col-start-7 md:col-end-13">
            <div className="bg-zinc-900 p-8 border border-zinc-700">
              <p className="text-white uppercase block mb-6 text-base font-semibold tracking-wide">Currently At</p>
              <div className="grid grid-cols-2 gap-8">
                {/* Left Column - Lab Info */}
                <div className="text-zinc-300 body font-normal space-y-3">
                  <span className="block mb-4 text-yellow-300"><TextLink link="https://www.idc.riec.tohoku.ac.jp/en/">Interactive Content Design Lab</TextLink></span>
                  <span className="block text-sm mb-4">インタラクティブコンテンツ</span>
                  <span className="block mb-2">Under : Prof. Yoshifumi KITAMURA</span>
                  <span className="block text-sm">北村 喜文</span>
                </div>
                {/* Right Column - Role Info */}
                <div className="text-zinc-300 body font-normal space-y-3">
                  <span className="block">As Student Exchange Researcher/ Designer In ICD Lab, Tohoku University Japan</span>
                  <span className="block"><TextLink link="https://www.jst.go.jp/program/india/en/outline/">India - Japan Lotus Research Fellow</TextLink></span>
                  <span className="block">Topic : AI In VR ( Files & Data Retrieval )</span>
                </div>
              </div>
            </div>
          </div>

          <br></br>
          <br></br>

        </section>

        {sections.map((section, sectionIndex) => (
          <React.Fragment key={section.title}>
            <section
              className={`grid-layout ${sectionIndex === 0 ? 'mt-0' : 'mt-10'} mb-1`}
            >
              <p className="col-start-1 col-end-13 text-yellow-300 uppercase body md:col-start-1 md:col-span-5">
                {section.title}
              </p>
            </section>
            <section className="grid-layout mt-1 mb-4">
              <div className="col-start-1 col-end-13 h-px bg-white/20" />
            </section>
            {/*
              Grid rendering and allocation logic:
              - The wrapper div creates a grid with `md:grid-cols-3`.
              - We use an IIFE to build `columns`, an array where each
              element is an array of cards that should appear in that
              column (allowing stacking multiple cards per column).
              - Algorithm steps:
                1. Initialize `columns` as an array of `totalColumns` empty arrays.
                2. Iterate `section.cards`. If a card has a `column` property
                   (1-based), clamp it into [0..totalColumns-1] and push
                   the card into that `columns[columnIndex]` array.
                3. Collect cards without a `column` into `remainingCards`.
                4. Distribute `remainingCards` round-robin across columns
                   (index % totalColumns) so unplaced cards are balanced.
                5. Map `columns` to JSX: for each column produce a wrapper
                   div and render all its `ProjectCard` entries stacked.
              - This approach keeps placement predictable and lets multiple
                cards share a single column (stacked vertically).
            */}
            <div className="grid relative z-10 col-start-1 col-end-13 md:grid-cols-3 grid-gap">
              {(() => {
                const totalColumns = 3;
                // `columns` holds arrays of cards per column (allows stacking)
                const columns = Array.from({ length: totalColumns }, () => []);
                const remainingCards = [];

                // First pass: honor explicit `column` requests
                section.cards.forEach((card) => {
                  if (card.column) {
                    // Convert 1-based column to 0-based index and clamp
                    const columnIndex = Math.min(
                      totalColumns - 1,
                      Math.max(0, card.column - 1)
                    );

                    columns[columnIndex].push(card);
                    return;
                  }

                  // Collect cards that didn't request a specific column
                  remainingCards.push(card);
                });

                // Second pass: distribute remaining cards round-robin
                remainingCards.forEach((card, index) => {
                  const columnIndex = index % totalColumns;
                  columns[columnIndex].push(card);
                });

                // Render columns: each column is a vertical stack of ProjectCard
                return columns.map((columnCards, columnIndex) => {
                  const key = `${section.title}-column-${columnIndex}`;

                  if (!columnCards.length) {
                    // Keep grid structure even if a column is empty
                    return (
                      <div key={key} className={`${gapValue} flex flex-col`} />
                    );
                  }

                  return (
                    <div key={key} className={`${gapValue} flex flex-col`}>
                      {columnCards.map((columnCard, cardIndex) => {
                        // Remove `column` from props before passing to ProjectCard
                        const { column, ...cardProps } = columnCard;
                        const cardKey = `${key}-${cardProps.link || cardProps.title || cardIndex}`;

                        return (
                          <div key={cardKey} className="extra-card-wrapper">
                            <ProjectCard {...cardProps} />
                          </div>
                        );
                      })}
                    </div>
                  );
                });
              })()}
            </div>
          </React.Fragment>
        ))}
      </GridContainer>
      <style jsx>{`
        .extra-card-wrapper {
          position: relative;
        }

        .extra-card-wrapper :global(.group) {
          display: block;
          padding: 18px;
          border: 3px solid rgba(255, 255, 255, 0);
          background-color: #000;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }

        .extra-card-wrapper :global(.group:hover) {
          border-color: rgba(246, 228, 82, 0.95);
          box-shadow: 0 0 16px 2px rgba(246, 228, 82, 0.35);
          transform: translateY(-3px);
          background-image: none;
          background-color: #000;
        }

        .extra-card-wrapper :global(.game-border) {
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}

function WorkExperience(props) {
  return (
    <>
      <h1 className="col-span-2 col-start-1 col-end-3 text-white body">
        {props.title}
        <br />
        {props.date}
      </h1>
      <p className="col-span-4 col-start-3 text-white body">{props.children}</p>
    </>
  );
}
