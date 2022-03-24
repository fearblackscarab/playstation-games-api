const express=require('express');
const router=express.Router();
const fetch=(...args)=>import('node-fetch').then(({default: fetch})=>fetch(...args));

router.get('/games/:id',(req,res)=>{
    const id=req.params.id;
    const url=`https://api.sampleapis.com/playstation/games/${id}`;
    fetch(url).then(res=>res.json()).then(data=>{
        res.render('pages/singleGame',{
            title:'All Games',
            name:'All Playstation Games',
            data
        })
    })
});

module.exports=router;