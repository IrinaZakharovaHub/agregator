import Validator from '../props/Validator';

export const MIN = (val: number) => {
    return {
        type: 'MIN',
        val
    }
}
export const MAX = (val: number) => {
    return {
        type: 'MAX',
        val
    }
}

export const validate = (value: string, validators: Validator[]):boolean => {
    let isValid = true;
    for (const validator of validators) {
        if (validator.type === 'MIN') {
            isValid = isValid && value.trim().length >= validator.val;
        }
        if (validator.type === 'MAX') {
            isValid = isValid && value.trim().length <= validator.val;
        }
    }
    return isValid;
}