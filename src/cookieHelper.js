import cookie from "react-cookies";
import { decryptData, encryptData } from "./encrypt";

export function storeToCookie(cookieName, value, options = { path: "/" }) {
  const encryptedData = encryptData(value);
  cookie.save(cookieName, encryptedData, options);
}

export function loadFromCookie(cookieName) {
  const encryptedData = cookie.load(cookieName);
  if (encryptedData) {
    return decryptData(encryptedData);
  }
  return null;
}

export const clearFromCookie = (cookieName, options = { path: "/" }) => {
  cookie.remove(cookieName, options);
};
