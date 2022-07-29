import styled from 'styled-components'

export const DropDownContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  border-radius: 8px;
  z-index: 99;
  padding: 10vh;
  cursor: default;
  overflow: hidden;
  transition: 0.3s ease;
  visibility: ${({ active }) => active ? 'visible' : 'hidden'};
  opacity: ${({ active }) => active ? '1' : '0'};
  transform-origin: top;
  
  transform: ${({ active }) => active ? 'scaleY(1)' : 'scaleY(.3)'};

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    
  }
`
export const DropDownItemDesc = styled.p`
  color: #ffffff;
  opacity: 0.5;
  font-size: 14px;
  line-height: 22px;
  text-align: start;
  
`
export const DropDownItemTitle = styled.h2`
  color: #ffffff;
  font-size: 18px;
  line-height: 26px;
  text-align: start;
  
`
export const DropDownItem = styled.a`
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  transition: .3s ease;
  padding: 12px 16px;

  &:hover {
    transform: scale(1.05);
    background-color: #eee;
    box-shadow: 0 3px 6px 3px rgba(0,0,0,.3);
    color: #000;
  }

  &:nth-of-type(2n):hover {
    box-shadow: 0 0 8px 4px rgba(0,0,0,.3);
  }

  &:nth-of-type(3n):hover {
    box-shadow: 0 -3px 6px 3px rgba(0,0,0,.3);
  }
  &:hover ${DropDownItemTitle}, &:hover ${DropDownItemDesc} {
    color: #000;
  }
  &:visited {
    color: #fff;
  }

`

export const DropDownIcon = styled.div`
  width: 3em;
  height: 4em;
  background-color: black;
  border: none;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 0;
  border-top-right-radius: 25px;
  border-top-left-radius: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // transform: rotate(-90deg);
  padding: 1.5em .3em; 
  position: fixed;
  left: 0;
  top: 10vh;
  z-index: 100;
  cursor: pointer;
  font-size: 1.1em;

  span {
    transform: rotate(90deg);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    left: unset;
    right: 0;
    top: 10vh;
    border-top-right-radius: 0;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 0;

    span {
      transform: rotate(-90deg);
    }
  }

  &:hover {
    box-shadow: -2px 2px 8px black;
  }

  
`

export const DropDownTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`



