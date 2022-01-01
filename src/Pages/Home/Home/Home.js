import React from 'react';
import Article from '../Article/Article';
import Banner1 from '../Banner1/Banner1';
import NavBar from '../Shared/NavBar/NavBar';



const Home = () => {
  return (
    <div>
      <NavBar />
      <Article />
      <Banner1/>
    </div>
  );
};

export default Home;