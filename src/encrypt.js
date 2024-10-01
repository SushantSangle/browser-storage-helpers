const getSecretKey = () => {
  if (
    typeof import.meta !== "undefined" &&
    import.meta.env &&
    import.meta.env.VITE_APP_ENCRYPTION_SECRET_KEY
  ) {
    // For Vite.js (React, Vue)
    return import.meta.env.VITE_APP_ENCRYPTION_SECRET_KEY;
  } else if (process.env.REACT_APP_ENCRYPTION_SECRET_KEY) {
    // For Create React App (CRA)
    return process.env.REACT_APP_ENCRYPTION_SECRET_KEY;
  } else if (process.env.VUE_APP_ENCRYPTION_SECRET_KEY) {
    // For Vue CLI
    return process.env.VUE_APP_ENCRYPTION_SECRET_KEY;
  } else if (
    typeof window !== "undefined" &&
    window.environment &&
    window.environment.ENCRYPTION_SECRET_KEY
  ) {
    // For Angular (using window.environment, or define your own method)
    return window.environment.ENCRYPTION_SECRET_KEY;
  }
  return "default_key"; // Fallback if no key found
};

const secretKey = getSecretKey()

export const xorEncryptDecrypt = (input) => {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    const inputCode = input.charCodeAt(i);
    const secretCode = secretKey.charCodeAt(i % secretKey.length);
    const xor = inputCode ^ secretCode;
    output += String.fromCharCode(xor);
  }
  return output;
};

export const encryptData = (data) => {
  if (data !== undefined) {
    const stringField = JSON.stringify(data);
    return xorEncryptDecrypt(stringField);
  }
};

export const decryptData = (encryptedData) => {
  try {
    const decryptedData = xorEncryptDecrypt(encryptedData);
    return JSON.parse(decryptedData);
  } catch {
    return null;
  }
};
