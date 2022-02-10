import React from 'react';

import Navbar from './components/Navbar';
import CardSection from './components/card/CardSection';
import Modal from './components/modal/Modal';
import Addpost from './components/modal/AddPost';

import './App.css';


function App() {

	return (
		<div className="App">
			<Modal isOpen isHeader={true} title={"Add post"}>
				<Addpost />
			</Modal>

			<Navbar />
			<CardSection />
		</div>
	);
}

export default App;
