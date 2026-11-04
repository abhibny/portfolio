import React from 'react';
import { motion } from 'framer-motion';
import GridContainer from '../components/GridContainer';
import TextLink from '../components/TextLink';
import ProjectCard from '../components/home/ProjectCard';
import { getProject } from '../data/v5-projects';
import BookwormCover from '../public/project-covers/bookworm.jpg';
import NeydhalCover from '../public/project-covers/neydhal.jpg';
import NewsartCover from '../public/project-covers/newsart.jpg';
import VelammalCover from '../public/project-covers/velammal.jpg';

const covers = { bookworm: BookwormCover, neydhal: NeydhalCover, newsart: NewsartCover, velammal: VelammalCover };

const artProjects = ['bookworm', 'neydhal', 'newsart', '2140', 'velammal'].map(getProject);
export default function Art() {
  return (
    <motion.main>
      <GridContainer>
        <section className="art-content-width art-intro" aria-label="About the art collection">
          <div>
            <h1 className="h1">Art</h1>
          </div>
          <p className="body font-normal text-zinc-300">
          A running archive of personal work — image, form and material.
          Explore the projects below or see more on{' '}
          <TextLink link="https://www.instagram.com/greeenpoints/">
            Instagram
          </TextLink>
          .
        </p>
        </section>
        <section className="art-content-width project-collection" aria-label="Art and playground projects">
          {[0, 1].map((column) => (
            <div key={column} className="project-column">
              {artProjects.filter((_, index) => index % 2 === column).map((project) => (
                <div key={project.slug} className="project-tile" style={{ order: artProjects.indexOf(project) }}>
                  <ProjectCard
                    title={project.title}
                    description={project.kicker}
                    link={project.href}
                    content={project.slug === '2140' ? '/work/2140/city.mp4' : covers[project.slug]}
                    isVideo={project.slug === '2140'}
                    detailed
                  />
                </div>
              ))}
            </div>
          ))}
        </section>
      </GridContainer>
      <style jsx>{`
        .art-intro p { color: #000; }
        .art-content-width {
          grid-column: 1 / -1;
          width: 56.448412vw;
          margin-left: auto;
          margin-right: auto;
        }
        .art-intro {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 32px;
        }
        .project-collection {
          margin: 24px auto 24px;
          padding: 1.679361vw 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: start;
          column-gap: 1.143762vw;
          border-top: 1px solid rgba(0, 0, 0, 0.2);
          background: #fff;
        }
        .project-column {
          display: flex;
          flex-direction: column;
          gap: 2.552219vw;
          min-width: 0;
        }
        .project-tile { container-type: inline-size; min-width: 0; }
        .project-tile :global(.group) { display: block; }
        .project-tile :global(a:focus-visible) { outline: 2px solid #f6e452; outline-offset: 6px; }
        @media (max-width: 767px) {
          .art-content-width { width: 100%; max-width: 440px; }
          .art-intro { margin-top: 24px; gap: 12px; }
          .project-column { display: contents; }
          .project-collection {
            grid-template-columns: minmax(0, 1fr);
            margin: 24px auto 24px;
            padding: 16px 0;
            gap: 28px;
          }
        }
      `}</style>
    </motion.main>
  );
}
