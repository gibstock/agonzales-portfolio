import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { GiGears } from 'react-icons/gi';
import { SiTailwindcss} from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range of technologies in the web development world from back-end to front-end. There's a tool for every problem.</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" color='white'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React, NextJS, HTML5, CSS, PWA'S, EJS, TailwindCSS 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTailwindcss size="3rem" color='white'/>
        <ListContainer>
          <ListTitle>Utilities</ListTitle>
          <ListParagraph>
            Experience with <br />
            React-Query, Zustand, Firebase, GraphQL, Bamboo, BitBucket, Github, Jira
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" color='white'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            JavaScript, NODE.JS, Express, NextJS, Lambda Functions, MySQL, MariaDB, Oracle, MongoDb
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <GiGears size="3rem" color='white'/>
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS, Netlify, Heroku, Vercel, Strapi CMS, Sanity.io, Nginx, Bamboo
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
