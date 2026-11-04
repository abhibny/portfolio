import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextLink from '../components/TextLink';
import Link from 'next/link';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectDetails from '../components/projects/ProjectDetails';

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

export default function Neydhal() {
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
  }, []);

  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/project-covers/neydhal.jpg" />
        <ProjectTitle role="Exhibition along with KMB 2023">Neydhal</ProjectTitle>
        <ProjectBody col={2}>
        Neydhal is a photographic exhibition showcasing the lives of Chennai&apos;s 
        fishing community, held alongside the {' '}
        <TextLink link="https://www.kochimuzirisbiennale.org/">
        Kochi-Muziris Biennale
        </TextLink>{' '}
        .
        Through 
        evocative imagery, it delves into their struggles, traditions, and connection 
        with the sea. The exhibition blends art and narrative, offering an immersive experience 
        that celebrates the resilience and culture of this coastal community.
        </ProjectBody>
        <ProjectDetails
          role={['Design Lead']}
          replaceCollab="collaborators"
          collaborators={['Ashish N Ramesh', 'Prasoon Suresan']}
          duration="3 weeks total"
        />
      </GridContainer>
    </motion.main>
  );
}
