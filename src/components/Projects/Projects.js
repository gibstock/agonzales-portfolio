import React from 'react';
import { FlexColCenter, BlogLink, BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => {
  return(
    <Section nopadding id='projects'>
      <SectionDivider />
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2em', width: '100%'}}>
        <img width={250} src="/images/me.webp" alt="me" />
        <h1>Hi, I'm Andre</h1>
      </div>
        <SectionTitle main>Showcase</SectionTitle>
      <GridContainer>
        {projects.map(({id, image, title, description, tags, visit, video}) => (
          <BlogLink  key={id} href={visit} target="_blank" rel='noreferrer'>
            <BlogCard >
              <div>
                {video ? <div><video loop muted autoPlay={true} width="100%" src={video}></video></div> : <Img src={image} />} 
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
              </FlexColCenter>
            </BlogCard>
          </BlogLink>
          ))}
      </GridContainer>
    </Section>

  )

}


export default Projects;