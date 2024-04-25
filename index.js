const express = require('express');
const app = express();
const port = 3000;

// endpoints
app.get('/', (req, res) =>{
    res.send('Api Restful Node.js');
});

app.listen(port,() =>{
    console.log(`Api rodando na porta ${port}`);
});
