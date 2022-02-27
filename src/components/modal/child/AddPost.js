import React from 'react';
import { useState } from 'react';
import { v4 as uuidu4 } from 'uuid';

import '../../Theme.css';

import { CreatePost } from '../../../actions/postAction'
import { CloseModal } from '../../../actions/modalAction'
import { useDispatch } from 'react-redux';


const Addpost = () => {

    const dispatch = useDispatch();

    const [ entryPostInfos, setEnteryPostInfos ] = useState({
        id: 0,
        imageURL: 'gdfgdfg',
        title: '',
        topics: [],
        description: ''
    });

    const changeImageURL = (e) => {
        let value = e.target.files[0];
        if(value){
            value = value.name;
            setEnteryPostInfos(prev => {
                return {
                    ...prev,
                    imageURL: value
                }
            })
        }
    }

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
            <label htmlFor="uploadImagePost" className="imageupload_label">
                <input 
                    type="file" 
                    id="uploadImagePost" 
                    onChange={(e) => changeImageURL(e)}    
                />
                <div className="imageupload_section">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <p>
                        {entryPostInfos.imageURL ? entryPostInfos.imageURL : 'click to upload file'}
                    </p>
                </div>
            </label>

            <input type="text" placeholder='post title' className="form_input" />
            
            <input type="text" placeholder='post topics' className="form_input" />
            
            <textarea placeholder='post description' className="form_input" rows="10"></textarea>
            
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
