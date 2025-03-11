'use client'

import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Row from './Row';
import Footer from './Footer';
import Loading from './Loading';

const Home = () => {
  const [loading, setLoading] = React.useState(true);
  {/*123*/}
  const testMovies = [
    {
      id: 1,
      name: "测试电影1",
      poster_path: "/test.jpg"
    },
    {
      id: 2,
      name: "测试电影2",
      poster_path: "/test.jpg"
    },
    {
      id: 3,
      name: "测试电影3",
      poster_path: "/test.jpg"
    }
  ];

  React.useEffect(() => {
    // 模拟加载时间
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <Navbar />
      <Banner 
        title="J-ユニコンへよこそう"
        description="Japan Leading Investment"
      />
      {/*
      <Row title="热门推荐" movies={testMovies} />
      <Row title="最新上线" movies={testMovies} />
      <Row title="动作电影" movies={testMovies} />
      <Row title="喜剧电影" movies={testMovies} />
      */}
      <Footer />
    </main>
  );
};

export default Home; 