import { useState } from 'react'

const useInput = (validateInputValue) => {

    const [inputValue, setInputValue] = useState('');
    const [inputTouched, setInputTouched] = useState(false);
    const inputValid = validateInputValue(inputValue);
    const inputError = !inputValid && inputTouched;

    const inputValueChangeHandler = (event) => {
        setInputValue(event.target.value);
    }
    const inputBlurHandler = (event) => {
        setTimeout(() => {
            setInputTouched(true);
        }, "2000")

    }
    const resetInput = () => {
        setInputValue('');
        setInputTouched(false);
    }

    return {
        inputValue,
        inputValid,
        inputError,
        inputValueChangeHandler,
        inputBlurHandler,
        resetInput
    };
}

export default useInput