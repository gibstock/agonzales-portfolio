import React from 'react';
import Link from 'next/link'
import { FlexColCenter, BlogLink, BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogLink key={id} href={visit} target="_blank" rel='noreferrer'>
          <BlogCard >
            <div>
              <Img src={image} />
            </div>
            <FlexColCenter>
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div style={{width: '100%'}}>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={source}>Code</ExternalLinks>
                {/* <ExternalLinks href={visit}>Visit</ExternalLinks> */}
              </UtilityList>
            </FlexColCenter>
          </BlogCard>
        </BlogLink>
        ))}
    </GridContainer>
  </Section>
);

export default Projects;