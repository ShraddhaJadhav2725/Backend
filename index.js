//  for importing express module
const express=require('express')
const app=express()

app.use(express.json())

let users=[]


// get all users
app.get('/users',(req,res)=>
{
    res.json(users)
})

//POST
app.post('/users',(req,res)=>
{
    const newUser={id:users.length+1, ...req.body}
    users.push(newUser)
    res.status(201).json(newUser)

})

// Update--put
app.put('/users/:id',(req,res)=>
{
    const user=users.find(u=>u.id===parseInt(req.params.id))
   if(!users) return res.status(404).json({message:"users not found"})
    user.name=req.body.name||req.name
    user.email =req.body.email||req.email
    res.json(user)
})

// Delete
app.delete('/user/:id',(req,res)=>
{
    users=users.filter(user=>user.id !==parseInt(req.params.id))
    res.json({message:'User Deleted'})
})
app.listen(8000,()=>console.log("server is running"))

