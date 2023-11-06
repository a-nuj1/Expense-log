



const date=new Date()
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed, so we add 1
    const year = date.getFullYear();
    // const hours = date.getHours();
    // const minutes = date.getMinutes();

    // Adding leading zero if necessary
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    // const formattedHours = hours < 10 ? `0${hours}` : hours;
    // const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;


const expense=require('../models/expensemodel.js')
const addExpense=(req,res)=>{
    const {category,description,price}=req.body;
    expense.create({
        category:category,
        description:description,
        date:formattedDate,
        price:price
    })
    console.log("data submitted")
    res.redirect('/')

}


const showExpense=async(req,res)=>{
   res.render("total.ejs")
}

module.exports={addExpense,showExpense}
