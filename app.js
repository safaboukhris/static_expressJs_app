const express = require("express");
const app = express();
// write your middleware here

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static(('public')))

const verifyhours = (req,res, next)=>{
    const currentDay= new Date().getDay();
    const currentHour = new Date().getHours();
    if (currentDay >= 1 && currentDay <= 5  && currentHour >= 9 && currentHour <= 17){
        next()
    }else{
        res.status(403).send('currently closed')
    }
}
app.use(verifyhours)

// home page route here => path : /

app.get('/', (req,res)=>{
    res.render('home')
})



// services page route here => path : /services
app.get('/services',(req,res)=>{
    res.render('services')
})




// contact page route here => path : /contact

app.get('/contact',(req,res)=>{
    res.render('contact')
})

// listen to your application here
port = 4000
app.listen(port, ()=>{
    console.log('server is running on port:', port)
})