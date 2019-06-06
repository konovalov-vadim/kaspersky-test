const required = (value: any) => {
  if (value) {
    if (value.length === 0) {
      return 'This field  should be filled out';
    }
    return undefined;
  } else {
    return 'This field  should be filled out';
  }
};

const validateLength = (min: number, max: number = Infinity) => (value: string) =>
  value.length > max || value.length < min ? `Not valid length, only ${min}-${max} characters needed` : undefined;

const validateNumber = (min: number, max: number = Infinity) => (value: number) =>
  value > max || value < min ? `Not valid number, it should be between ${min} and ${max}` : undefined;

const validateISBN = (value: string) => {
  if (value) {
    if (value.includes('-')) {
      return 'Please do not use "-"';
    }

    if (value.length !== 13) {
      return 'Incorrect code length, 13 character needed';
    }

    if (!value.startsWith('978') && !value.startsWith('979')) {
      return 'Code should starts with 978 or 979';
    }

    const middle = value.slice(3, -1);
    const control = value[value.length - 1];
    let sum = 0;

    middle.split('').forEach((el, i) => {
      sum += (10 - i) * +el;
    });

    if ((sum + (control.toLowerCase() === 'x' ? 10 : +control)) % 11 !== 0) {
      return 'Not valid code';
    }

    return undefined;
  }

  return undefined;
};

const composeValidators = (...validators: any[]) => {
  console.log(validators);
  return (value: any) => validators.reduce((error, validator) => error || validator(value), undefined);
};

export default {required, validateISBN, composeValidators, validateLength, validateNumber};
