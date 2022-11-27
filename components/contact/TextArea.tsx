import { useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {inputChangedHandler} from '../../helpers/universalFunctions'
import { FormInput } from '../../interfaces/interfaces'

import classes from './contact.module.scss';

interface Props {
	formInput: FormInput;
	name: string;
	error: string;
	value: string | number | readonly string[];
	maxLength: number;
	setFormInput: React.Dispatch<React.SetStateAction<{}>>;
}

const TextArea = (props:Props): JSX.Element => {
    const [placeholder, setPlaceholder] = useState('YOUR MESSAGE HERE')
    const inputClasses = {
        valid: classes.TextArea,
        invalid: [classes.TextArea, classes.InvalidTextArea].join(' '),
    };
    const [style, setStyle] = useState(inputClasses.valid)

    useEffect(() => {
        props.formInput[props.name].valid ? setPlaceholder('YOUR MESSAGE HERE') : setPlaceholder(`I NEED YOUR THOUGHTS`)
        props.formInput[props.name].valid ? setStyle(inputClasses.valid) : setStyle(inputClasses.invalid)
    }, [props.error, props.formInput.message.value])

	return (
		<TextareaAutosize
			name={props.name}
			value={props.value}
			maxLength={props.maxLength}
			className={style}
			placeholder={placeholder}
			minRows={5}
			maxRows={6}
			onChange={e => inputChangedHandler(e, props.name, props.formInput, props.setFormInput)}
		/>
	);
};

export default TextArea;
