'use client'

import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

const RowContainer = styled.div`
  margin-left: 20px;
  color: white;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const RowTitle = styled.h2`
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px 0;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const PosterContainer = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  margin-right: 10px;
  transition: transform 450ms;
  border-radius: 4px;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.08);
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    width: 150px;
    height: 225px;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 180px;
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const PosterSkeleton = styled.div`
  width: 200px;
  height: 300px;
  margin-right: 10px;
  border-radius: 4px;
  background: linear-gradient(
    90deg,
    #1c1c1c 25%,
    #2c2c2c 50%,
    #1c1c1c 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;

  @media (max-width: 1024px) {
    width: 150px;
    height: 225px;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 180px;
  }
`;

const Row = ({ title, movies }) => {
  const [imageLoaded, setImageLoaded] = React.useState({});

  return (
    <RowContainer>
      <RowTitle>{title}</RowTitle>
      <RowPosters>
        {movies.map(movie => (
          <PosterContainer key={movie.id}>
            {!imageLoaded[movie.id] && <PosterSkeleton />}
            <Image
              src={movie.poster_path}
              alt={movie.name}
              fill
              style={{ 
                objectFit: 'cover',
                opacity: imageLoaded[movie.id] ? 1 : 0,
                transition: 'opacity 0.3s'
              }}
              onLoad={() => setImageLoaded(prev => ({ ...prev, [movie.id]: true }))}
            />
          </PosterContainer>
        ))}
      </RowPosters>
    </RowContainer>
  );
};

export default Row; 