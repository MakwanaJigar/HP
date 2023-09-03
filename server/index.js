const express = require('express');
const app =express();
const cors = require('cors');

app.use(cors());

app.get('/download',(req , res) => {
    res.download('./Himani Saraiya React Resume-2-1.pdf');
});
app.listen(8000,() => {
    console.log("Server is Running");
});
