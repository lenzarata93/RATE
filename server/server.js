const express = require(`express`);
const DB = require('./DataBase/dataBase');
const dataBaseConnect = require('./DataBase/dataBase');
const app = express();
const cors = require('cors');
const PORT = 4000;

dataBaseConnect()
.then(()=>{
    console.log(`Data Base is here`);
})
.catch(err=>{
    console.log(`Data Base error : ${err}`)
});

  

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: true,
    optionsSuccessStatus: 204,
    credentials: true, 
  };

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended:false}));


  


app.post('/register', async(req,res)=>{
 
    console.log('server registration')
   try {
    console.log(`В заявка за регистрация си`)
    const user = req.body;
    console.log(user)
   } catch (error) {
    
   } 
   return user;
    
})
app.get('/', (req, res) => {
    res.send('Добре дошли във вашия сървър!');
  });

app.listen(PORT, () => {
    console.log(`Сървърът е стартиран на порт ${PORT}`);
});