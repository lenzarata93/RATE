const express = require(`express`);
const app = express();
const PORT = 4000;


app.get('/', (req, res) => {
    res.send('Добре дошли във вашия сървър!');
  });

app.listen(PORT, () => {
    console.log(`Сървърът е стартиран на порт ${PORT}`);
});