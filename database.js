const express=require('express')
const app=express()
const bodyParser = require('body-parser')
var boom=require('express-boom')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(boom())
const dotenv=require('dotenv')
dotenv.config()
const cors=require('cors')
const db= require('./models')
const {compounds1s}=require('./models')
app.use(cors())
app.get('/api/all',(req,res)=>{
    compounds1s.findAll().then((comp)=>{
        res.send(comp)
        // console.log(comp)
    }).catch((err)=>{
        console.log(err)
    })
    
})
app.get('/api/find/:id',(req,res)=>{
    const id =req.params.id
    const ans=compounds1s.findOne({where:{id:id}}).then((result)=>{
        if(!result) res.boom.notFound(`Compound not found with id : ${id}`)
        else res.send(result)
    })
    
    
})
app.post('/api/edit/:id',(req,res)=>{
    const id =req.params.id
    // console.log(id,req.body)
    const {compoundName,
        compoundDescription,
        imgSource,
        imgAttribution,
        dateModified}=req.body
        try{
            compounds1s.update({compoundName,compoundDescription,imgSource,imgAttribution,dateModified},{where:{id:id}}).then((result)=>{
                if(!result) res.boom.badGateway('try again')
                else res.send({message:"Updated Successfully"})
            })
            
        }catch(err){
            console.log(err)
            res.boom.badRequest(err)
        }

})
db.sequelize.sync().then((req)=>{
    app.listen(8000,()=>{
        console.log('server running at 8000')
    })
})