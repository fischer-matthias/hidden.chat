[![Build](https://github.com/fischer-matthias/hidden.chat/workflows/Build/badge.svg)](https://github.com/fischer-matthias/hidden.chat/actions?query=workflow%3ABuild) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/fischer-matthias/hidden.chat/blob/master/LICENSE)
# hidden.chat - because why not?
hidden.chat is an anonym pgp based chat for android. The server only saves the id and public key of the user in plain text. Every other information is fully encrypted with pgp and will be deleted if its not necessary anymore. Getting new contacts is only possible by scanning the userid as a qrcode from another device.

## auth
1. client sends pre-login command to backend (only including the user id)
2. backend returns an encrypted login-token (with public key of user) (valid for 5min)
3. client requests new encrypted messages / sends encrypted messages with login-token

## registration
1. client generates their own pgp key pair
2. client requests the public pgp key of the server
3. client creates a registration-request with their own public key
4. server generates a userid and sends it to the client
5. client is now able to sign in

## development
#### client
```
cd client/
npm install
npx ng serve
```

#### server
```
// TODO
```

## LICENSE MIT
written with :two_hearts: in typescript and go.
