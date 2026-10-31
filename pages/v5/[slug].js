import Image from 'next/image';
import Link from 'next/link';
import V5Root from '../../components/v5/V5Root';
import ThemeToggle from '../../components/v5/ThemeToggle';
import { projects, getProject } from '../../data/v5-projects';

export async function getStaticPaths() {
  return {
    paths: projects
      .filter((p) => !p.isExternal && !p.href)
      .map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { project: getProject(params.slug) } };
}

// Project page — reference image 2: sticky bio rail on the left,
// dated content feed on the right.
export default function V5Project({ project }) {
  return (
    <V5Root title={`${project.title} — Abhishek Benny`}>
      {({ theme, toggle }) => (
        <div className="v5-shell">
          {/* ---------------- header bar ---------------- */}
          <header
            className="flex items-center justify-between gap-3 px-4 py-3 border-b"
            style={{ borderColor: 'var(--v5-line)' }}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span
                className="w-[22px] h-[22px] rounded-full shrink-0"
                style={{ background: 'var(--v5-invert-bg)' }}
              />
              <p className="v5-label truncate">
                <Link href="/v5" className="hover:opacity-70">
                  ∷ Work
                </Link>
                <span className="mx-1.5">/</span>
                <span style={{ color: 'var(--v5-text)' }}>{project.title}</span>
              </p>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <ThemeToggle theme={theme} toggle={toggle} />
              <a
                className="v5-ghost hidden sm:inline-flex"
                href="/abhishek-benny-resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume ↗
              </a>
              <a className="v5-pill" href="mailto:abhishekbenny98@gmail.com">
                Get in touch
              </a>
            </div>
          </header>

          <div className="flex flex-col md:flex-row">
            {/* ---------------- sticky rail ---------------- */}
            <aside className="w-full md:w-[248px] shrink-0 p-5 md:p-6">
              <div className="md:sticky md:top-6">
                <div className="v5-avatar mb-3.5" />
                <p className="v5-title mb-0.5">{project.title}</p>
                <p className="v5-label mb-3.5">{project.kicker}</p>
                <p className="v5-body mb-5">{project.intro}</p>

                <dl className="flex flex-col gap-3">
                  <Meta label="Role" values={project.role} />
                  <Meta label="With" values={project.collaborators} />
                  <Meta label="Duration" values={[project.duration]} />
                  {project.tools && <Meta label="Tools" values={project.tools} />}
                  <Meta label="Year" values={[project.year]} />
                </dl>

                <Link href="/v5" className="v5-ghost mt-5 -ml-2.5">
                  ← All work
                </Link>
              </div>
            </aside>

            {/* ---------------- feed ---------------- */}
            <main
              className="flex-1 min-w-0 p-5 md:p-6 md:border-l"
              style={{ borderColor: 'var(--v5-line)' }}
            >
              {project.feed.length === 0 ? (
                <p className="v5-body">Case study coming soon.</p>
              ) : (
                project.feed.map((entry, i) => (
                  <section key={entry.title} className={i === 0 ? '' : 'mt-12'}>
                    <p className="v5-label mb-1">{entry.date}</p>
                    <h2 className="v5-h mb-4">{entry.title}</h2>
                    <div className="flex flex-col gap-3">
                      {entry.images.map((src) => (
                        <figure key={src} className="v5-feed-figure">
                          <Image
                            src={src}
                            alt={`${project.title} — ${entry.title}`}
                            width={1280}
                            height={720}
                            className="block w-full h-auto"
                          />
                        </figure>
                      ))}
                    </div>
                  </section>
                ))
              )}
            </main>
          </div>
        </div>
      )}
    </V5Root>
  );
}

function Meta({ label, values }) {
  return (
    <div>
      <dt className="v5-label mb-0.5">{label}</dt>
      {values.filter(Boolean).map((v) => (
        <dd key={v} className="v5-body" style={{ color: 'var(--v5-text)' }}>
          {v}
        </dd>
      ))}
    </div>
  );
}
