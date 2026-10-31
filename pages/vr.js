import React from 'react';
import { motion } from 'framer-motion';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectTitle from '../components/projects/ProjectTitle';

export default function VR() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/placeholder.svg" />
        <ProjectTitle role="Experiential explorations">VR</ProjectTitle>
        <ProjectBody col={2}>
          VR/AR explorations and interactive spatial experiments.
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}
