import ProjectCard from '../components/home/ProjectCard';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import { projects as projectMetadata } from '../data/v5-projects';
import DessysCover from '../public/project-covers/dessysprojectcard.png';
import ERSSCover from '../public/project-covers/erssprojectcard.png';
import NHAICover from '../public/project-covers/nhaiprojectcard.png';
import DarkpattCover from '../public/project-covers/darkpattprojectcard.png';
import TechniquesCover from '../public/project-covers/techniquesprojectcard.png';
import VRImage from '../public/project-covers/vrprojectcard.png';
import DatavisCover from '../public/project-covers/datavisprojectcard.png';
import PlayoCover from '../public/project-covers/playoprojectcard.png';

// One continuous project collection, ordered across the two-column grid.
const projects = [
  { title: 'ERSS - 112', description: 'Fellowship Project', link: '/erss', content: ERSSCover },
  { title: 'NHAI', description: 'Industry Collaboration Project', link: '/nhai', content: NHAICover },
  { title: 'DARK PATTERNS', description: 'Quantitative Analysis', link: '/darkpatt', content: DarkpattCover },
  { title: 'Playo', description: 'Sports Community Platform', link: '/playo', content: PlayoCover },
  { title: 'Interaction Design', description: 'Design Systems', link: '/dessys', content: DessysCover },
  { title: 'VR', description: 'Experiential Explorations', link: '/vr', content: VRImage },
  { title: 'Interaction Techniques', description: 'Methods', link: '/techniques', content: TechniquesCover },
  { title: 'DATA VISUALIZATION', description: 'India', link: 'https://bukil.github.io/MAPA/', isExternal: true, content: DatavisCover },
];

export default function Home() {
  return (
    <main>
      <GridContainer>
        <section className="home-content-width home-intro" aria-label="About and current role">
          <div>
            <p
              className="text-zinc-300 body font-normal"
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
          <div>
            <div className="bg-zinc-900 p-8 border border-zinc-700">
              <p className="text-white uppercase block mb-6 text-base font-semibold tracking-wide">Currently At</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

        </section>

        <section className="home-content-width project-collection" aria-label="Projects">
          {[0, 1].map((column) => (
            <div key={column} className="project-column">
              {projects.filter((_, index) => index % 2 === column).map((project) => {
                const metadata = projectMetadata.find((item) => project.link === `/${item.slug}` || project.link === item.href);
                return (
                  <div key={project.link} className="project-tile" style={{ order: projects.indexOf(project) }}>
                    <ProjectCard
                      {...project}
                      detailed
                      tags={metadata ? [metadata.year, ...metadata.role] : []}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </section>
      </GridContainer>
      <style jsx>{`
        .home-content-width {
          grid-column: 1 / -1;
          width: 56.448412vw;
          margin-left: auto;
          margin-right: auto;
        }

        .home-intro {
          display: flex;
          flex-direction: column;
          gap: 48px;
          margin-top: 48px;
        }

        .project-collection {
          /* 01A: 1182.594px collection in a 2095px frame, centered.
             Use viewport ratios so tiles and black margins scale together. */
          margin: 64px auto 24px;
          padding: 1.679361vw 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: start;
          column-gap: 1.143762vw;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          background: #000;
        }

        .project-column {
          display: flex;
          flex-direction: column;
          gap: 2.552219vw;
          min-width: 0;
        }

        .project-tile {
          container-type: inline-size;
          min-width: 0;
        }

        .project-tile :global(.caption) {
          font-size: clamp(10px, 0.906921vw, 19px);
          letter-spacing: 0;
        }

        .project-tile :global(.mt-3) {
          margin-top: 0.716181vw;
        }

        .project-tile :global(.group) {
          display: block;
        }

        .project-tile :global(a:focus-visible) {
          outline: 2px solid #f6e452;
          outline-offset: 6px;
        }

        @media (max-width: 767px) {
          .home-content-width {
            width: 100%;
            max-width: 440px;
          }

          .home-intro {
            margin-top: 32px;
            gap: 36px;
          }

          .project-column {
            display: contents;
          }

          .project-tile :global(.caption) {
            font-size: 12px;
          }

          .project-tile :global(.mt-3) {
            margin-top: 10px;
          }

          .project-collection {
            grid-template-columns: minmax(0, 1fr);
            margin: 32px auto 24px;
            padding: 16px 0;
            gap: 28px;
          }
        }
      `}</style>
    </main>
  );
}
