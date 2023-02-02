const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/mca-chai-wala-ui'));

app.get('/*',(req,res)=>
    res.sendFile('index.html',{root:'dist/mca-chai-wala-ui/'}),
);

app.listen(process.env.PORT || 8000)