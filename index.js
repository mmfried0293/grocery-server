const express = require ('express');
const app = express();
const CONFIG = require('./config.json');
const itemController = require ('./controllers/items');
const orderController = require ('./controllers/orders')
const cors = require('cors');
const multer = require ('multer');
const upload = multer({dest : './assets' });

app.set('view engine', 'ejs');




app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


app.post('/items/create', upload.single('image'), async (req, res, next)=> {
    try {
        let item = req.body; 
        item.image = req.file.filename;
     await itemController.createItem(item);
    res.redirect('http://localhost:3000')
    
        
    }catch (e){
        res.send('Not succesful');
        console.log(e)
        }});



app.post('/order/create',  async (req, res, next)=> {
    try {
                let order = req.body; 
             await orderController.createOrder(order);
            res.redirect('http://localhost:3000')
            
                
            }catch (e){
                res.send('Not succesful');
                console.log(e)
                }});        

app.get('/order/json', async (req, res, next)=> {
                    let data = await orderController.getAll();
                    res.json(data);
                })  ;              

app.get('/items/json', async (req, res, next)=> {
    let data = await itemController.getAll();
    res.json(data);
})



app.listen(CONFIG.PORT, ()=> {
    console.log(`server is running at ${CONFIG.PORT}`)
});


