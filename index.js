import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app=express();
const port=6543;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async(req,res)=>
{
    try
    {
       const response1=await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
       const response2=await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
       const response3=await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
       let content={
        cont1:response1.data.drinks,
        cont2:response2.data.drinks,
        cont3:response3.data.drinks
       }
       res.render("index.ejs",{content});
    }
    catch(error)
    {
       console.log("gadbad");
    }
});

app.listen(port,()=>
{
    console.log(`server started on port ${port}`);
});
