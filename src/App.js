import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from './components/Navbar';
import CardSection from './components/card/CardSection';
import ModalContainer from './container/ModalContainer';
import Footer from './components/Footer';

import { setDarkTheme, setLightTheme } from './actions/themeAction';

import './App.css';
import { useEffect } from 'react';


function App() {

	const theme = useSelector(state => state.themeReducer);
	const dispatch = useDispatch();

	const setTheme = (theme = 'dark') => {
		if(theme === 'dark')
			return dispatch(setDarkTheme())
		else 
			return dispatch(setLightTheme())
	}

	useEffect(() => {
		if(!localStorage.getItem('theme')){
			localStorage.setItem('theme', theme);
		}
		else{
			const storedTheme = localStorage.getItem('theme');
			setTheme(storedTheme);
		}
	}, []);

	useEffect(() => {
		if(localStorage.getItem('theme')){
			localStorage.setItem('theme', theme);
		}	
	}, [theme])
	

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
