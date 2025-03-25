'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import VideoSchema from '../VideoSchema';

const BannerContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
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
    align-items: center;
    text-align: center;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0.8) 100%
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
    text-align: center;
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
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
    max-width: 250px;
    align-items: center;
  }
`;

const BannerButton = styled.a`
  padding: 12px 24px;
  background-color: #e5e5e5;
  color: #000;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d4d4d4;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

interface BannerProps {
  title: string;
  description: string;
}

const Banner = ({ title, description }: BannerProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const videoUrl = '/banner-video.mp4';
  const thumbnailUrl = '/banner-thumbnail.jpg'; // 确保这个缩略图存在
  const uploadDate = '2025-03-15'; // 设置视频上传日期

  return (
    <BannerContainer>
      <VideoSchema
        videoUrl={videoUrl}
        thumbnailUrl={thumbnailUrl}
        title={title}
        description={description}
        uploadDate={uploadDate}
      />
      {isMounted && (
        <BannerVideo autoPlay muted loop playsInline poster={thumbnailUrl}>
          <source src={videoUrl} type="video/mp4" />
        </BannerVideo>
      )}
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