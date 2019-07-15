const express = require('express');
const app = express();
// require('dotenv').config();

const path = require('path');
const publicPath = path.join(__dirname,'..','public');
const port = process.env.PORT || 3000;


app.use(express.static(publicPath));

app.get('*', (req, res)=>{
    res.sendFile(path.join(publicPath,'index.html'));
});

app.listen(port,()=>{
    console.log('Sever running port: ' + port);
    console.log(process.env.FIREBASE_API_KEY)
});
