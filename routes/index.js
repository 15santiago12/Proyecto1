const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    res.render('index')
});

router.get('/tenis', (req, res, next)=>{
    res.render('tenis')
});

router.get('/buzos', (req, res, next)=>{
    res.render('buzos')
});

router.get('/contactenos', (req, res, next)=>{
    res.render('contactenos')
});

router.get('/login', (req, res, next)=>{
    res.render('login')
});

router.get('/pantalonetas', (req, res, next)=>{
    res.render('pantalonetas')
});
module.exports = router;