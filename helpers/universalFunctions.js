import { useEffect, useState } from 'react';

export function useDeviceDetect() {
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const userAgent = window.navigator === 'undefined' ? '' : navigator.userAgent;
        const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
        setMobile(mobile);
    }, []);

    return { isMobile };
}

export function inputChangedHandler(e, inputIdentifier, state, setState) {
    const updatedFormElement = updateObject(state[inputIdentifier], {
        value: e.target.value,
        valid: checkValidity(e.target.value, state[inputIdentifier]),
        touched: true,
    });

    setState(
        updateObject(state, {
            [inputIdentifier]: updatedFormElement,
        }),
    );
}

export function checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
        const pattern =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;
    }

    return isValid;
}




export function updateValidity(setState, state, key, value, valid, error) {
    setState({
        ...state,
        [key]: {
            value,
            valid,
            error,
        },
    });
}

export const updateObject = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties,
});

export const objArrayMap = (arry, key, i) => {
    const a = arry.map(a => a)
    return a[i][key]
}