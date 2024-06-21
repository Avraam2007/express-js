import express from 'express';
import 'dotenv/config';

const app = express();

app.route('/')
  .get('/', (req, res) => {
    res.send('<b>Hello World!</b>')
  })
  .post('/', (req, res) => {
    res.send('Got a POST request')
  })
  .put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })
  .delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
  })  

app.get('/test', (req, res) => {
  res.send('WOW!')
})

app.get('/settings', (req, res) => {
  res.send(req.params)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})