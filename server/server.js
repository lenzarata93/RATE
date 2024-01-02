const express = require(`express`);
const DB = require('./DataBase/dataBase');
const dataBaseConnect = require('./DataBase/dataBase');
const app = express();
const PORT = 4000;

dataBaseConnect()
.then(()=>{
    console.log(`Data Base is here`);
})
.catch(err=>{
    console.log(`Data Base error : ${err}`)
});



app.get('/', (req, res) => {
    res.send('Добре дошли във вашия сървър!');
  });

app.listen(PORT, () => {
    console.log(`Сървърът е стартиран на порт ${PORT}`);
});