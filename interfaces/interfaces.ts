import { Dispatch, SetStateAction } from "react";

export type MessageStatus = 'send' | 'sending' | 'sent' | 'thanks' | 'noempty' | 'error';
export type SliderNavParams = {
    wellcome: {
        zIndex: number,
        animate: {}
    },
    about: {
        zIndex: number,
        animate: {}
    },
    water: {
        zIndex: number,
        animate: {}
    },
    skills: {
        zIndex: number,
        animate: {}
    },
    particles: {
        zIndex: number,
        animate: {}
    },
}

export type parallaxData = number
  
export type SetStateVoid = {
    onClick: Dispatch<SetStateAction<void>>;
}

export type SetParalaxLayer = {
    setParalaxLayer: Dispatch<SetStateAction<number>>;
}

export type ContactData = {
    email: string,
    fullname: string,
    phone: number | undefined,
    message: string,
    subject: 'hello'
}