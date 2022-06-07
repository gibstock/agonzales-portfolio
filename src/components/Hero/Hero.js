import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi I'm Andre
      </SectionTitle>
      <SectionText>
        Web Developer.
      </SectionText>
      <Button onClick={() => window.location = '#projects'} >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;