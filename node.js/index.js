const express = require('express');
const figlet = require('figlet');
console.log(figlet.textSync('Hello World!!',{
  font:'Ghost',
  horizontalLayout:'default',
  verticalLayout:'default',
  width:80,
  whitespaceBreak: true
}));
//controller
const app = express();
const port = 3000;

//HttpServletRequest method GET
//request '/'
app.get('/', function (req, res) {
  res.send('Hello World!!<br/>'+'link<br/>element<br/>json<br/>'
  +'parameter/id<br/>query?id=abc&name=def&age=20');
});
app.get('/link',(req,res) => {
  res.send('<a href="https://www.youtube.com">link elemet</a>');
});
app.get('/element', function (req, res) {
  res.send('<h1>강아지</h1>');
});
app.get('/json', function (req, res) {
  res.json({'sound':'야옹'});
});
app.get('/parameter/:id',(req,res) => {
  const q = req.params;
  console.log(q);
});
app.get('/query',(req,res)=> {
  const q = req.query;
  res.json({
    'userId':q.id,
    'userName':q.name,
    'userAge':q.age
  });
});
//port number
app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`);

});