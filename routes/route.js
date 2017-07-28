const express = require('express');
const router = express.Router();

//retrieving contacts
router.get('/contacts',(req, res, next)=>{
    res.send('Rerieving the contact list');
});

//add contact
router.post('/contact',(req, res, next)=>{
    //logic to add contact
});

//deleting contact
router.delete('/contact/:id',(req, res, next)=>{
    //logic to add contact
});



module.exports = router;