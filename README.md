# browser-storage-helpers

`browser-storage-helpers` is a utility package for managing cookies, `localStorage`, and `sessionStorage` with encryption and decryption support. It includes methods for securely storing, loading, and removing data using modern browser storage mechanisms.

## Installation

To install the package, run the following command:

```bash
npm install browser-storage-helpers backticks
```

## Features

Securely store, load, and remove data in cookies, localStorage, and sessionStorage.
Encrypt and decrypt stored data using XOR encryption.
Built-in helpers for easy integration with browser storage mechanisms.


## Usage

Importing the Helpers
You can import the specific helpers as needed:

import { storeToLocalStorage, loadFromLocalStorage, clearFromLocalStorage } from 'browser-storage-helpers';
import { storeToSessionStorage, loadFromSessionStorage, removeFromSessionStorage } from 'browser-storage-helpers';
import { storeToCookie, loadFromCookie, clearFromCookie } from 'browser-storage-helpers';


## LocalStorage Helper Methods

storeToLocalStorage - 
Stores encrypted data in localStorage.

storeToLocalStorage('user', { name: 'John Doe', email: 'john@example.com' });


loadFromLocalStorage - 
Loads and decrypts data from localStorage.

const user = loadFromLocalStorage('user');
console.log(user); # { name: 'John Doe', email: 'john@example.com' }


clearFromLocalStorage - 
Removes the specified item from localStorage.

clearFromLocalStorage('user');


## SessionStorage Helper Methods

storeToSessionStorage - 
Stores encrypted data in sessionStorage.

storeToSessionStorage('sessionData', { sessionId: '12345' });


loadFromSessionStorage - 
Loads and decrypts data from sessionStorage.

const sessionData = loadFromSessionStorage('sessionData');
console.log(sessionData); # { sessionId: '12345' }


removeFromSessionStorage - 
Removes the specified item from sessionStorage.

removeFromSessionStorage('sessionData');



## Cookie Helper Methods

storeToCookie - 
Stores encrypted data in a cookie. You can specify options like path and expiration.

storeToCookie('token', { authToken: 'abc123' }, { path: '/', maxAge: 3600 });


loadFromCookie - 
Loads and decrypts data from a cookie.

const tokenData = loadFromCookie('token');
console.log(tokenData); # { authToken: 'abc123' }


clearFromCookie - 
Removes the specified cookie.

clearFromCookie('token', { path: '/' });



## Encryption and Decryption

The data stored using localStorage, sessionStorage, and cookies is automatically encrypted using XOR encryption. You can customize the encryption by modifying the encryption key in your .env or project environment variables.

By default, the encryption key is fetched from the environment variable ENCRYPTION_SECRET_KEY.


## Environment Variables
The package uses the environment variable ENCRYPTION_SECRET_KEY for encrypting and decrypting data. You should define this variable in your .env file or environment configuration.

For example:

## Vite.js (.env):
VITE_APP_ENCRYPTION_SECRET_KEY=mySuperSecretKey123

## React (CRA) (.env):
REACT_APP_ENCRYPTION_SECRET_KEY=mySuperSecretKey123

## Vue.js (.env):
VUE_APP_ENCRYPTION_SECRET_KEY=mySuperSecretKey123

##Angular (environment.ts):

export const environment = {
  production: false,
  ENCRYPTION_SECRET_KEY: 'mySuperSecretKey123'
};