##Responsability of the serber and client

####Server

- Produce the token 
- Send the token to the client
- Read, decode and verify the token
- Make the payload available to the rest of the api

#### Client

- Store token
- Send token on every request
- Destroy the token on logout