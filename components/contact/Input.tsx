import { useState, useEffect } from 'react';
import {inputChangedHandler} from '../../helpers/universalFunctions'

import classes from './contact.module.scss';

const Input = (props) : JSX.Element => {
    const animateOut = classes.LabelAnimateOut as string
    const animateIn = classes.LabelAnimateIn as string
    const [label, setLabel] = useState<string>('')
    const inputClasses = {
        valid: classes.FormInput,
        invalid: [classes.FormInput, classes.InvalidInput].join(' '),
        invalidLength: [classes.FormInput, classes.invalidLength].join(' '),
    };
    const [validated, setValidated] = useState(inputClasses.valid)

    const maxLengthCheck = (e: any) => {
            if (e.target.value.length > e.target.maxLength) {
                console.log('errpr')
            }
    };

    const animateOutHandler = () => props.value ? '' : setLabel(animateIn)
    const validationHandler = (e) => e.target.value > e.target.maxLength ? setValidated(inputClasses.invalid) : setValidated(inputClasses.valid)

    return (
        <div className={validated}>
            <label htmlFor={props.name} className={label}>{props.name}</label>
            <input 
                type={props.type}
                name={props.name}
                id={props.name}
                required={props.required}
                value={props.value}
                onChange={e => {inputChangedHandler(e, props.name, props.formInput, props.setFormInput), validationHandler(e)}}
                onFocus={() => setLabel(animateOut)}
                pattern={props.pattern}
                maxLength={props.maxLength}
                onBlur={() => animateOutHandler()}/>
        </div>
    );
};

export default Input;
