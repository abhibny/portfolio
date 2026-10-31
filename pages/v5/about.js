import Link from 'next/link';
import V5Root from '../../components/v5/V5Root';
import ThemeToggle from '../../components/v5/ThemeToggle';

export default function V5About() {
  return (
    <V5Root title="About — Abhishek Benny">
      {({ theme, toggle }) => (
        <div className="v5-shell">
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
                <span style={{ color: 'var(--v5-text)' }}>About</span>
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
            <aside className="w-full md:w-[248px] shrink-0 p-5 md:p-6">
              <div className="md:sticky md:top-6">
                <div className="v5-avatar mb-3.5" />
                <p className="v5-title mb-0.5">Abhishek Benny</p>
                <p className="v5-label mb-3.5">अभिषेक बेन्नी · he/him</p>
                <p className="v5-body">
                  Artist and designer working at the intersection of art and AI —
                  interactive media, spatial storytelling and user-centred
                  systems. Interaction Design at IDC, IIT Bombay, with a
                  background in architecture.
                </p>
                <div className="v5-divider my-5" />
                <div className="flex flex-col gap-1.5">
                  {[
                    ['LinkedIn', 'https://www.linkedin.com/in/abhibny/'],
                    ['Instagram', 'https://www.instagram.com/greeenpoints/'],
                    ['Twitter', 'https://x.com/shawarmawomayo'],
                    ['Email', 'mailto:abhishekbenny98@gmail.com'],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      className="v5-body w-fit"
                      style={{ color: 'var(--v5-text)' }}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            <main
              className="flex-1 min-w-0 p-5 md:p-6 md:border-l"
              style={{ borderColor: 'var(--v5-line)' }}
            >
              <section>
                <p className="v5-label mb-1">Currently</p>
                <h2 className="v5-h mb-4">
                  Interactive Content Design Lab, Tohoku University
                </h2>
                <p className="v5-body mb-3">
                  Student Exchange Researcher and Designer in the ICD Lab
                  (インタラクティブコンテンツ) under Prof. Yoshifumi Kitamura
                  (北村 喜文), as an India–Japan Lotus Research Fellow.
                </p>
                <p className="v5-body">
                  Research topic: AI in VR — file and data retrieval in spatial
                  interfaces.
                </p>
              </section>

              <section className="mt-12">
                <p className="v5-label mb-1">Previously</p>
                <h2 className="v5-h mb-4">IDC School of Design, IIT Bombay</h2>
                <p className="v5-body">
                  Master&apos;s in Interaction Design, following a bachelor&apos;s in
                  architecture. Work across service design, UX research, design
                  systems and spatial computing.
                </p>
              </section>

              <section className="mt-12">
                <p className="v5-label mb-1">Elsewhere</p>
                <h2 className="v5-h mb-4">Say hello</h2>
                <p className="v5-body">
                  If you&apos;d like to chat about art, GenAI, or chai —{' '}
                  <a className="v5-link" href="mailto:abhishekbenny98@gmail.com">
                    connect
                  </a>
                  .
                </p>
              </section>
            </main>
          </div>
        </div>
      )}
    </V5Root>
  );
}
