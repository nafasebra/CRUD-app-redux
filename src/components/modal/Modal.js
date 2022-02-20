import { Fragment } from 'react';

import '../Theme.css';
import './Modal.css';


function Modal(props) {

	const {
		children, isOpen, title, toCloseModal
	} = props

	return (
		<Fragment>
			<div className={isOpen ? "modal_container open" : "modal_container"}>
				<div className={isOpen ? "modal open" : "modal"}>
					<div className="modal_header">
						{
							<h3 className="modal_title">{title}</h3>
						}
						<button
							className="btn_icon"
							onClick={() => toCloseModal()}
						>
							<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
						</button>
					</div>
					<div className="modal_body">
						{children}
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Modal;
