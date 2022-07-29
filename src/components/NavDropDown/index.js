import React, {useState} from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { FaLocationArrow } from "react-icons/fa"

import { DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer } from './NavDropDown'

const NavDropDown = (props) => {
  const [isActive, setIsActive] = useState(false)
  const [menu, setMenu] = useState('MENU')

  const dropDownClickHandler = () => {
    setIsActive(!isActive)
    !isActive ? setMenu('X') : setMenu('MENU')
  }

  return(
    <>
      <DropDownIcon  onClick={dropDownClickHandler}><span active={isActive}>{menu}</span>
      </DropDownIcon>
      <DropDownContainer active={isActive}>
        <DropDownItem href='#projects'>
          <DropDownTextContainer>
            <span>01</span>
            <DropDownItemTitle>Projects</DropDownItemTitle>
            <DropDownItemDesc>Things I've Built</DropDownItemDesc>
          </DropDownTextContainer>
        </DropDownItem>
        <DropDownItem href='#tech'> 
          <DropDownTextContainer>
            <span>02</span>
            <DropDownItemTitle>Technologies</DropDownItemTitle>
            <DropDownItemDesc>Things I've Used</DropDownItemDesc>
          </DropDownTextContainer>
        </DropDownItem>
        <DropDownItem href='#about'>
          <DropDownTextContainer>
            <span>03</span>
            <DropDownItemTitle>About</DropDownItemTitle>
            <DropDownItemDesc>Things About Me</DropDownItemDesc>
          </DropDownTextContainer>
        </DropDownItem>
      </DropDownContainer>
    </>
  )
};

export default NavDropDown
