import * as React from 'react';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';


const useFromEffect = (formValues) => {
    const [values, setValues] = React.useState(formValues);

    const setValueHandler = (inputParams, newValue) => {

        if (isPlainObject(inputParams)){
            setValues(prevState => ({
                ...prevState,
                ...inputParams
            }))
        } else if (isString(inputParams)){
            setValues(prevState => ({
                ...prevState,
                [inputParams]: newValue
            }))
        } else {
            throw 'Invalid Input'
        }
        
    }
    return {
        values,
        setValues: setValueHandler
    }
};

export default useFromEffect