
const express=require('express')

const {addExpense,showExpense}=require('../controller/control.js');

const getexpense=require('../controller/showexpense.js')

const {editexpense,deleteexpense}=require('../controller/action.js') 

const router=express.Router();

router.post('/addexpense',addExpense)

router.get('/showexpense',showExpense)

router.post('/showexpense',getexpense)

router.post('/delete',deleteexpense)

router.post('/edit',editexpense)


module.exports=router;