export function storeToLocalStorage(key: string, value: any): void;
export function loadFromLocalStorage<T>(key: string): T | null; // Specify a generic type for better type safety
export function clearFromLocalStorage(key: string): void;

export function storeToSessionStorage(key: string, value: any): void;
export function loadFromSessionStorage<T>(key: string): T | null; // Specify a generic type for better type safety
export function removeFromSessionStorage(key: string): void;

export function storeToCookie(key: string, value: any, options?: { expires?: number | Date; path?: string; }): void;
export function loadFromCookie<T>(key: string): T | null; // Specify a generic type for better type safety
export function clearFromCookie(key: string): void;