const express = require('express');
const server = express();
const data = require('./said.json')

server.get('/', (req,res)=>{
    return res.json(data)
});

server.listen(3000, ()=>{
    console.log('o servidor está funcionando...')
})