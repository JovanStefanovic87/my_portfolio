import { useState, useEffect } from 'react';
import {inputChangedHandler} from '../../helpers/universalFunctions'

import classes from './contact.module.scss';

const Input = (props) => {
    const animateOut = classes.LabelAnimateOut
    const animateIn = classes.LabelAnimateIn
    const [label, setLabel] = useState('')
    const inputClasses = {
        valid: classes.FormInput,
        invalid: [classes.FormInput, classes.InvalidInput].join(' '),
    };

    const maxLengthCheck = (element) => {
        if (element.target.type === 'number') {
            if (element.target.value.length > element.target.maxLength) {
                element.target.value = element.target.value.slice(0, element.target.maxLength);
            }
        }
    };

    const animateOutHandler = () => props.value ? '' : setLabel(animateIn)
    const validationHandler = () => props.formInput[props.name].valid ? inputClasses.valid : inputClasses.invalid

    return (
        <div className={validationHandler()}>
            <label htmlFor={props.name} className={label}>{props.name}</label>
            <input 
                type={props.type}
                name={props.name}
                id={props.name}
                required={props.required}
                value={props.value}
                onChange={e => inputChangedHandler(e, props.name, props.formInput, props.setFormInput)}
                onFocus={() => setLabel(animateOut)} 
                onBlur={() => animateOutHandler()}/>
        </div>
    );
};

export default Input;
