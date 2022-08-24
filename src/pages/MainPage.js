import React from "react";

// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// containers
import CardContainer from '../container/CardContainer';


function MainPage() {
  return (
    <>
      <Navbar />
      <CardContainer />
      <Footer />
    </>
  );
}

export default MainPage;
