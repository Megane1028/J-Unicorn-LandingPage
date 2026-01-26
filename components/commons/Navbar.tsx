'use client'

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

interface NavProps {
  $show: boolean;
}

const Nav = styled.nav<NavProps>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 72px;
  background-color: ${props => (props.$show ? 'rgba(0,0,0,0.92)' : 'transparent')};
  transition: all 0.35s ease;
  z-index: 10;

  /* 滚动后更稳重一点 */
  box-shadow: ${props => (props.$show ? '0 10px 24px rgba(0,0,0,0.35)' : 'none')};
  border-bottom: ${props => (props.$show ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent')};
  backdrop-filter: ${props => (props.$show ? 'blur(8px)' : 'none')};

  @media (max-width: 768px) {
    height: 62px;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 36px;

  @media (max-width: 768px) {
    padding: 0 18px;
  }
`;

/** Logo 区域：放大 + 点击区域更大 */
const LogoWrap = styled.div`
  position: relative;
  width: 200px;
  height: 48px;

  @media (max-width: 768px) {
    width: 170px;
    height: 40px;
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
      setShow(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav $show={show}>
      <NavContent>
        <LogoWrap>
          <Link href="/" style={{ display: 'block', width: '100%', height: '100%' }}>
            <Image
              src="/logo.png"
              alt="Square Point"
              fill
              priority
              sizes="(max-width: 768px) 170px, 200px"
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </LogoWrap>

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
