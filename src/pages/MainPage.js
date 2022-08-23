import React from "react";

// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// containers
import ModalContainer from '../container/ModalContainer';
import PopupContainer from '../container/PopupContainer';
import CardContainer from '../container/CardContainer';


function MainPage() {
  return (
    <>
      <ModalContainer />
      <PopupContainer />

      <Navbar />
      <CardContainer />
      <Footer />
    </>
  );
}

export default MainPage;
