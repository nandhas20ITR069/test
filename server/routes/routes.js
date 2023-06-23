const express = require('express')
const router = express.Router();
const listcon = require('../controller/list')

router.post('/list',listcon.list)
router.get('/display',listcon.display)
router.delete('/delete/:id',listcon.deleteid); 
router.post('/status/:id',listcon.statuss)   
router.post('/status/:id',listcon.statusss)

module.exports=router;