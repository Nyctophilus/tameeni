export function validateSAID(id: any) {
  let type = id.substr(0, 1);
  let sum = 0;
  const _idLength = 10;
  const _type1 = "1";
  const _type2 = "2";
  id = id.trim();
  if (
    isNaN(parseInt(id)) ||
    id.length !== _idLength ||
    (type !== _type2 && type !== _type1)
  ) {
    return -1;
  }
  for (let num = 0; num < 10; num++) {
    const digit = Number(id[num]);
    if (num % 2 === 0) {
      const doubled = digit * 2;
      const ZFOdd = `00${doubled}`.slice(-2);
      sum += Number(ZFOdd[0]) + Number(ZFOdd[1]);
    } else {
      sum += digit;
    }
  }
  return sum % 10 !== 0 ? -1 : type;
}

export function validateLanguage(input: any) {
  // Regular expressions to match Arabic and English characters
  const arabicRegex = /[\u0600-\u06FF]/;
  const englishRegex = /[a-zA-Z]/;
  let char;

  for (let i = 0; i < input.length; i++) {
    char = input.charAt(i);

    if (arabicRegex.test(char)) {
      return "ar";
    }

    if (englishRegex.test(char)) {
      return "en";
    }
  }

  return "Unknown";
}

export function maskPhoneNumber(phoneNumber: string) {
  // Remove non-digit characters from the phone number
  const digitsOnly = phoneNumber?.replace(/\D/g, "");
  let maskedDigits, firstFourDigits, lastFourDigits;

  // Check if the phone number has at least four digits
  if (digitsOnly?.length >= 4) {
    firstFourDigits = digitsOnly.slice(0, 4);
    maskedDigits = "*".repeat(digitsOnly.length - 8);
    lastFourDigits = digitsOnly.slice(-4);
    return firstFourDigits + maskedDigits + lastFourDigits;
  }

  // If the phone number has less than four digits, return it as is
  return phoneNumber;
}

export function validatePhoneSAnumber(No: any) {
  // const saRegex = /^(?:\+?966|00966|05|5)(?:\d{9,10})$/;
  // const saRegex = /^((?:[+?0?0?966]+)(?:\s?\d{2})(?:\s?\d{7}))$/;
  const saRegex = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;

  return saRegex.test(No);
}

export function validateIBAN(No: string) {
  const ibanRegex = /^\d{2}[A-Z\d]{14}$/;
  const next4digitsRegex = /^\d{4}./;
  const maxLengthRegex = /^\d{16}$/;

  const isValid = ibanRegex.test(No);
  const nextDigitsVaild = next4digitsRegex.test(No);
  const maxLengthVaild = maxLengthRegex.test(No);

  return {
    isValid,
    nextDigitsVaild,
    maxLengthVaild,
  };
}

export function validateNumericInput(value: any) {
  value = value.replace(/\D/g, ""); // Replace non-digit characters with an empty string
  return value;
}
