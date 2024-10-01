import { decryptData, encryptData } from "./encrypt";

// Store data in sessionStorage with encryption
export function storeToSessionStorage(objectName, object) {
  const encryptedData = encryptData(object);
  sessionStorage.setItem(objectName, encryptedData);
}

// Load and decrypt data from sessionStorage
export function loadFromSessionStorage(objectName) {
  if (typeof window !== "undefined" && sessionStorage) {
    const encryptedData = sessionStorage.getItem(objectName);
    if (encryptedData) {
      const decryptedData = decryptData(encryptedData);
      return decryptedData;
    }
  }
  return null;
}

// Remove item from sessionStorage
export const removeFromSessionStorage = (objectName) => {
  sessionStorage.removeItem(objectName);
};
