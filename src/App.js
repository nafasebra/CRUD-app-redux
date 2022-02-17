import React from 'react';

import Navbar from './components/Navbar';
import CardSection from './components/card/CardSection';
import ModalContainer from './container/ModalContainer';
import Footer from './components/Footer';

import './App.css';


function App() {

	return (
		<div className="App">
			<ModalContainer />

			<Navbar />
			<CardSection />
			<Footer />
		</div>
	);
}

export default App;
