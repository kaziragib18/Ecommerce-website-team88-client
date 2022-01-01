import React from 'react';
import Article from '../Article/Article';
import NewsLetter from '../Newsletter/Newsletter';
import NavBar from '../Shared/NavBar/NavBar';



const Home = () => {
  return (
    <div>
      <NavBar />
      <NewsLetter />
      <Article />
    </div>
  );
};

export default Home;