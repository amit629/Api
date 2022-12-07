const express=require('express')
const app=express();
const {router}=require('./routes')
const port =process.env.port || 3003
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/',router)

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})

