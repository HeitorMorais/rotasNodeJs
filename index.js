const express = require("express")
const app = express()   

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/contato", function(req, res){
    res.send("Página de Contato!")
})

app.get("/produtos/:item/", function(req, res){
    res.send("Item: " + req.params.item)
})

app.get("/produtos/:item/:quantidade", function(req, res){
    res.send("Item: " + req.params.item + "\nQuantidade: " + req.params.quantidade)
})

app.listen(8081, function(){
    console.log("working")
}) 

