// model file shows what fields will be on page 

const mongoose=require('mongoose')
const expenseSchema=mongoose.Schema({
    category:String,
    description:String,
    date:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})


const expense=new mongoose.model('expense',expenseSchema)

module.exports=expense;