import React, { useState } from 'react';
import { v4 as uuidu4 } from 'uuid';
import { CreatePost } from '../../../actions/postAction'
import { CloseModal } from '../../../actions/modalAction'
import { useDispatch } from 'react-redux';

import '../../Theme.css';


const Addpost = () => {

	const dispatch = useDispatch();

	const [entryPostInfos, setEnteryPostInfos] = useState({
		id: 0,
		imageSrc: '',
		title: '',
		topics: [],
		description: ''
	});

	const submitForm = () => {
		setEnteryPostInfos(prev => {
			return {
				...prev,
				id: uuidu4()
			}
		})
		dispatch(CreatePost(entryPostInfos));
		dispatch(CloseModal());
	}


	return (
		<div className="text_light">
			<input
				type="text"
				placeholder='Image URL'
				value={entryPostInfos.imageURL}
				onChange={(e) => {
					setEnteryPostInfos(prev => {
						return {
							...prev,
							imageSrc: e.target.value
						}
					})
				}}
				className="form_input"
			/>

			<input
				type="text"
				placeholder='post title'
				value={entryPostInfos.title}
				onChange={(e) => {
					setEnteryPostInfos(prev => {
						return {
							...prev,
							title: e.target.value
						}
					})
				}}
				className="form_input"
			/>

			<input
				type="text"
				placeholder='post topics'
				className="form_input"
			/>

			<textarea
				placeholder='post description'
				className="form_input"
				rows="10"
				onChange={(e) => {
					setEnteryPostInfos(prev => {
						return {
							...prev,
							description: e.target.value
						}
					})
				}}
			>{entryPostInfos.description}</textarea>

			<button
				className="btn_blue"
				onClick={() => submitForm()}
			>
				<span>Create post</span>
			</button>
		</div>
	);
}

export default Addpost;
