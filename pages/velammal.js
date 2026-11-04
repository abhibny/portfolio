import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextLink from '../components/TextLink';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectMedia from '../components/projects/ProjectMedia';
import ProjectTitle from '../components/projects/ProjectTitle';
import Spacer from '../components/projects/Spacer';
import LinkCard from '../components/projects/LinkCard';
import Link from 'next/link';
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

export default function Velammal() {
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
    <main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/work/velammal/landscape.jpg" />
        <ProjectTitle role="Architectural Modularity">
          Velammal Project
        </ProjectTitle>
        <ProjectBody col={2}>
        The Velammal Landscape Project focuses on creating a sustainable, 
        student-friendly outdoor environment that blends greenery with functional 
        spaces. It incorporates innovative landscaping techniques, interactive zones, 
        and eco-friendly features to foster learning, recreation, and community engagement, 
        enhancing the aesthetic appeal and utility of the institution&apos;s surroundings.
        </ProjectBody>
        <ProjectDetails
          role={['Lead Designer']}
          collaborators={[
            'Joel Joshy',
            'Ashish N Ramesh',
          ]}
          duration="3 months"
          tools={['Rhino 3D', 'Grasshopper', 'V-Ray', 'Adobe Suite']}
        />
      </GridContainer>
    </main>
  );
}
