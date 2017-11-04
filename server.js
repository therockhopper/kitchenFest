const express = require('express')
const http =  require('axios')
const IngestSDK = require('@ingest/ingest-node-sdk')
const app = express()
let Ingest

login()


function login() {
  var client_id, client_secret, grant_type, client_scopes;
  var request, requestOptions, authUrl

  grant_type = '?grant_type=client_credentials';
  client_id = '&client_id=wLYAQxO1frjJ8bzNrdPJ';
  client_secret = '&client_secret=WmI2gUy4YvoO1i7PvStTcO4VAZO1u3MzEctt7upB';
  client_scopes = '&scope=all';

  authUrl = 'https://login.ingest.io/token' + grant_type + client_id + client_secret + client_scopes;

  console.log(authUrl)

  http.post(authUrl).then(
    resp => {
      Ingest = new IngestSDK({
        token: `Bearer ${resp.data.access_token} `,
      })
      getAll()
    },
    error => {
      console.log(error)
    })
}


function getAll() {
  Ingest.Videos.getAll(null, null, (error, data ) => {
    console.log(data)
  })
}



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
