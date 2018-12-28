import React, { Component } from 'react';
import './App.css';

export default class ComponentProps extends Component {
//    las props de un componente son inmutables
    // el estado es mutable desde el setState()
    // el estado se añade siempre al constructor

    constructor(props){
        super(props);
        this.state = {
           state : this.props.state,
           chapters : this.props.chapters,
           gender : this.props.gender,
           title : this.props.title,
        }


    }

    componentDidMount() {
        this.setState({
            state: "alive"
        });
    }

    render() {
        console.log("render");
        return (
                <div className="card">
                    <App title={this.props.title} />

                    <p>Estado del personaje : {this.state.state}</p>
                    <p>Género {this.state.gender}</p>
                    <p>Capítulo {this.state.chapters}</p>
                </div>
        );
    }
}




export class App extends Component {

    render() {
      return (
              <div className="jgp">
            <h1>{this.props.title}</h1>
        </div>
      );
    }
}