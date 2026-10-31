import GridContainer from './GridContainer';
import React, { useState, useEffect } from 'react';
import TextLink from './TextLink';
import { useRouter } from 'next/router';
const GLOBAL_SPACING = 'text-padding pb-10 pt-6 md:pb-10 md:pt-8';
const BREAKPOINT = 'col-start-1 col-end-13';

export default function Footer() {
  const pageName = useRouter().asPath;
  const [updatedTime, setUpdatedTime] = useState('...');

  useEffect(() => {
    fetch(
      'https://api.github.com/repos/josephz-me/portfolio-v4/commits?per_page=1'
    )
      .then((res) => res.json())
      .then((res) => {
        setUpdatedTime(res[0].commit.author.date);
      });
  }, []);

  return (  
    <footer
      className={`flex flex-col items-center body bg-black dot-grid z-[1] w-full text-zinc-100`}
    >
      <GridContainer className="gap-y-8" footerSpacing={GLOBAL_SPACING}>
        
        <div
          className={`flex-col space-y-2 ${BREAKPOINT} caption md:col-start-1 md:col-end-6`}
        >
          {/*<span className="flex flex-row space-x-2 align-middle">
            <p className="self-center w-min px-2 pt-1 pb-[2px] mono lowercase text-yellow-300 border-yellow-300 border border-solid rounded-full">
              v4.3.0
            </p>
            <p className="self-center px-2 pt-1 pb-[2px] mono uppercase text-zinc-600">
              {`Last updated ${updatedTime.substring(
                0,
                updatedTime.indexOf('T')
              )}`}{' '}
            </p>
          </span>*/}
        </div>

        <span
          className={`flex flex-col space-y-1 ${BREAKPOINT} md:col-start-7 md:col-end-9`}
        >
          <p>
            <TextLink link="/v5" sameTab>
              New site
            </TextLink>
          </p>
          <p>
            <TextLink link="/abhishek-benny-resume.pdf">Resume</TextLink>
          </p>
          <p>
            <TextLink link="https://www.linkedin.com/in/abhibny/">
              LinkedIn
            </TextLink>
          </p>
          <p>
            <TextLink link="https://www.instagram.com/greeenpoints/">
              Instagram
            </TextLink>
          </p>
          <p>
            <TextLink link="https://x.com/shawarmawomayo">
              Twitter
            </TextLink>
          </p>
        </span>
  <div className={`flex flex-col space-y-1 ${BREAKPOINT} md:col-start-9 md:col-span-4 lg:col-start-9 lg:col-span-4`}>
          <span>
            <TextLink link="mailto:abhishekbenny98@gmail.com">
              {`abhishekbenny98@gmail.com`}
            </TextLink>
          </span>
        </div>
      </GridContainer>
    </footer>
  );
}
