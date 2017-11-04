const express = require('express')
const IngestSDK = require('@ingest/ingest-node-sdk')
const app = express()

const Ingest = new IngestSDK({
  token: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovLyouaW5nZXN0LmlvIiwiY2lkIjoid0xZQVF4TzFmcmpKOGJ6TnJkUEoiLCJleHAiOjE1MTAwNjE2ODUsImp0aSI6IjY1ZmY4MTMwLTQ0ODAtNDg3Mi05MDI0LWI2MzMxZTgxODNjMiIsImlhdCI6MTUwOTgwMjQ4NSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5pbmdlc3QuaW8vcGVyc29uYWwiLCJudHciOiI5YWFiMTM2Ny1lY2U2LTRhNzItYWZjMS00NTBiMjFjN2NhNjAiLCJzY29wZSI6eyJhY3Rpb25zIjpbIiJdfSwic3ViIjoiMGU0OTQ1MDYtZGU2OS00OWJmLTllOWQtYTMzNDg1YWQxZWJmIn0.lt6A6vTWnxZ1irwghPOF8Zo2Edr_cfbDPCqYOYtqeoXpZwlZfHhJSeTfF1PlJfsbQpElMOIaBXBS6zkOvJyYrjpCuUGIaF6gi_M2IDzV4GMBtb7OqjTBgv2gSy4C5-wQSvE7gmEZBufkQQNEaG_fM3N-9_lyu8q2W6Koa7_ul6sPYJ6up4tH_b94bqVYO5WJZD0FEya4I42MrpcpDzzhyvaTyaP6FJZrKQ9p60FIAkSPWcE7U89KE8E_vFwd9t4ACQHqWBjxAaLP17WjPMEBvP8tA6U84Gd2Jlfbauqo0NIUnBrszQDaR-A0Z-UJVkqWeoTOvgLC5M9ZaQG4MThZQQ',
})

console.log(Ingest)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
