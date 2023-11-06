

const expense=require('../models/expensemodel.js')

const editexpense=async(req,res)=>{


    res.send("<h1>it is under construction page</h1>")

}

const deleteexpense= async(req,res)=>{
        const id=req.body.expenseId;
        try{
            
           await expense.findByIdAndDelete({_id:id})
           res.redirect('/showexpense')
        }
        catch(err)
        {
            console.log(err)
        }
        
}

module.exports={editexpense,deleteexpense}
