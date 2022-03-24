const express=require('express');
const router=express.Router();
const fetch=(...args)=>import('node-fetch').then(({default: fetch})=>fetch(...args));

router.get('/games',(req,res)=>{
    const url='https://api.sampleapis.com/playstation/games';
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/games',{
            title:'All Games',
            name:'All Playstation Games',
            data
        })
    })
});

module.exports=router;