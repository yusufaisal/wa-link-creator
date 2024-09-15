import * as React from 'react'

const reducerActions = {
    SET_TYPE: 'SET_TYPE',
    SET_MESSAGE: 'SET_MESSAGE'
};

const type = {
    SUCCESS: 'success',
    INFO: 'info',
    ERROR: 'error'
};

const initialState = {
    message: null,
    type: type.SUCCESS
};

function snackbarReducer(state, action) {
    if (action.type === reducerActions.SET_TYPE ) {
        return {
            ...state,
            type: action.value
        };
    } else if (action.type === reducerActions.SET_MESSAGE) {
        return {
            ...state,
            message: action.value
        };
    }
    throw Error('Unknown action: '+ action.type);
}

const useSnackbar = () => {
    const [state, dispatch] = React.useReducer(snackbarReducer, initialState);

    const setSnackbarVariant = (variant) => {
        dispatch({
            type: reducerActions.SET_TYPE,
            value: variant
        })
    };

    const showErrorMessage = (message) => {
        setSnackbarVariant(type.ERROR)
        dispatch({
            type: reducerActions.SET_MESSAGE,
            value: message
        })
    };

    const showSuccessMessage = (message) => {
        setSnackbarVariant(type.SUCCESS);
        dispatch({
            type: reducerActions.SET_MESSAGE,
            value: message
        })
    };

    const clearMessage = () => {
        dispatch({
            type: reducerActions.SET_MESSAGE,
            value: null
        })
    }

    return {
        state,
        actions: {
            showErrorMessage,
            showSuccessMessage,
            clearMessage
        }
    }
};

export default useSnackbar;