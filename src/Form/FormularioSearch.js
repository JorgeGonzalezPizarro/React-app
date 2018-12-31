import React, { Component } from 'react';
import '../App.css';

export  class FormularioSearch extends Component {

    constructor(props){
        super(props);
        const {inputs , ...onChange} =  this.props;
        this.state  = {
            inputs :  inputs ,
            onChange : onChange
        };

    }
    componentDidMount() {
        console.log("mount");
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("should");
        return true;
    }

    handleChange = param => {
        console.log("aa");
        this.props.onChange(param);
    };


    render() {

        return (
            <form >

                  {this.state.inputs.map((input,key) => {
                    return   <InputFilter type = {input.type}
                                          query = {this.handleChange.bind(this)}
                                          id = {input.id}
                                          key={key}
                                           />

                })}
            </form>
        );
    }
}



export class InputFilter extends Component{
    constructor(props){
        super(props);
        const {type , id  , query } = this.props;
        this.state = {
            type : type,
            id : id,
            query :  query
        }
    }
    search = (e) => {

        e.preventDefault();
        const query = e.target.value;
        console.log(query);
        this.props.query(query);

    };
    render() {
        return (
            <input id={this.state.id} type={this.state.type} onChange={this.search.bind(this )}>

            </input>
        );
    }
}
