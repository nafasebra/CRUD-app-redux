import React from 'react'
import { connect } from 'react-redux';

import Modal from '../components/modal/Modal'
import Addpost from '../components/modal/AddPost'

import { OpenModal, CloseModal } from '../actions/modalAction';


function modalContainer(props) {

	const {
		isOpen, hasTitle, textOfTitle, closeModal
	} = props;

	return (
		<Modal
			isOpen={isOpen}
			isTitle={hasTitle}
			title={textOfTitle}
			toCloseModal={closeModal}
		>
			<Addpost />
		</Modal>
	)
}

const mapStateToProps = state => {
	return {
		isOpen: state.isOpen,
		hasTitle: state.hasTitle,
		textOfTitle: state.textOfTitle
	}
}

const mapDispatchToProps = dispatch => {
	return {
		openModal: () => dispatch(OpenModal()),
		closeModal: () => dispatch(CloseModal())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(modalContainer);