const express = require ('express');
const app = express();
const CONFIG = require('./config.json');
const itemController = require ('./controllers/items');
const cors = require('cors');

app.set('view engine', 'ejs');




app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


app.post('/items/create', async (req, res, next)=> {
    
    
        let item = req.body;
     await itemController.createItem(item);
    // res.redirect('http://localhost:3000')
    

    
});



app.listen(CONFIG.PORT, ()=> {
    console.log(`server is running at ${CONFIG.PORT}`)
});


