'use client';

import styled from 'styled-components';

interface BannerProps {
  title?: string;
  description?: string;
}

export default function Banner({
  title = 'Squarepoint Capitalへようこそ',
  description = 'Japan Leading Investment',
}: BannerProps) {
  return (
    <BannerWrapper>
      <Video autoPlay muted loop playsInline>
        <source src="/banner-video.mp4" type="video/mp4" />
      </Video>

      <BannerContent>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <ButtonContainer>
          <BannerButton href="https://trade.altos-ventures.com/#/pages/user/login/login">
            ログイン
          </BannerButton>

          <BannerButton href="https://trade.altos-ventures.com/#/pages/user/register/register">
            新規登録
          </BannerButton>

          {/* 新增：前往官网 */}
          <BannerButtonOutline
            href="https://www.squarepoint-capital.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            公式サイトへ
          </BannerButtonOutline>
        </ButtonContainer>
      </BannerContent>
    </BannerWrapper>
  );
}

/* ===== styled-components ===== */

const BannerWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 8%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.35) 45%,
    rgba(0, 0, 0, 0) 100%
  );

  @media (max-width: 768px) {
    padding: 0 6%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.35) 50%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const Title = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.4rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const BannerButton = styled.a`
  padding: 12px 22px;
  background-color: #ffffff;
  color: #000;
  text-decoration: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.25s;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const BannerButtonOutline = styled.a`
  padding: 12px 22px;
  background-color: rgba(255, 255, 255, 0.15);
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.6);
  transition: all 0.25s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;
