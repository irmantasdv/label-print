import React, { useRef } from 'react'
import Button from '../components/UI/Button/Button'
import useInput from '../hooks/use-input';
import useValidation from '../hooks/use-Validation';

const UploadCsv = () => {   
    const {
        isValidEmail,
        invalidEmailMessage,
        invalidPasswodMessage,
        isValidPassword
    } = useValidation();

    const {
        inputValue: fileValue,
        inputValid: fileIsValid,
        inputError: fileError,
        inputValueChangeHandler: faileChangeHandler,
        inputBlurHandler: failBlurHandler,
        resetInput: resetFile
    } = useInput(isValidEmail);
    const fileRef = useRef();
    const uploadFileHandler = (e) => {
        e.preventDefault();
        if(1  == 1){
            resetFile();
        }



    }
    return (
        <form className='container-sm p-5' onSubmit={uploadFileHandler}>
            <div className="mb-3">
                <label for="uplodCsv" className="form-label">Upload CSV</label>
                <input
                    type="file"
                    className="form-control"
                    id="uplodCsv"
                    aria-describedby="csvHelp"
                    value={fileValue}
                    onChange={faileChangeHandler}
                    onBlur={failBlurHandler}/>
                <div id="csvHelp" className="form-text">Upload file here</div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default UploadCsv
