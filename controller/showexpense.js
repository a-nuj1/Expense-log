

const expense=require('../models/expensemodel')
const getexpense=async (req,res)=>{
    let result=0;
try{
    console.log(req.body.category)
    if(req.body.category[0]==='All')
    {
        
      
        result=await expense.find();
    }
   else{
   
     result=await expense.find({category:req.body.category});
   }
res.render('show.ejs',{expenses:result})
}
catch(err){
    console.log(err)
}
}

module.exports=getexpense;