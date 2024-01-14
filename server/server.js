const express = require(`express`);
const DB = require('./DataBase/dataBase');
const dataBaseConnect = require('./DataBase/dataBase');
const app = express();
const cors = require('cors');
const PORT = 4000;
const bodyParser = require('body-parser');
const User = require('./DataBase/Models/userModel');
const { hashPassword } = require('./utils/hashPass');
const { checkLogin } = require('./utils/checkLogin');

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
    //const { repeatPassword, ...userDataWithoutRepeatPassword } = user;
    const userData = { ...user, password: hashPass,repeatPassword: hashPass };
    console.log(`hasspass is ${hashPass}`)
    console.log(`BEFORE PUT IN DB USER : ${userData}`)
   const newUser = await User.create(userData)
   console.log(`NEW USER IS HERE : ${newUser}`)
    res.status(200).json(newUser)

   } catch (error) {
    
   } 
  
    
});

app.post('/login',async (req,res)=>{
    console.log(`server login`);
    const data = req.body;
    console.log(data)
try {
    if(!data){
        throw new Error ('WRONG DATA OR MISSING')
    };


    console.log(`BEFORE CHECK USER USER IS : ${data.username}`);
    const token = await checkLogin(data);
    console.log(`AFTER CHECK USER USER IS : ${token}`);
   // if(user ===null){
     //   throw new Error('SOMETHING WAS WRONG WITH LOGIN')
    //}
    res.json({token})
    

} catch (error) {
    console.error(error);
};
 

});
app.get('/', (req, res) => {
    res.send('Добре дошли във вашия сървър!');
  });

app.listen(PORT, () => {
    console.log(`Сървърът е стартиран на порт ${PORT}`);
});