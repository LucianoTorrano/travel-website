const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index', {title: 'Aim & Travel - Main Page'});
});

router.get('/home', (req,res) => {
    res.render('index', {title: 'Aim & Travel - Main Page'});
});

router.get('/about', (req,res)=>{
    res.render('about', {title: 'Aim & Travel - About Us'});
});

router.get('/destiny', (req,res)=>{
    res.render('destiny',{title: 'Aim & Travel - Destiny'})
});

router.get('/contact', (req,res)=>{
    res.render('contact',{title: 'Aim & Travel - Contact'})
});

module.exports = router;