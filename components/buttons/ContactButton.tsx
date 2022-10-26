import {MessageStatus} from '../../interfaces/interfaces'

import classes from './buttons.module.scss'

interface Props {
    messageStatus: MessageStatus;
}

const ContactButton: React.FC<Props> = (props: Props): JSX.Element => {
    const status = {
        send: {
            text: 'Send',
            className: ''
        },
        sending: {
            text: 'Sending',
            className: classes.Sending
        },
        sent: {
            text: 'Message sent',
            className: classes.Sent
        },
        thanks: {
            text: 'Thank You',
            className: classes.Sent
        },
        noempty: {
            text: 'Missing data',
            className: classes.NoEmpty
        },
        error: {
            text: 'Error',
            className: classes.NoEmpty
        }
    }


    return(
        <div className={classes.SubmitButtonContainer}>
            <button className={[classes.ContactButton, status[props.messageStatus].className].join(' ')}>
            {status[props.messageStatus].text}
                <svg width="220px" height="37px" viewBox="0 0 220 37">
                    <polyline points="196,1 195,36 1,37 1,1 195,1"/>
                    <polyline points="195,1 195,36 1,36 1,1 195,1"/>
                </svg>
            </button>
        </div>
    )
}

export default ContactButton