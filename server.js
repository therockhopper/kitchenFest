const express = require('express')
const http =  require('axios')
const IngestSDK = require('@ingest/ingest-node-sdk')
const app = express()
let Ingest

let client_id, client_secret, grant_type, client_scopes;
let request, requestOptions, authUrl

grant_type = '?grant_type=client_credentials';
client_id = '&client_id=wLYAQxO1frjJ8bzNrdPJ';
client_secret = '&client_secret=WmI2gUy4YvoO1i7PvStTcO4VAZO1u3MzEctt7upB';
client_scopes = '&scope=all';

authUrl = 'https://login.ingest.io/token' + grant_type + client_id + client_secret + client_scopes;

http.post(authUrl).then(
  resp => {
    Ingest = new IngestSDK({
      token: `Bearer ${resp.data.access_token} `,
    })
  },
  error => {
    console.log(error)
  })

/**
 * Get all videos
 */
app.get('/api/all', (req, res) => {
  return Ingest.Videos.getAll(null, null, (error, data ) => { 
    if (error) {
      return res.status(500).send(); 
    }
    return res.json({
      data: data.data
    })
  }) 
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
