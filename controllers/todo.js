const TodoModel = require('../models/TodoSchema');

const TodoController = {
    postTodo:(request,response)=>{

        const body = request.body
        if(!body.todo){
            response.json({
                message: "Required Fields Are Missing",
                status: false
            })
            return
        }
    
        const objToSend = {
            todo:body.todo
        }
        TodoModel.create(objToSend,(err,data)=>{
            if(err){
                response.json({
                    message: `Internal Server Error: ${err}`,
                    status: false
                })
            }else{
                response.json({
                    message: `Data Send Successfully`,
                    status: true
                })
            }
        })
    },

    getTodo:(request,response)=>{

        TodoModel.find({} ,(err,data)=>{
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
    },

    deleteTodo:(request,response)=>{
        const {id}= request.params;
        TodoModel.findByIdAndDelete(id, (err,data)=>{
         if(err){
             response.json({
                 message: `Internal Server Error: ${err}`,
                 status: false
             })
         }else{
             response.json({
                 message: `Data Has Been Deleted`,
                 status: true
             })
         }
        })
     },

     putTodo:(request,response)=>{

        const body = request.body
        console.log(body)
    
        if(!body.todo){
            response.json({
                message: "Required Fields Are Missing",
                status: false
            })
            return
        }
    
        const objToSend = {
            todo:body.todo
        }
        TodoModel.findByIdAndUpdate(body.id, objToSend ,(err,data)=>{
            if(err){
                response.json({
                    message: `Internal Server Error: ${err}`,
                    status: false
                })
            }else{
                response.json({
                    message: `Update Successfully`,
                    status: true
                })
            }
        })
    }
}

module.exports = TodoController