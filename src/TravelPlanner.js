
import { Component } from "react";
import { BsFillPinAngleFill } from "react-icons/bs";
import swal from 'sweetalert';

export class TravelPlanner extends Component{

state ={
    userInput:"",
  travelPlanner:[]


}

onChangeEvent(input){
 this.setState({userInput:input})
 console.log(input)
}

addItem(input){
    if(input ==="") {
        swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter your notes!',
                      })
      }
     else{

    let list = this.state.travelPlanner;
    this.setState({ travelPlanner:list, userInput:""})
    list.push(input)
    console.log(list)
}
}
 deleteItem(){
   let list = this.state.travelPlanner;
   list =[];
   this.setState({travelPlanner:list})
 }
crossWord(event){
     const li = event.target;
    li.classList.toggle("crossed")
}
checked(){
  
}
onFormSubmit(e){
    e.preventDefault()
}
 render() {
   return(
      <div>
<form onSubmit={this.onFormSubmit}>
<div className='containerText'> 
     <input  type="text"
      placeholder="Travel details"
      onChange= {(e) => {this.onChangeEvent(e.target.value)}}
      value={this.state.userInput}/> 
   </div>
 
 <div className="cta"  > 
 <button onClick={() => this.addItem (this.state.userInput)} className='add'> ADD</button>
 </div>
 <ul>
     {this.state.travelPlanner.map((item,index) => (
     <li onClick={this.crossWord}  key={index}>  <BsFillPinAngleFill />   {item}</li>
     ))}
     
 </ul>

 <div className="cta"  > 
 <button onClick={() => this.deleteItem (this.state.userInput)}  className='delete'> DELETE   </button>
 </div>
 </form>
 
 </div>
 
   )
 }
}




