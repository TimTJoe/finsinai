const requiredMsgText = "Please fill out this field.";
const invalidMsgText = "Invalid character. Please remove.";
const maxLengthMsgText = "Too many characters. Please reduce";


let currencyFieldPattern = {
  required: requiredMsgText,
  minLength: {
    value: 1,
    message: "Must be 1+ characters.",
  },
  pattern: {
    value: /^[,0-9]+$/i,
    message: invalidMsgText,
  },
};

let nameFieldPattern = {
  required: requiredMsgText,
  minLength: {
    value: 3,
    message: "Must be 3+ characters.",
  },
  pattern: {
    value: /^[a-zA-Z.()/,0-9 ]+$/i,
    message: invalidMsgText,
  },
};

let textFieldPattern = {
  required: requiredMsgText,
  minLength: {
    value: 3,
    message: "Must be 3+ characters.",
  },
  pattern: {
    value: /^[a-zA-Z. ]+$/i,
    message: "Only letters accepted.",
  },
};

let passwordFieldPattern = {
  required: requiredMsgText,
  minLength: {
    value: 8,
    message: "Password must be 8+ characters.",
  },
  maxLength: {
    value: 25,
    message: maxLengthMsgText,
  },
};

let emailFieldPattern = {
  required: requiredMsgText,
  pattern: {
    value: /\S+@\S+\.\S+/,
    message: "Email is invalid. Try again.",
  },
  minLength: {
    value: 4,
    message: "Email must be 4+ characters.",
  },
  maxLength: {
    value: 25,
    message: maxLengthMsgText,
  },
};

//PATTERN FOR USED BY REACT-HOOK-FORM LIBRARY
export const Pattern = {
  title: nameFieldPattern,
  fullname: textFieldPattern,
  lrd: currencyFieldPattern,
  usd: currencyFieldPattern,
  email: emailFieldPattern,
  password: passwordFieldPattern,
};

export default Pattern;
