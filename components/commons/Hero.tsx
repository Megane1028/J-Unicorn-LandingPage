'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Banner from './Banner';

export default function Hero() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900); // 稍微快一点，更像专业站点

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <LoadingWrapper>
        <Logo
          src="/logo.png"
          alt="Square Point"
        />
      </LoadingWrapper>
    );
  }

  return <Banner />;
}

/* ===== styles ===== */

const LoadingWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 220px;        /* 关键：放大 */
  max-width: 70%;
  animation: fadeIn 0.6s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.96);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
