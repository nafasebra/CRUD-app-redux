import React from 'react';

import Navbar from './components/Navbar';
import CardSection from './components/card/CardSection';
import Addpost from './components/modal/AddPost';

import modalContainer from './container/modalContainer'

import './App.css';


function App() {

	return (
		<div className="App">
			<modalContainer />

			<Navbar />
			<CardSection />
		</div>
	);
}

export default App;
