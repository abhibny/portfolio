import Image from 'next/image';
import Link from 'next/link';

// Card in the /v5 grid: category label + centred thumbnail on a soft tile,
// title and description underneath. Mirrors reference image 1.
export default function ProjectTile({ project }) {
  const href = project.isExternal
    ? project.href
    : project.href || `/v5/${project.slug}`;

  return (
    <Link
      href={href}
      target={project.isExternal ? '_blank' : undefined}
      rel={project.isExternal ? 'noreferrer' : undefined}
      className="v5-tile-card block group"
    >
      <div className="v5-tile">
        <div className="px-4 pt-3.5">
          <span className="v5-label">{project.tag}</span>
        </div>
        <div className="v5-tile-media">
          <div className="v5-tile-thumb">
            <Image
              src={project.cover}
              alt={project.title}
              width={640}
              height={800}
              className="block w-full h-auto"
            />
          </div>
          <span className="v5-open">Open</span>
        </div>
      </div>
      <div className="px-1 pt-3 pb-1">
        <p className="v5-title">{project.title}</p>
        {project.description && (
          <p className="v5-body mt-1 pr-6">{project.description}</p>
        )}
      </div>
    </Link>
  );
}
