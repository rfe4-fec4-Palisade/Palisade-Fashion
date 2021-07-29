const express = require('express');
const axios = require('axios');
const port = 3000;
const app = express();
const path = require('path');
const { API_KEY } = require('../config.js');
// const atelier = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/'

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
// url: https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/

var getData = function(url) {
  const config = {
    'method': 'GET',
    'url': `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe${url}`,
    'headers': {'Authorization': `${API_KEY}`},
    'data': ''
  };
  return config;
}
// initial product request
app.get('/products', (req,res) =>{
  // console.log('req.params', req.params)
  let config = getData(req.url)
  console.log('PRODUCTS this is req.url',req.url)
  // console.log('hello testing from app.get')
  axios(config)
    .then((data)=>{
      console.log('axios get request is working')
      res.status(200).send(data.data);
    })
    .catch((err)=>{console.log('err:', err); res.status(404).send(err)})
})

// Req needed for Overview - ID
app.get('/products/:id', (req,res) =>{
  console.log('req.params', req.params)
  let config = getData(req.url)
  console.log('this is req.url',req.url)
  console.log('hello testing from app.get')
  axios(config)
    .then((data)=>{
      console.log('axios get request is working')
      res.status(200).send(data.data);
    })
    .catch((err)=>{console.log('err:', err); res.status(404).send(err)})
})

// Req needed for Overview: Styles
app.get('/products/:id/styles', (req,res) =>{
  console.log('req.params', req.params)
  let config = getData(req.url)
  console.log('this is req.url',req.url)
  console.log('hello testing from app.get')
  axios(config)
    .then((data)=>{
      console.log('axios get request is working')
      res.status(200).send(data.data);
    })
    .catch((err)=>{console.log('err:', err); res.status(404).send(err)})
})

//products/related
app.get('/products/:path/related', (req,res) =>{
  let config = getData(req.url)
  console.log('this is req.url',req.url)
  axios(config)
    .then((data)=>{
      console.log('The data:', data.data)
      res.status(201).send(data.data);
    })
    .catch((err)=>{console.log('err:', err); res.status(404).send(err)})
})

//reviews
//QUERY SHOULD LOOK LIKE THIS: https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/review?product_id=19092
// when requesting from client, make sure the url looks something like this: `/reviews?product_id=${id}`

app.get('/reviews', (req, res) => {
  let config = getData(req.url)
  axios(config)
    .then((data)=>{
      res.status(201).send(data.data);
    })
    .catch((err)=>{console.log('err:', err); res.status(404).send(err)})
});

app.post('/reviews', (req, res) => {
  let config = getData(req.url);
  config.data = req.body;
  config.method = 'POST';
  axios(config)
    .then((data)=>{
      res.status(201).send('posted!');
    })
    .catch((err)=>{console.log('err:', err); res.status(404).send(err)})
})

app.get('/reviews/meta', (req, res) => {
  let config = getData(req.url)
  axios(config)
    .then((data)=>{
      res.status(201).send(data.data);
    })
    .catch((err)=>{console.log('err:', err); res.status(404).send(err)})
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  let config = getData(req.url)
  config.data = req.body;
  config.method = 'PUT';
  axios(config)
    .then((data)=>{
      res.status(204).send(data.data);
    })
    .catch((err)=>{console.log('err:', err); res.status(404).send(err)})
});

app.put('/reviews/:review_id/report', (req, res) => {
  let config = getData(req.url)
  config.data = req.body;
  config.method = 'PUT';
  axios(config)
    .then((data)=>{
      res.status(204).send(data.data);
    })
    .catch((err)=>{console.log('err:', err); res.status(404).send(err)})
});

//Questions and Answers
//Example for Q&A  -> https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=19092
app.get('/qa/questions/', (req,res) =>{
  let config = getData(req.url)
  console.log('Q&A this is req.url', req.url)
  axios(config)
    .then((data)=>{
      res.status(201).send(data.data);
    })
    .catch((err)=>{console.log('err:', err); res.status(404).send(err)})
})

app.get('/qa/questions/:id/answers', (req,res) =>{
  //edge case for async loaded data in url necessary for api request
  if (req.url.includes(undefined)) {
    return null
  }
  //regular api request
  let config = getData(req.url)
  console.log('ANSWER LIST req.url', req.url)
  axios(config)
    .then((data)=>{
      res.status(201).send(data.data);
    })
    .catch((err)=>{console.log('err:', err); res.status(404).send(err)})
})



//cart
app.post('/cart', (req, res) => {
  let config = getData(req.url);
  config.method = 'POST';
  config.data = req.body;
  axios(config)
  .then((success) => {
    res.status(201).send('Success');
  })
  .catch((err) => {
    console.log('err: ', err);
    res.status(404).send(err);
  })
})

//Interactions


app.listen(port, () => {
  console.log(`listening in on port ${port}`)
})



