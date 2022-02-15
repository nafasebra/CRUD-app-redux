import React from 'react'
import { connect } from 'react-redux';

import Modal from '../components/modal/Modal'
import Addpost from '../components/modal/AddPost'

import {OpenModal, CloseModal} from '../actions/modalAction';


function modalContainer({ isOpen, hasTitle, textOfTitle }) {
  return (
    <Modal isOpen={isOpen} hasTitle={hasTitle} title={textOfTitle}>
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
  return{
    openModal: () => dispatch(OpenModal()),
    CloseModal: () => dispatch(CloseModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(modalContainer);