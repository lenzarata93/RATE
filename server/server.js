const express = require(`express`);
const DB = require('./DataBase/dataBase');
const dataBaseConnect = require('./DataBase/dataBase');
const app = express();
const cors = require('cors');
const PORT = 4000;
const bodyParser = require('body-parser');
const User = require('./DataBase/Models/userModel');
const { hashPassword } = require('./utils/hashPass');

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


  


app.post('/register', async(req,res)=>{
 
    console.log('server registration')
   try {
    console.log(`В заявка за регистрация си`)
    const user = req.body;
    console.log(`BEFORE HASH` )
    console.log(user.username)
    const hashPass = await hashPassword(user.password);
    const { repeatPassword, ...userDataWithoutRepeatPassword } = user;
    const userData = { ...userDataWithoutRepeatPassword, password: hashPass };
    console.log(`BEFORE PUT IN DB USER : ${userData}`)
    await User.create(userData)
   console.log(`NEW USER IS HERE : ${newUser}`)
    return newUser;
   } catch (error) {
    
   } 
  
    
})
app.get('/', (req, res) => {
    res.send('Добре дошли във вашия сървър!');
  });

app.listen(PORT, () => {
    console.log(`Сървърът е стартиран на порт ${PORT}`);
});