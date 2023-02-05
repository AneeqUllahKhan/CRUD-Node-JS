const express = require("express")
const TodoController = require("../controllers/todo")
const router = express.Router()
const TodoModel = require('../models/TodoSchema');

router.get("/api/fake", (request,response)=>{
    response.json({
        message: "GET Successfully",
        status: true,
        products:[
            {name:"Keyboard"},
            {name:"Mouse"},
            {name:"Laptop"},
        ]
    })
})

router.post("/api/todo", TodoController.postTodo)

router.get("/api/todo", TodoController.getTodo)

router.delete("/api/todo/:id", TodoController.deleteTodo)

router.put("/api/todo", TodoController.putTodo)


// Find One Incomplete
router.get("/api/todo",(request,response)=>{

    TodoModel.findOne({} ,(err,data)=>{
        if(err){
            response.json({
                message: `Internal Server Error: ${err}`,
                status: false
            })
        }else{
            response.json({
                message: `Data Get Successfully`,
                status: true,
                data: data
            })
        }
    })
})

module.exports = router