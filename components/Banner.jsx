'use client'

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const BannerContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    height: 70vh;
  }
`;

const BannerVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const BannerImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BannerContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 1;

  @media (max-width: 768px) {
    padding: 30px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  max-width: 50%;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    max-width: 70%;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    max-width: 100%;
  }
`;

const Description = styled.p`
  font-size: 2rem;
  color: white;
  max-width: 50%;
  margin-top: 1rem;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
    max-width: 70%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    max-width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    max-width: 300px;
  }
`;

const BannerButton = styled.a`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.5rem 2rem;
  background-color: rgba(51, 51, 51, 0.5);
  text-decoration: none;
  display: inline-block;
  text-align: center;
  
  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
  }
`;

const Banner = ({ title, description }) => {
  return (
    <BannerContainer>
      <BannerVideo autoPlay muted loop playsInline>
        <source src="/banner-video.mp4" type="video/mp4" />
      </BannerVideo>
      <BannerContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ButtonContainer>
          <BannerButton href="https://trade.j-unicorn.org/pages/user/login">ログイン</BannerButton>
          <BannerButton href="https://trade.j-unicorn.org/pages/user/register">新規登録</BannerButton>
        </ButtonContainer>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner; 