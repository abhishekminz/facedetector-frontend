import React from 'react';
import './LinkForm.css';
const LinkForm = ({onUrlInput, onButtonSubmit}) => {
    return(
        <div>
            <p className='f3'>{'This Magic Brain will detect faces in your pictures. Give it a try.'}</p>
            <div className='form center pa4 br3 shadow-5'>
                <input onChange={onUrlInput} className='f4 pa2 w-70 center' type='text' ></input>
                <button onClick={onButtonSubmit} className='w-30 pointer grow f4 link ph4 pv2 dib white bg-light-purple'>Detect</button>
            </div>
        </div>
    );
}

export default LinkForm;