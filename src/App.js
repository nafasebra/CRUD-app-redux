import React, { useState } from 'react';

import Navbar from './components/Navbar';
import CardSection from './components/card/CardSection';

import './App.css';
import Modal from './components/modal/Modal';


function App() {
    const [openModal, setOpenModal] = useState(false);

	const closeModalFunc = () => {
		setOpenModal(false);
	}
	const openModalFunc = () => {
		setOpenModal(true);
	}

	return (
		<div className="App">
			<Modal>
				<p>hello modal</p>	
			</Modal>

			<Navbar />

			<CardSection />
		</div>
	);
}

export default App;
