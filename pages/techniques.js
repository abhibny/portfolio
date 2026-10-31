import React from 'react';
import { motion } from 'framer-motion';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectTitle from '../components/projects/ProjectTitle';

export default function Techniques() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/placeholder.svg" />
        <ProjectTitle role="Process & methods">Techniques</ProjectTitle>
        <ProjectBody col={2}>
          Explorations, process notes, and method experiments across projects.
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}
