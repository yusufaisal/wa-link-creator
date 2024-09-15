import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ContentCopy from '@mui/icons-material/ContentCopy';

import isEmpty from 'lodash/isEmpty';
import isFinite from 'lodash/isFinite';

import PhoneFieldWithCountry from '../../Components/PhoneFieldWithCountry';
import useFormEffect from '../../Hooks/useFormEffect';
import { linkGenerator } from '../../Utils/generator';

import logo from '../../assets/wa.png';

import './Home.styles.css';

const ErrorCode = {
    EMPTY_VALUE: 'EMPTY_VALUE',
    INVALID_INPUT: 'INVALID_INPUT'
}

const _onTextFieldChange = (formControl) => async (e) => {
    const { setValues } = formControl;

    setValues('phoneNumber', e.target.value);
};

const isValidNumber = (value) => {
    const isValid =  isFinite(Number(value));

    return isValid;
}

const _validateInput = (values) => {
    const { phoneNumber: value} = values;
    
    if (isEmpty(value)) throw ErrorCode.EMPTY_VALUE;
    if (!isValidNumber(value)) throw ErrorCode.INVALID_INPUT;
}


function unsecuredCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
}

const _onCopyHandler = (formControl, actions) => async () => {
    const { showErrorMessage, showSuccessMessage} = actions;
    const { values } = formControl;

    try {
        await _validateInput(values);

        const link = linkGenerator(values.phoneNumber);

        if (navigator.clipboard) {
            await navigator.clipboard.writeText(link);
        } else {
            unsecuredCopyToClipboard(link);
        }
        
        showSuccessMessage('Success copied link to your Clipboard');
    } catch (error) {
        //handle error
        console.warn(error);
        showErrorMessage('Invalid input!');
    }
}


const _renderTextField = (formControl, actions) => (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
    <PhoneFieldWithCountry 
        id="input-field" 
        label="WhatsApp Number" 
        variant="outlined" 
        sx={{ flex: 1 }}
        onChange={_onTextFieldChange(formControl)}
    />
    <IconButton aria-label="delete" size="large" onClick={_onCopyHandler(formControl, actions)}>
        <ContentCopy fontSize="inherit" />
    </IconButton>
    </Stack>
)

const Home = (props) => {
    const {actions} = props;
    const formControl = useFormEffect({
        phoneNumber: null
    });

    return (<React.Fragment>
        <div>
            <a href="https://web.whatsapp.com" target="_blank">
                <img src={logo} className="logo react" alt="React logo" />
            </a>
        </div>
        <h1>WA link creator</h1>
        {_renderTextField(formControl, actions)}
    </React.Fragment>
)};

export default Home