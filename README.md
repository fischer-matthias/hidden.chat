[![Build](https://github.com/fischer-matthias/hidden.chat/workflows/Build/badge.svg)](https://github.com/fischer-matthias/hidden.chat/actions?query=workflow%3ABuild)
# hidden.chat - proof of concept
hidden.chat is an anonym pgp based chat for android. The server only saves the id, nickname and public key of the user in plain text. Every other information is fully encrypted with pgp.

## auth
1. client sends pre-login command to backend (only including the user id)
2. backend returns an encrypted login-token (with public key of user) (valid for 5min)
3. client requests new encrypted messages / sends encrypted messages with login-token

## LICENSE MIT
written with :two_hearts: in typescript and go.
