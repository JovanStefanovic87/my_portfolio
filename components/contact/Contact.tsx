import { useState, useRef, useEffect } from 'react';
import {updateValidity} from '../../helpers/universalFunctions'
import { sendMessage } from '../../api/sendMessage';
import Input from './Input'
import initState from './initState'
import TextArea from './TextArea';
import ContactButton from '../buttons/ContactButton';
import {ContactData} from '../../interfaces/interfaces'

import classes from './contact.module.scss'

const Contact = () => {
    const isComponentLoad = useRef(true);
    const form = useRef();
    const [formInput, setFormInput] = useState(initState);
    const [message, setMessage] = useState<ContactData>();
    const [messageStatus, setMessageStatus] = useState('send');
    const [isSent, setIsSent] = useState(false)

    const inputValidityHandler = (inputName) => {
        updateValidity(setFormInput, formInput, inputName, '', false);
    };

    useEffect(() => {
        if (isComponentLoad.current) {
            isComponentLoad.current = false;
            return;
        }
        sendEmail();
    }, [message]);

    const onSubmit = (e: {preventDefault: () => void;}) => {
        e.preventDefault();
        const formData: ContactData = {
            email: formInput.email.value.trim(),
            fullname: formInput.name.value.trim(),
            phone: formInput.phone.value.trim(),
            message: formInput.message.value.trim(),
            subject: 'hello',
        };
        if (!formInput.name.value.trim()) {
            inputValidityHandler('name');
            noEmptyCellsHandler()
        } else if (!formInput.phone.value.trim()) {
            inputValidityHandler('phone');
            noEmptyCellsHandler()
        } else if (!formInput.email.value.trim()) {
            inputValidityHandler('email');
            noEmptyCellsHandler()
        } else if (!formInput.message.value.trim()) {
            inputValidityHandler('message');
            noEmptyCellsHandler()
        }else {
            setMessage(formData);
            setMessageStatus('sending')
        }
    }

    const sendEmail = () => {
        const api = sendMessage(message)
            .then(() => {
                messageSentHandler();
                setFormInput(initState);
                setIsSent(true)
            })
            .catch(() => {
                setMessageStatus('error')
            });
        api;
    }

    const messageSentHandler = () => {
        setMessageStatus('sent');
        setTimeout(() => {
            setMessageStatus('thanks');
        }, 2000);
        setTimeout(() => {
            setMessageStatus('send');
        }, 4000)
    }

    const noEmptyCellsHandler = () => {
        setMessageStatus('noempty');
        setTimeout(() => {
            setMessageStatus('send');
        }, 2000)
    }

    return(
        <form ref={form} className={classes.ContactContainer} onSubmit={onSubmit}>
            <fieldset>
                <legend>CONTACT ME</legend>
                <Input 
                    type='text' 
                    className={classes.TextInput} 
                    name='name' 
                    value={formInput.name.value}
                    maxLength={formInput.name.maxLength}
                    invalid={!formInput.name.valid}
                    formInput={formInput}
                    setFormInput={setFormInput}
                />
                <Input 
                    type='number' 
                    className={classes.TextInput} 
                    name='phone'
                    value={formInput.phone.value}
                    maxLength={formInput.phone.maxLength}
                    invalid={!formInput.phone.valid}
                    formInput={formInput}
                    setFormInput={setFormInput}
                />
                <Input 
                    type='email' 
                    className={classes.TextInput} 
                    name='email'
                    value={formInput.email.value}
                    maxLength={formInput.email.maxLength}
                    invalid={!formInput.email.valid}
                    formInput={formInput}
                    setFormInput={setFormInput}
                />
                <TextArea 
                    name='message'
                    value={formInput.message.value}
                    maxLength={formInput.message.maxLength}
                    error={messageStatus}
                    formInput={formInput}
                    setFormInput={setFormInput}
                />
                <ContactButton messageStatus={messageStatus}/>
                <p style={{display: isSent ? 'block' : 'none'}} className={classes.MessageSentNotification}>Message sent. Thank You</p>
            </fieldset>
        </form>
    )
}

export default Contact