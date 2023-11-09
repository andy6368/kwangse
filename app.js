const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('HelloWorld!');
});
app.listen(port, () => {
    console.log(port, '포트로 ㅓ버가 열렸습니다.');
});