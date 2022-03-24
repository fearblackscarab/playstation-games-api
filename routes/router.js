const express=require('express');
const router=express.Router();
router.use(express.static('public'));

const gamesRoute=require('./api/gamesRoute');
const singleRoute=require('./api/singleRoute');

router.get('/games',gamesRoute);
router.get('/games',singleRoute);

router.get('/',(req,res)=>{
    res.render('pages/home',{
        title:'Playstation Home',
        name:'Playstation Home Page'
    })
})

module.exports=router;