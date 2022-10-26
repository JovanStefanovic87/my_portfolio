import { Dispatch, SetStateAction } from "react";

export type MessageStatus = 'send' | 'sending' | 'sent' | 'thanks' | 'noempty' | 'error';
export interface SliderNavParams {
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
export type IsSent = boolean

export type parallaxData = number
  
export interface SetStateVoid {
    onClick: Dispatch<SetStateAction<void>>;
}

export interface SetParalaxLayer {
    setParalaxLayer: Dispatch<SetStateAction<number>>;
}

export interface ContactData {
    email: string,
    fullname: string,
    phone: number | undefined,
    message: string,
    subject: 'hello'
}

export interface FormInput {
    name: {
        value: string,
        touched: boolean,
        valid: boolean,
        maxLength: number
    },
    phone: {
        value: any,
        touched: boolean,
        valid: boolean,
        maxLength: number
    },
    email: {
        value: string,
        touched: boolean,
        valid: boolean,
        maxLength: number
    },
    message: {
        value: string,
        touched: boolean,
        valid: boolean,
        maxLength: number,
    }
}