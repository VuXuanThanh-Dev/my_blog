

//buoc 1 import express
const express = require('express');

//buoc 2: tao instance cho express
const blog = express();

// buoc 3: tao bien la cong vafo
const port = 4200
// buoc 4: tao route bang phuong thuc get nhan vao : path , callback(req, res) => res.send('data');
blog.get('/home', (req, res)=> res.send('Xuan thanh dep zai'));
//buoc 5: start server app.listen(port, callback)
blog.listen(port, ()=>{
    console.log('helo ' + port);
})