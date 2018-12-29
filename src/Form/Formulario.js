import React, { Component } from 'react';
import '../App.css';

export default class Formulario extends Component {

    constructor(props){
        super(props);
        const {inputs} =  this.props;
        console.log(this.props);
        this.state  = {
            inputs :  inputs ,
            isValid : false
        };

    }

     handleValid = param => {
        this.setState({isValid : param});
    };

     handleSubmit = e =>
    {
        e.preventDefault();
        if( this.state.isValid ===false)
        {
            console.log("cant submit");
        }
        console.log(this.state.isValid);
    };
    render() {

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                {this.state.inputs.map((input,key) => {
                 return   <Input type = {input.type} validation = {input.validation} id = {input.id} key={key} isValid = {this.handleValid} />

                })}
                <button type="submit">Submit</button>
            </form>
            );
    }
}

export class Input extends Component{
    constructor(props){
        super(props);
        const {type , validation, id  , isValid } = this.props;
        this.state = {
            type : type,
            validation : validation,
            id : id,
            isValid : isValid
        }
    }

    validateInput = (validation , e) => {
        e.preventDefault();
        const value =  e.target.value;
        const isValid=  validation.test ( value );
        if(isValid)
        {
          return  this.props.isValid(true);
        }
        return this.props.isValid(false);
    };


    render() {
        return (
            <input id={this.state.id} type={this.state.type} onChange={this.validateInput.bind(this , this.state.validation)}>

            </input>
        );
    }


}
