const express = require('express');
const app = express();
const port = 3000;
const redis = require("redis");
const {promisify}=require("util");
const client = redis.createClient({host:"redis"});
const incrAsync = promisify(client.incr).bind(client);

app.get('/',async (req, res) => {
  const count=await incrAsync("count");
  res.send('Hello World! count:'+count);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
