import { useMemo, useState } from 'react';
import Link from 'next/link';
import V5Root from '../../components/v5/V5Root';
import ThemeToggle from '../../components/v5/ThemeToggle';
import ProjectTile from '../../components/v5/ProjectTile';
import { projects, TAGS } from '../../data/v5-projects';

export default function V5Home() {
  const [tag, setTag] = useState('All');
  const [query, setQuery] = useState('');

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesTag = tag === 'All' || p.tag === tag;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q);
      return matchesTag && matchesQuery;
    });
  }, [tag, query]);

  const countFor = (t) =>
    t === 'All' ? projects.length : projects.filter((p) => p.tag === t).length;

  return (
    <V5Root title="Abhishek Benny — Art & Experiences">
      {({ theme, toggle }) => (
        <div className="v5-shell">
          <div className="flex flex-col md:flex-row">
            {/* ---------------- sidebar ---------------- */}
            <aside
              className="w-full md:w-[210px] shrink-0 flex flex-col justify-between p-4"
            >
              <div>
                <div className="flex items-baseline gap-1.5 px-1 mb-3.5">
                  <h1 className="v5-h">Work</h1>
                  <sup
                    className="text-[10px] font-medium"
                    style={{ color: 'var(--v5-accent)' }}
                  >
                    {projects.length}
                  </sup>
                </div>

                <input
                  className="v5-search mb-3"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                <nav className="flex flex-row gap-1 overflow-x-auto md:flex-col md:overflow-visible">
                  {TAGS.map((t) => (
                    <button
                      key={t}
                      className="v5-nav-item shrink-0"
                      data-active={t === tag}
                      onClick={() => setTag(t)}
                    >
                      <span>{t}</span>
                      <span className="v5-nav-count hidden md:inline">
                        {countFor(t)}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="hidden md:block mt-10 px-1">
                <p className="v5-title mb-1.5">Abhishek Benny</p>
                <p className="v5-body mb-3.5">
                  Designing art and experiences at the intersection of
                  interaction, space and AI.
                </p>
                <div className="flex items-center gap-1">
                  <Link href="/v5/about" className="v5-pill">
                    About
                  </Link>
                  <ThemeToggle theme={theme} toggle={toggle} />
                </div>
              </div>
            </aside>

            {/* ---------------- grid ---------------- */}
            <section className="flex-1 min-w-0 p-4 md:p-5">
              {visible.length === 0 ? (
                <p className="v5-body py-16 text-center">
                  Nothing matches “{query}”.
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7">
                  {visible.map((p) => (
                    <ProjectTile key={p.slug} project={p} />
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* mobile footer controls */}
          <div
            className="flex md:hidden items-center justify-between gap-2 p-4 border-t"
            style={{ borderColor: 'var(--v5-line)' }}
          >
            <p className="v5-body">Abhishek Benny</p>
            <div className="flex items-center gap-1">
              <Link href="/v5/about" className="v5-pill">
                About
              </Link>
              <ThemeToggle theme={theme} toggle={toggle} />
            </div>
          </div>
        </div>
      )}
    </V5Root>
  );
}
