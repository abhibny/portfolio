// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [tokyoTime, setTokyoTime] = useState('');

  useEffect(() => {
    // Update time immediately
    const updateTime = () => {
      const tokyoDate = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setTokyoTime(tokyoDate);
    };

    updateTime();

    // Update every minute
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const sections = [
    {
      title: 'Service / System Design',
      cards: [
        {
          id: 1,
          title: 'NHAI',
          description: 'Industry Collaboration Project',
          link: '/nhai',
          image: '/project-covers/nhaiprojectcard.png',
          span: 'col-span-7',
        },
        {
          id: 2,
          title: 'ERSS - 112',
          description: 'Fellowship Project',
          link: '/erss',
          image: '/project-covers/erssprojectcard.png',
          span: 'col-span-5',
        },
      ],
    },
    {
      title: 'VR | UX Research | Design System',
      cards: [
        {
          id: 3,
          title: 'DARK PATTERNS',
          description: 'Quantitative Analysis',
          link: '/darkpatt',
          image: '/project-covers/darkpattprojectcard.png',
          span: 'col-span-5',
        },
        {
          id: 4,
          title: 'Playo',
          description: 'Sports Community Platform',
          link: '/playo',
          image: '/project-covers/playoprojectcard.png',
          span: 'col-span-7',
        },
        {
          id: 5,
          title: 'VR',
          description: 'Experiential Explorations',
          link: '/vr',
          image: '/project-covers/vrprojectcard.png',
          span: 'col-span-7',
        },
        {
          id: 6,
          title: 'Interaction Design',
          description: 'Design Systems',
          link: '/dessys',
          image: '/project-covers/dessysprojectcard.png',
          span: 'col-span-5',
        },
      ],
    },
    {
      title: 'Data Visualisation | Multimodal Interactions',
      cards: [
        {
          id: 7,
          title: 'DATA VISUALIZATION',
          description: 'India',
          link: 'https://bukil.github.io/MAPA/',
          image: '/project-covers/datavisprojectcard.png',
          span: 'col-span-7',
          isExternal: true,
        },
        {
          id: 8,
          title: 'Interaction Techniques',
          description: 'Methods',
          link: '/techniques',
          image: '/project-covers/techniquesprojectcard.png',
          span: 'col-span-5',
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-12 text-xs md:text-sm text-gray-400">
          <span>Tokyo time {tokyoTime || 'loading...'}</span>
        </div>

        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">

          <div>
            <p className="text-2xl md:text-3xl font-light mb-16">
              Hi there, I&apos;m <span className="font-semibold">Abhishek</span>
            </p>

            <div>
              <p className="text-gray-400 text-sm mb-3">Socials</p>

              <div className="flex flex-col gap-2 text-sm">
                <a href="https://www.linkedin.com/in/abhibny/" className="hover:text-gray-600">LinkedIn</a>
                <a href="https://x.com/shawarmawomayo" className="hover:text-gray-600">Twitter</a>
                <a href="https://www.instagram.com/greeenpoints/" className="hover:text-gray-600">Instagram</a>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-8">
              Interaction Designer
              <br />
              <span className="text-gray-400">Artist & Creative</span>
            </h1>

            <div>
              <p className="text-gray-400 text-sm mb-3">Currently</p>
              <div className="space-y-1 text-sm">
                <p>IDC, IIT Bombay</p>
                <p>Tohoku University, Japan</p>
                <p>Interaction Design</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg md:text-2xl leading-snug">
              I design <span className="font-semibold">Art and Experiences</span>. I thrive at the intersection of Art and AI, working with interactive media, spatial storytelling, and user-centred solutions.
            </p>

            <p className="text-sm text-gray-400 mt-6">
              My passion lies in blending Art and GenAI, exploring the fine line between functionality and imagination.
            </p>

            <p className="text-sm text-gray-600 mt-4">
              Background in <span className="font-medium text-black">Architecture</span>
            </p>
          </div>

        </section>

        {/* GRID */}
        <section className="grid grid-cols-12 gap-6 md:gap-8">

          {/* Projects by Sections */}
          {sections.map((section) => (
            <div key={section.title} className="col-span-12">
              <h2 className="text-lg md:text-xl font-semibold mb-6 text-gray-700 uppercase tracking-wide">
                {section.title}
              </h2>
              <div className="grid grid-cols-12 gap-6 md:gap-8">
                {section.cards.map((project) => (
                  <div
                    key={project.id}
                    className={`${project.span} col-span-12 bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow`}
                  >
                    <div className="p-6 md:p-8">
                      <p className="text-xs text-gray-400 mb-2 font-medium">
                        Project
                      </p>

                      <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 text-sm">
                        {project.description}
                      </p>

                      <a 
                        href={project.link}
                        target={project.isExternal ? '_blank' : undefined}
                        rel={project.isExternal ? 'noopener noreferrer' : undefined}
                        className="inline-block mt-4 text-sm font-medium hover:opacity-70"
                      >
                        ↗
                      </a>
                    </div>

                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[280px] object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="col-span-12 md:col-span-7 bg-gray-50 rounded-2xl p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                Let&apos;s chat about Art, GenAI, or chai
              </h2>

              <p className="mt-4 text-gray-600">
                I&apos;d love to <span className="font-semibold">connect and explore</span> ideas together.
              </p>
            </div>

            <a href="mailto:abhishekbenny98@gmail.com" className="inline-block mt-8">
              <button className="bg-black text-white rounded-full px-8 py-3 w-full md:w-fit font-medium hover:bg-gray-800 transition-colors">
                Get in touch →
              </button>
            </a>
          </div>

        </section>

        {/* FOOTER */}
        <footer className="text-center text-gray-400 mt-16 md:mt-20 py-10 border-t border-gray-200 text-xs">
          <p>© 2026 Crafted by Abhishek</p>
          <p className="mt-2">
            <a href="mailto:abhishekbenny98@gmail.com" className="hover:text-gray-600">abhishekbenny98@gmail.com</a>
          </p>
          <p className="mt-4 font-semibold">
            <a href="https://www.linkedin.com/in/abhibny/" className="hover:text-gray-600">LinkedIn</a> • 
            <a href="https://www.instagram.com/greeenpoints/" className="hover:text-gray-600"> Instagram</a> • 
            <a href="https://x.com/shawarmawomayo" className="hover:text-gray-600"> Twitter</a>
          </p>
        </footer>

      </div>
    </main>
  );
}