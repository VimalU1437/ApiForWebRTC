const express = require('express');
const http = require('http');
const cors = require('cors')
const app = express();

 
app.use(cors());

let offer = null;
let answer = null;

app.post('/offer',(req,res)=>{
    offer = JSON.parse(req.body.offer);
    res.sendStatus(201);
});

app.post('/answer',(req,res)=>{
    answer = JSON.parse(req.body.answer);
    res.sendStatus(201);
});

app.get('/offer', (req,res)=>{
    console.log('getting offer');
    if(offer){
        res.json(offer);
    }else{
        res.sendStatus(404);
    }
})

app.get('/answer', (req,res)=>{
    console.log('getting answer');
    if(answer){
        res.json(answer);
    } else {
        res.sendStatus(404);
    }
});

app.use('*',(req, res)=>{
    console.log('pinged app');
    res.sendStatus(404);
});
const server = http.createServer(app);

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});