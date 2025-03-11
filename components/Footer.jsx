'use client'

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 10px;
  color: #757575;
  background-color: #141414;
`;

const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 10px;
  
  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          © 2025 J-unicorn.org.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 