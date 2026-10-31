import React from 'react';
import { motion } from 'framer-motion';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectTitle from '../components/projects/ProjectTitle';

export default function Dessys() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/placeholder.svg" />
        <ProjectTitle role="Design systems">Design Sys</ProjectTitle>
        <ProjectBody col={2}>
          Notes and patterns from building robust, scalable design systems.
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}
