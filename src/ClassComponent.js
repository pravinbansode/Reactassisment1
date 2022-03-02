import React,{Component} from "react";
import "./ClassComponent.css";

export class ClassComponent extends Component{
    render(){
       
        return(
            <div id="block1">
                <h1>This is created using Class Component</h1>
                <p id="blockcss">This is done using external CSS</p>
                <p className="inline">This is done using inline CSS</p>
            </div>
        )
    }
}

export const FunctionalComponent = () => {

    return(
        <div id="block2">
                <h1>This is created using functional Component</h1>
                <p id="blockcss">This is done using external CSS</p>
                <p className="inline">This is done using inline CSS</p>
        </div>
    )
}