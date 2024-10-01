import { decryptData, encryptData } from "./encrypt";

export const clearFromLocalStorage = (objectName) => {
  localStorage.removeItem(objectName);
};

export function storeToLocalStorage(objectName, object) {
  const encryptedData = encryptData(object);
  localStorage.setItem(objectName, encryptedData);
}

export function loadFromLocalStorage(objectName) {
  if (typeof window !== "undefined" && localStorage) {
    const encryptedData = localStorage.getItem(objectName);
    if (encryptedData) {
      const decryptedData = decryptData(encryptedData);
      return decryptedData;
    }
  }
  return null;
}
