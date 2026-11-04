import React, { useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  SwitchLayoutGroupContext,
} from 'framer-motion';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectMedia from '../components/projects/ProjectMedia';
import ProjectTitle from '../components/projects/ProjectTitle';
import LinkCard from '../components/projects/LinkCard';
import Link from 'next/link';
import ProjectDetails from '../components/projects/ProjectDetails';
import Spacer from '../components/projects/Spacer';

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (
      ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero isVideo content="/work/2140/city.mp4" />
        <ProjectTitle role="Architectural Thesis Project">City of 2140 : New York</ProjectTitle>
        <ProjectBody col={2}>
        Inspired by Kim Stanley Robinson’s New York 2140, this project reimagines 
        New York City as a resilient, adaptive urban ecosystem driven by data. Using 
        parametric design and modular construction, buildings and infrastructure respond 
        dynamically to real-time environmental, social, and economic factors. Floating 
        structures, elevated walkways, and adaptive systems address rising sea levels while 
        fostering community and sustainability. Data integration enables predictive modeling 
        for resource management, disaster resilience, and urban growth. The project promotes 
        a circular economy through sustainable materials and modularity. New York becomes a 
        living organism, evolving alongside its inhabitants and their changing needs while 
        tackling future challenges.
        </ProjectBody>
        <ProjectDetails
          role={['Academic Project']}
          replaceCollab="advisors"
          collaborators={['Kush Patel', 'Soumini Raja']}
          duration="4 months"
          tools={['Python', 'Rhino 3D', 'Grasshopper', 'V-Ray', 'Adobe Suite']}
        />
        {/*
        <LinkCard
          col={1}
          link="https://josephz.notion.site/Thinkspace-24f3dc1c62904b0da412b0a4230cc92d"
        >
          View complete documentation
        </LinkCard>
        */}
      </GridContainer>
    </motion.main>
  );
}
