import React from 'react';
import Article from '../Article/Article';
import Footer from '../Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';



const Home = () => {
  return (
    <div>
      <NavBar />
      <Article />
      <Footer/>
    </div>
  );
};

export default Home;