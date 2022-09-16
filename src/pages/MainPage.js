import React from "react";

// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// containers
import CardContainer from '../container/CardContainer';
import Header from "../components/Header";


function MainPage() {
  return (
    <>
      <Navbar showPlusBtn />
      <Header />
      <CardContainer />
      <Footer />
    </>
  );
}

export default MainPage;
