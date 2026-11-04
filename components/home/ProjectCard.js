import Link from 'next/link';
import Media from '../Media';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectCard({ isVideo = false, ...props }) {
  const Wrapper = props.link ? Link : 'div';
  return (
    <Wrapper
      target={props.isExternal ? '_blank' : ''}
      className={`${
        //determine if project is linked
        props.link != undefined ? 'cursor-pointer' : 'pointer-events-none'
      }
      relative w-full opacity-100 inline-block select-none group`}
      passHref
      variants={props.animation}
      href={props.link}
    >
      <div className="relative game-border group-hover:opacity-80">
        <Media isVideo={isVideo} src={props.content} responsive />

        {props.notionLabel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.1 }}
            rel="noreferrer"
            href="https://www.notion.so/blog/meet-skiff-the-newest-member-of-the-notion-family"
            target="_blank"
            className=" transition duration-200 border border-black/20 border-solid w-fit flex items-center gap-2 absolute bottom-4 z-20 right-[-50%] left-[50%] translate-x-[-50%] px-3 py-1 bg-white text-black rounded-full"
          >
            <p className="body uppercase tracking-normal text-xs">
              Acquired by Notion
            </p>

            <Image
              src="/notion-logo.svg"
              alt="Notion Logo"
              className="w-[14px] h-[14px]"
            />
          </motion.div>
        )}
      </div>

      <div className={props.detailed ? 'project-details' : 'mt-3'}>
        {props.detailed ? (
          <>
            <h2 className="project-heading">
              <span className="project-title">{props.title}</span>
              {props.description && <span className="project-subtitle">{' - '}{props.description}</span>}
            </h2>
            {props.tags?.length > 0 && (
              <ul className="project-tags" aria-label="Project tags">
                {props.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            )}
          </>
        ) : (
        <div className="caption flex items-center gap-2 whitespace-nowrap overflow-hidden min-w-0 text-sm md:text-base">
          <span className="text-zinc-50 truncate normal-case leading-tight">{props.title}</span>
          {props.description && (
            <span className="flex items-center gap-2 text-zinc-500 min-w-0 normal-case leading-tight">
              <span className="text-zinc-700">|</span>
              <span className="truncate normal-case">{props.description}</span>
            </span>
          )}
        </div>
        )}
        {props.locked && (
          <p className="caption absolute text-neutral-100 rounded-md right-4 top-4 px-2 z-10 py-1 bg-gray-800 shadow-xl">
            WIP
          </p>
        )}
      </div>
      <style jsx>{`
        /* 01A caption measurements are relative to its 579.319px tile. */
        .project-details {
          /* Figma: 15px after the image and after the text, no empty text row. */
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2.589246cqw;
          margin-top: 2.589246cqw;
          font-family: 'IBM Plex Sans', sans-serif;
          text-align: left;
        }

        .project-heading {
          width: 63%;
          font-size: max(12px, 3.279711cqw);
          line-height: 1.315789;
          color: var(--project-heading-color, #fff);
          overflow-wrap: anywhere;
        }

        .project-title {
          font-weight: 700;
        }

        .project-subtitle {
          font-weight: 300;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.553545cqw;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .project-tags li {
          display: flex;
          align-items: center;
          justify-content: center;
          height: max(24px, 5.37478cqw);
          padding: 0.863082cqw 1.89878cqw;
          border: 0.5px solid #858585;
          border-radius: 999px;
          font-size: max(10px, 2.934479cqw);
          font-weight: 400;
          line-height: 1.294118;
          color: #565656;
          text-transform: uppercase;
        }
      `}</style>
    </Wrapper>
  );
}
