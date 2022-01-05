import React from 'react';
import AddItem from '../../Dashboard/Dashboard/AddItem';
import Article from '../Article/Article';
import Banner1 from '../Banner1/Banner1';
import Banner2 from '../Banner2/Banner2';
import NewsLetter from '../Newsletter/Newsletter';
import Footer from '../Shared/Footer/Footer'
import NavBar from '../Shared/NavBar/NavBar';

// import Explore from '../Explore/Explore';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner1 />
      <Banner2 />
      <NewsLetter />
      <Article />
      <Footer />
      <AddItem/>
    </div>
  );
};

export default Home;