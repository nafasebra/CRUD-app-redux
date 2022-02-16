import React from 'react'
import { connect } from 'react-redux';

import Modal from '../components/modal/Modal'
// import Addpost from '../components/modal/AddPost';

import { CloseModal } from '../actions/modalAction';


function modalContainer(props) {

	const {
		isOpen, hasTitle, textOfTitle, childOfModal, closeModal
	} = props;

	return (
		<Modal
			isOpen={isOpen}
			isTitle={hasTitle}
			title={textOfTitle}
			toCloseModal={closeModal}
		>
			{childOfModal}
		</Modal>
	)
}

const mapStateToProps = state => {
	const {
		isOpen, hasTitle, textOfTitle, childOfModal
	} = state.modalReducer;

	return {
		isOpen: isOpen,
		hasTitle: hasTitle,
		textOfTitle: textOfTitle,
		childOfModal: childOfModal
	}
}

const mapDispatchToProps = dispatch => {
	return {
		closeModal: () => dispatch(CloseModal())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(modalContainer);