import { Dispatch, SetStateAction } from "react";

export type MessageStatus = 'send' | 'sending' | 'sent' | 'thanks' | 'noempty' | 'error';
export interface SliderNavParams {
    wellcome: {
        zIndex: number,
        animate: {},
        opacity: number,
    },
    about: {
        zIndex: number,
        animate: {},
        opacity: number,
    },
    water: {
        zIndex: number,
        animate: {},
        opacity: number,
    },
    skills: {
        zIndex: number,
        animate: {},
        opacity: number,
    },
    particles: {
        zIndex: number,
        animate: {},
        opacity: number,
    },
    contact: {
        zIndex: number,
        animate: {},
        opacity: number,
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
        maxLength: number,
        error: string
    },
    phone: {
        value: any,
        touched: boolean,
        valid: boolean,
        maxLength: number,
        error: string
    },
    email: {
        value: string,
        touched: boolean,
        valid: boolean,
        maxLength: number,
        error: string
    },
    message: {
        value: string,
        touched: boolean,
        valid: boolean,
        maxLength: number,
        error: string
    }
}

export interface ShapeBenderTransition {
    duration: number,
    ease: string,
    times: number[],
    repeat: any,
    repeatDelay: number,
    bounce: number
}

export interface ChartData {
    years: number[],
    labels: string[],
    skills: {name: string, level: number[]}[],
    bgColor: string[],
    borderColor: string[],
}

export interface InputProps {
    type: string,
    name: string,
    id?: string,
    required?: boolean,
    value: string | number,
    onChange?: any,
    onFocus?: any,
    maxLength: number,
    onBlur?: any,
    formInput: any,
    setFormInput: any,
    className: string,
    invalid: boolean,
    setIsSent: boolean,
    isSent: boolean,
    placeholder?: string,
    error?: string,
}

export interface ParallaxD {
    setParalaxLayer: Dispatch<SetStateAction<number>>
    sideBarScrollPosition: number
    isMobile: boolean
}