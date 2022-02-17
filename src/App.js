import React from 'react';
import { useSelector } from 'react-redux';

import Navbar from './components/Navbar';
import CardSection from './components/card/CardSection';
import ModalContainer from './container/ModalContainer';
import Footer from './components/Footer';

import './App.css';


function App() {

	const theme = useSelector(state => state.themeReducer);

	return (
		<div className={theme === 'dark' ? 'app-dark' : 'app-light'}>
			<div className="app_container">
				<ModalContainer />
				<Navbar />
				<CardSection />
				<Footer />
			</div>
		</div>
	);
}

export default App;
