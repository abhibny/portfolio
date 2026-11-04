import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextLink from '../components/TextLink';
import Link from 'next/link';
import ProjectMedia from '../components/projects/ProjectMedia';
import GridContainer from '../components/GridContainer';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectBody from '../components/projects/ProjectBody';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectDetails from '../components/projects/ProjectDetails';
import listAssignee from '../public/work/newsart/summary.jpg';






import filters from '../public/work/newsart/concept.jpg';

export default function Data() {
  return (
    <motion.main className="min-h-[70vh]">
      <GridContainer>
        <ProjectHero content="/project-covers/newsart.jpg" />
        <ProjectTitle role="Wanna do research in this">Data is the new ART</ProjectTitle>
        <ProjectBody col={2}>
        &ldquo;NewsScape: The World Through Art&ldquo; is an upcoming AI-driven initiative that 
        transforms hourly global news into dynamic art pieces. By using colors, textures, 
        and patterns to represent countries, topics, and tones, it aims to reveal hidden 
        trends in global narratives while creating a visually engaging and evolving art collection.
        </ProjectBody>
        <ProjectDetails
          role={["Academic Project"]}
          collaborators={["In talks with Prof."]}
          duration=" -- "
        />

        <ProjectMedia noShadow src={listAssignee}></ProjectMedia>
        <ProjectMedia noShadow src={filters}></ProjectMedia>
      </GridContainer>
    </motion.main>
  );
}
