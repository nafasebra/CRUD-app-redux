import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// action creators
import { setDarkTheme, setLightTheme } from './actions/themeAction';

// pages
import Error404 from './pages/Error404';
import MainPage from './pages/MainPage';
import OpenThePost from './pages/OpenThePost';

// style file
import './App.css';


function App() {
	const theme = useSelector(state => state.themeReducer);
	const dispatch = useDispatch();
	const setTheme = (theme = 'dark') => {
		if(theme === 'dark') dispatch(setDarkTheme())
		else dispatch(setLightTheme())
	};

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
	}, [theme]);
	

	return (
		<div className={theme === 'dark' ? 'app-dark' : 'app-light'}>
			<div className="app_container">
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/post/:id' element={<OpenThePost />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
