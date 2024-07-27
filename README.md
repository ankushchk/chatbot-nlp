Using Postman or curl to test our chatbot. Here’s an example using curl:

```sh
curl -X POST http://localhost:3000/chat -H "Content-Type: application/json" -d '{"message": "hello"}'
```
