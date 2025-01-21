# browser-storage-helpers

`browser-storage-helpers` is a utility package for managing cookies, `localStorage`, and `sessionStorage` with encryption and decryption support. It includes methods for securely storing, loading, and removing data using modern browser storage mechanisms.

## Installation

To install the package, run the following command:

```bash
npm install browser-storage-helpers
```

## Features

- Securely store, load, and remove data in cookies, localStorage, and sessionStorage.
- Encrypt and decrypt stored data using XOR encryption.
- Built-in helpers for easy integration with browser storage mechanisms.
- TypeScript support.


## Usage

Importing the Helpers
You can import the specific helpers as needed:

```bash
import { storeToLocalStorage, loadFromLocalStorage, clearFromLocalStorage } from 'browser-storage-helpers';
import { storeToSessionStorage, loadFromSessionStorage, removeFromSessionStorage } from 'browser-storage-helpers';
import { storeToCookie, loadFromCookie, clearFromCookie } from 'browser-storage-helpers';
```


## LocalStorage Helper Methods

storeToLocalStorage - 
Stores encrypted data in localStorage.
```bash
storeToLocalStorage('user', { name: 'John Doe', email: 'john@example.com' });
```

loadFromLocalStorage - 
Loads and decrypts data from localStorage.
```bash
const user = loadFromLocalStorage('user');
console.log(user); # { name: 'John Doe', email: 'john@example.com' }
```

clearFromLocalStorage - 
Removes the specified item from localStorage.
```bash
clearFromLocalStorage('user');
```

## SessionStorage Helper Methods

storeToSessionStorage - 
Stores encrypted data in sessionStorage.
```bash
storeToSessionStorage('sessionData', { sessionId: '12345' });
```

loadFromSessionStorage - 
Loads and decrypts data from sessionStorage.
```bash
const sessionData = loadFromSessionStorage('sessionData');
console.log(sessionData); # { sessionId: '12345' }
```

removeFromSessionStorage - 
Removes the specified item from sessionStorage.
```bash
removeFromSessionStorage('sessionData');
```


## Cookie Helper Methods

storeToCookie - 
Stores encrypted data in a cookie. You can specify options like path and expiration.
```bash
storeToCookie('token', { authToken: 'abc123' }, { path: '/', maxAge: 3600 });
```

loadFromCookie - 
Loads and decrypts data from a cookie.
```bash
const tokenData = loadFromCookie('token');
console.log(tokenData); # { authToken: 'abc123' }
```

clearFromCookie - 
Removes the specified cookie.
```bash
clearFromCookie('token', { path: '/' });
```


## Encryption and Decryption

The data stored using localStorage, sessionStorage, and cookies is automatically encrypted using XOR encryption. You can customize the encryption by modifying the encryption key in your .env or project environment variables.

By default, the encryption key is fetched from the environment variable ENCRYPTION_SECRET_KEY.


## Environment Variables
The package uses the environment variable ENCRYPTION_SECRET_KEY for encrypting and decrypting data. You should define this variable in your .env file or environment configuration.

For example:

## Vite.js (React, Vue) (.env):
```bash
VITE_APP_ENCRYPTION_SECRET_KEY=mySuperSecretKey123
```
## React (CRA) (.env):
```bash
REACT_APP_ENCRYPTION_SECRET_KEY=mySuperSecretKey123
```

## Vue.js (.env):
```bash
VUE_APP_ENCRYPTION_SECRET_KEY=mySuperSecretKey123
```

## Angular (environment.ts):
```bash
export const environment = {
  production: false,
  ENCRYPTION_SECRET_KEY: 'mySuperSecretKey123'
};
```