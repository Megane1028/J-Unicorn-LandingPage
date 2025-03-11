'use client'

import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingLogo = styled.div`
  width: 200px;
  height: 50px;
  position: relative;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/logo.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 40px;
  }
`;

const Spinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <SpinnerContainer>
        <Spinner />
        <LoadingLogo />
      </SpinnerContainer>
    </LoadingContainer>
  );
};

export default Loading; 