'use client'

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: ${props => props.$show ? '#000' : 'transparent'};
  transition: all 0.5s;
  z-index: 10;

  @media (max-width: 768px) {
    height: 60px;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 36px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  height: 35px;
  position: relative;
  width: 140px;

  @media (max-width: 768px) {
    height: 30px;
    width: 120px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    color: #e5e5e5;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Navbar = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav $show={show}>
      <NavContent>
        <Logo>
          <Image 
            src="/logo.png" 
            alt="junicorn" 
            fill
            style={{ objectFit: 'contain' }}
          />
        </Logo>
        {/*
        <NavLinks>
          <NavLink href="/">首页</NavLink>
          <NavLink href="/series">剧集</NavLink>
          <NavLink href="/movies">电影</NavLink>
          <NavLink href="/mylist">我的列表</NavLink>
        </NavLinks>
        */}
      </NavContent>
    </Nav>
  );
};

export default Navbar; 