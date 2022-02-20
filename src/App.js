import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// components
import Navbar from './components/Navbar';
import CardSection from './components/card/CardSection';
import Footer from './components/Footer';

// containers
import ModalContainer from './container/ModalContainer';
import PopupContainer from './container/PopupContainer';

// action creators
import { setDarkTheme, setLightTheme } from './actions/themeAction';

// styles
import './App.css';


function App() {

	const theme = useSelector(state => state.themeReducer);
	const dispatch = useDispatch();

	const setTheme = (theme = 'dark') => {
		if(theme === 'dark')
			dispatch(setDarkTheme())
		else 
			dispatch(setLightTheme())
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
		if(localStorage.getItem('theme'))
			localStorage.setItem('theme', theme);
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
