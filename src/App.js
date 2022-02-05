import React, { useState } from 'react';

import Navbar from './components/Navbar';
import CardSection from './components/card/CardSection';
import Modal from './components/modal/Modal';
import Addpost from './components/modal/AddPost';

import './App.css';


function App() {
    const [openModal, setOpenModal] = useState(true);

	const closeModalFunc = () => {
		setOpenModal(false);
	}
	const openModalFunc = () => {
		setOpenModal(true);
	}

	return (
		<div className="App">
			<Modal isOpen={openModal} isHeader={true} title={"Add post"}>
				<Addpost />
			</Modal>

			<Navbar />
			<CardSection />
		</div>
	);
}

export default App;
