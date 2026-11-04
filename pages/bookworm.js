import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectDetails from '../components/projects/ProjectDetails';
import ProjectMedia from '../components/projects/ProjectMedia';
import Spacer from '../components/projects/Spacer';
import LinkCard from '../components/projects/LinkCard';

// images
import AppSwitcher from '../public/work/bookworm/app-switcher.jpg';
import Mail from '../public/work/bookworm/mail.jpg';
import Compose from '../public/work/bookworm/compose-modal.jpg';
import Icons from '../public/work/bookworm/icons.png';
import MarketingCards from '../public/work/bookworm/marketing-cards.png';
import MarketingCards2 from '../public/work/bookworm/marketing-cards-2.jpg';
import MarketingLanding from '../public/work/bookworm/marketing-landing.jpg';
import AppLogos from '../public/work/bookworm/app-logos.jpg';
import Onboarding from '../public/work/bookworm/onboarding.jpg';
import MobileMail1 from '../public/work/bookworm/mobile-mail-1.png';
import MobileMail2 from '../public/work/bookworm/mobile-mail-2.png';

export default function Bookworm() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectTitle role="Nudes Studio">BookWorm Pavilion</ProjectTitle>
        <div className="col-span-full md:col-end-4 md:sticky md:top-[5em] text-zinc-100"></div>
        <ProjectBody col={2}>
          The BookWorm Pavilion project, under Nudes Studio, Mumbai led by {' '}
          <TextLink link="https://www.instagram.com/nurukarim/?hl=en">
            Ar. Nuru Karim 
          </TextLink>
          {' '}is a library of two simple, modular structures based on wooden ladders that 
          stretch outward to create undulating forms at either side of a central pathway.
          I worked on setting up the pavilion which was built from around 3,600 wooden components.
          These ladders house both shelf and seating areas for storytelling sessions, 
          offering unique views out across the{' '}
          <TextLink link="https://csmvs.in/">
            CSMVS museum
          </TextLink>{' '}
          gardens while providing space 
          for approximately 12,000 books.{' '}
          
        </ProjectBody>
        <ProjectDetails
          role={['Design Intern']}
          collaborators={[
            'Nuru Karim',
            'Ashish N Ramesh',
            'Hari Sankar',
            'Aman Kachchhi',
          ]}
          duration="2019"
          tools={['Grasshopper', 'Rhino 3D']}
        />
        <LinkCard
          col={1}
          link="https://www.dezeen.com/2019/12/26/wooden-book-worm-nudes-pavilion-architecture-mumbai/"
        >
          BookWorm on Dezeen
        </LinkCard>
        <LinkCard col={2} link="https://www.archdaily.com/965307/bookworm-pavilion-nudes">
          {`BookWorm on ArchDaily`}
        </LinkCard>
        <Spacer />
        <ProjectBody title="Design Process">
        The  {' '}
          <TextLink link="https://www.architectural-review.com/awards/ar-public/bookworm-in-mumbai-india-by-nudes">
           BookWorm pavilion
          </TextLink>{' '}
          aims to foster a sense of learning through 
          the creation of an interactive learning space.
        </ProjectBody>
        <ProjectMedia src={AppLogos}>
        It creates a welcoming &apos;landscape of books&apos; to make reading enjoyable for 
        children, encouraging exploration regardless of language.
        </ProjectMedia>
        <ProjectMedia src={MarketingLanding}>
          Built with 3,600 modular, sustainable components, the 120&apos; x 40&apos; pavilion 
          has a low carbon footprint and supports reading and storytelling activities.
          {/* Visit <TextLink link="https://www.skiff.com">here</TextLink> */}
        </ProjectMedia>
        <ProjectMedia src={MarketingCards2} />
        <ProjectMedia noShadow pAll src={MarketingCards}>
        Fabricated off-site, it is deployable within a week and designed to 
        travel across rural and urban areas.
        </ProjectMedia>

        <ProjectMedia id="icons" src={Icons}>
        The project fosters a sense of community by encouraging interaction and 
        learning. Visitors, especially children, use it as both a library and a playground, 
        weaving through its nooks and climbing its shelves.
        </ProjectMedia>
        <ProjectMedia pt pl src={AppSwitcher}>
        The modular construction allows for scalability, with components 
        being easily added or removed based on site conditions, budget, and available resources.
        </ProjectMedia>
        <ProjectMedia pAll src={Onboarding} />

        {/* MAIl */}
        <ProjectBody id="mail" title="Extra">
        Post-installation, donated books are distributed to schools, libraries, 
        and community centers, leaving a lasting impact on the local educational ecosystem.
        </ProjectBody>
        <ProjectMedia pAll src={Mail} />
        <ProjectMedia pr pb pt src={Compose} />
        <ProjectMedia noShadow pAll src={MobileMail1} />
        <ProjectMedia src={MobileMail2} />
      </GridContainer>
    </motion.main>
  );
}
