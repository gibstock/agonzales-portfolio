import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 25px;
  padding: 1em;
  transition: all .55s ease;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: start;
column-gap: 2rem;
row-gap: 3rem;



@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 10px;
  // box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 100%;
  min-height: 400px;
  // overflow: hidden;
  opacity: 0.7;
  border: 1px solid rgba(255,255,255, 0.3);
  // background-image: linear-gradient(225deg, hsla(250, 50%, 90%, .3), transparent),
  // linear-gradient(39deg, hsla(10, 70%, 90%, .3), transparent) ;
  transition: 0.5s;

  &:hover {
    // background-color: hsl(204, 6.70%, 14.70%);
    box-shadow: inset 2px 2px 22px 2px hsla(208, 25.50%, 90.00%, 0.17);
    border: 1px solid rgba(255,255,255, 0.9);
    opacity: 1;
  }
  
  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
    flex-direction: column;
    width: 100%;
  //   background-image: linear-gradient(39deg, hsla(250, 50%, 90%, .3), transparent),
  // linear-gradient(225deg, hsla(10, 70%, 90%, .3), transparent) ;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  color: hsl(0, 0.00%, 100.00%);
  text-transform: uppercase;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: hsl(210, 45%, 50%);
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: hsl(0, 0.00%, 100.00%);
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2em
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color: hsl(0,0%,22%);
font-size: 1.6rem;
padding:1rem 1.5rem;
// background: hsl(210, 75%, 55%);
border-radius: 25px;
border: 1px solid hsl(210, 50%, 50%);
transition: 0.5s;
&:hover{
  background: hsl(210, 70%, 60%);
  color: hsl(0, 0%, 10%);

}
`;
export const BlogLink = styled.a`
transition: transform .55s;
&:hover ${Img}{
  // transform:  scale(.99);
  // transition: transform .55s ease;
  // background: #ffffff;
}



&:nth-last-of-type(){
  grid-column: 1/-1;
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
padding: 2rem;
@media ${(props) => props.theme.breakpoints.sm} {
  flex-wrap: wrap;
  gap: 1em;

}
`
export const Tag = styled.li`
color: rgb(255, 255, 255);
font-size: 1.5rem;
// background-image: linear-gradient(270deg, hsl(210, 50%, 50%) 0%, hsl(250, 50%, 50%) 100%);
border-radius: 25px;
padding: .2em;
@media ${(props) => props.theme.breakpoints.sm} {
  font-size: 2rem;

}
`
export const FlexColCenter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1em;
`