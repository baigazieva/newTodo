import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import firstTodo from './todo/firstTodo'
import './todo/firstTodo.css'
class App extends  Component {
    constructor(){
      super()
      this.state ={
        inputTask: '',
        todo: []
      }
    }
    
    onKeyUp = (event)=>{
     this.setState({inputTask:event.target.value})
     
    }

    addTask = e  =>{
      e.preventDefault()
        const {inputTask} = this.state
        const newTodo = [...this.state.todo, inputTask]
        // newTodo.push(inputTask)
        this.setState({todo:newTodo});
        this.setState({inputTask: ''})
        console.log('-------------',this.state.inputTask)
    }
    
    deleteOnClick = (ind)=>{
      const {todo} = this.state
      todo.splice(ind,1)
      this.setState({todo})
    }
    clearAll =()=>{
      const {todo} = this.state
      this.setState({todo: []})
    }
    render(){
      const {todo} = this.state
      console.log('aidai',this.state)
      return(
        <div className="container">
          <div className="header">
            <form>
           <input onKeyUp={this.onKeyUp} className="inputsection" placeholder='enter text' />
            <button onClick={this.addTask} >add</button>
           </form>
           </div>
          
          <div className="content">
            <ul> 
               {
                this.state.todo.map((items,ind)=>{
                  return (
                    <li key={ind}>
                      <input type="checkbox"/> 
                       {items} 
                  <span onClick={()=> this.deleteOnClick(ind)}  className="delete">x</span>
                    </li>
                  )
                })
              }  
              
            </ul>
            <button onClick={this.clearAll} className="clear">clear</button>
          </div>
        </div>
      )
    }
  }
 



export default App;
