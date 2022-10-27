import { useState } from 'react';
import {inputChangedHandler} from '../../helpers/universalFunctions'
import {InputProps} from '../../interfaces/interfaces'

import classes from './contact.module.scss';

const Input = (props: InputProps): JSX.Element=> {
    const inputElement = props.formInput[props.name]
    const animateOut = classes.LabelAnimateOut
    const animateIn = classes.LabelAnimateIn
    const [label, setLabel] = useState<string>('')
    const inputClasses = {
        valid: classes.FormInput,
        invalid: [classes.FormInput, classes.InvalidInput].join(' '),
    };

    const animateOutHandler = (e: React.FormEvent<HTMLInputElement>) => e.currentTarget.value ? '' : setLabel(animateIn)

    return (
        <div className={inputElement.valid ? inputClasses.valid : inputClasses.invalid}>
            <label htmlFor={props.name} className={label}>{props.name}</label>
            <input 
                type={props.type}
                name={props.name}
                id={props.name}
                required={props.required}
                value={props.value}
                onChange={e => {inputChangedHandler(e, props.name, props.formInput, props.setFormInput)}}
                onFocus={() => setLabel(animateOut)}
                maxLength={props.maxLength}
                onBlur={(e) => animateOutHandler(e)}/>
            {!inputElement.valid && <span>{inputElement.error}</span>}
        </div>
    );
};

export default Input;
