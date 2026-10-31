import React from 'react';
import { motion } from 'framer-motion';
import GridContainer from '../components/GridContainer';
import ProjectTitle from '../components/projects/ProjectTitle';
import ProjectBody from '../components/projects/ProjectBody';
import TextLink from '../components/TextLink';

// The previous version of this page showed cards inherited from the
// portfolio-v4 template (Skiff, Azuki, AIGA, Metalink and others) that
// linked to routes which no longer exist. Rebuilt as a stub pending
// Abhishek's own art archive; the v5 version lives at /v5/art.
export default function Art() {
  return (
    <motion.main className="min-h-[70vh] pt-6 md:pt-8">
      <GridContainer className="gap-y-8">
        <ProjectTitle role="Personal practice">Art</ProjectTitle>
        <ProjectBody>
          A running archive of personal work — image, form and material. This
          page is being rebuilt; in the meantime the current selection lives on{' '}
          <TextLink link="https://www.instagram.com/greeenpoints/">
            Instagram
          </TextLink>
          .
        </ProjectBody>
      </GridContainer>
    </motion.main>
  );
}
