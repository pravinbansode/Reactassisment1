import React, { Component } from "react";
import subheding from "./App1.css";
import { FunctionalComponent } from "./ClassComponent";
import {ClassComponent} from "./ClassComponent";



class Apps extends Component{
    constructor(){
        super();
        this.state = {
            classClick : false,
            funcClick : false
        }
    }

    render(){
        console.log(this);
        return (
        <div>
            <h1 className = {subheding.head}>Styling using Functional and Class Component</h1>
            <div className = {subheding.button_container}>
                <button id={subheding.button1} className = {subheding.button} onClick = {() => this.setState({funcClick : !this.state.funcClick}) }>To see styling in functional component</button>
                <button id={subheding.button2} className = {subheding.button} onClick = {() => this.setState({classClick : !this.state.classClick})}>To see styling in class component</button>
            </div>
            <div className="subheding">
            {this.state.funcClick ? <FunctionalComponent /> : null}
            {this.state.classClick ? <ClassComponent /> : null}
            </div>
            </div>
        )
}
}
export default Apps; 
