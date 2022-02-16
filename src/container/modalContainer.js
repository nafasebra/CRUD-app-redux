import React from 'react'
import { connect } from 'react-redux';

import Modal from '../components/modal/Modal'
// import Addpost from '../components/modal/AddPost';

import { CloseModal } from '../actions/modalAction';


function modalContainer(props) {

	const {
		isOpen, title, childOfModal, closeModal
	} = props;

	return (
		<Modal
			isOpen={isOpen}
			title={title}
			toCloseModal={closeModal}
		>
			{childOfModal}
		</Modal>
	)
}

const mapStateToProps = state => {
	const {
		isOpen, title, childOfModal
	} = state.modalReducer;

	return {
		isOpen: isOpen,
		title: title,
		childOfModal: childOfModal
	}
}

const mapDispatchToProps = dispatch => {
	return {
		closeModal: () => dispatch(CloseModal())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(modalContainer);