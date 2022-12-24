const express =require("express")
const mongoose =require("mongoose")
const route =require("./routes/routes.js")

const app =express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://priyanka912066:Pie5MEDyx8B1zOiq@cluster0.ucnslwp.mongodb.net/companyAssignmentDatabase",
 {useNewUrlParser: true})
 

 .then(() => console.log(("MongoDb is connected")))
    .catch(err => console.log(err.message))

app.use("/", route)

app.listen(process.env.PORT || 3000, function () {
    console.log("Express is running on port " + (process.env.PORT || 3000))
})