import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';
import { auth } from '../../firebase/firebase.utils';
import { 
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv 
} from './header.styles'

//import './header.styles.scss';

const Header= ({ currentUser })=> (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo'></Logo>
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {
        currentUser ? (
        <OptionLink onClick={()=> auth.signOut()}>SIGN-OUT</OptionLink>
        ):(
        <OptionLink to='signin'>SIGN-IN</OptionLink>)
      }
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;