import express from "express";
import {db, connectDB} from "./db.js";


const app = express();
const port = 4000;

app.use(express.json());


app.get("/api/article/:name", async (req, res)=>{
    const {name} = req.params;
    
    const article = await db.collection("articles").findOne({name});

    if(article){
        res.json(article);
    }else{
        res.sendStatus(404);
    }
});

app.put("/api/article/:name/upvote", async (req, res) => {
    const {name} = req.params;
     
    await db.collection("articles").updateOne({name}, {
        $inc: {upvotes: 1}
    })

    const article = await db.collection("articles").findOne({name});

    if(article){
        res.json(article);
    }else{
        res.send("The article doesn\'t exist.");
    }
});

app.post("/api/article/:name/comments", async (req, res) => {
    const {name} = req.params;
    const {postedBy, text} = req.body;
    await db.collection("articles").updateOne({name}, {
        $push: {comments:{postedBy, text}}
    })
    const article = await db.collection("articles").findOne({name});

    if (article){
        res.json(article);
    }else{
        res.send("The article doesn\'t exist.");
    }
});

connectDB(() =>{
    app.listen(port, ()=>{
        console.log(`server lisnting on http://localhost:${port}`);
    });
})