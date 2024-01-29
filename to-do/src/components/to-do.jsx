import React,{Component} from "react";
import './to-do.css';

var tasklist =[];
class Todo extends Component{
    constructor(){
        super()
        
        this.handleChange = this.handleChange.bind(this);
        this.state =
        { 
           text: '',
       };
       
    }
    
    handleChange(e){
        this.setState({text: e.target.value});
        

    }
    
    updateTask(){
       
        tasklist.push(this.state.text)
        console.log(tasklist)
        
        this.setState({
            text:''
        })
    
        
    }
    deleteTodo(index) { 
        tasklist.splice(index, 1);
        this.forceUpdate();
    }
    
    render(){
       return <>
        <div>
            <h1>To-Do List</h1>
            <div id="text-area">
            <textarea value={this.state.text} onChange={this.handleChange} id="" cols="30" rows="1" placeholder="Enter your task"></textarea>
            <button className="button" onClick={()=>this.updateTask()}>Add Task</button>
            </div>
            <div><h3>{this.state.text}</h3></div>
            <div><h3>You have {tasklist.length} Tasks to complete</h3></div>
            <div id="all-tasks">
            {tasklist.map((item) => {
                       return <div className="task-card" >
                       <h2  contentEditable='true'>{item}</h2>
                       <button className="button" onClick={()=>this.deleteTodo()}>Delete</button>
                   </div>
                    })}
                
            </div>
        </div>
        </>
    }



}

export default Todo