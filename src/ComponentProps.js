import React, { Component } from 'react';
import './App.css';
import * as CharactersComponent from './Characters'



export default class ComponentProps extends Component {
    // las props de un componente son inmutables
    // el estado es mutable desde el setState()
    // el estado se añade siempre al constructor
    // las props son pasadas de padres a hijos

    constructor(props){
        super(props);
        this.state = {
           state : this.props.state,
          // chapters : Characters.results,
           gender : this.props.gender,
           title : this.props.title,
           characterTitle : "sadf"
        }

        //pasamos el contexto this a la funcion
        // this.kill =  this.kill.bind(this);

    }
    //al utilizar arrow function no hace falta pasarle el contexto this
    kill = (querty , e) =>  {
        console.log(e.target.value);
        //this.setState({state : "alive"});
    };


    setApp = (param) => {
        console.log("sadfasdf");
        this.setState({characterTitle : param })
    };

    render() {
        console.log("render");
        console.log(this.state.chapters);

        return (
                <div className="card">
                    <App  setApp ={this.setApp} title={this.state.characterTitle} />

                    <p>Estado del personaje : {this.state.state}</p>
                    <p>Género {this.state.gender}</p>

                    {/*le pasamos el contexto propio del evento
                        util para recorrer un for y pasar el contenido del <li>
                        o algo así */}
                    <input onChange={this.kill.bind(this , "querty")} />
                </div>
        );
    }
}




export class App extends Component {

    componentDidMount() {
        console.log("App mounted");
        console.log(this.props.title);
        this.props.setApp("sdfasfd");
    }

    render() {
      return (
              <div className="jgp">
            <h1>{this.props.title}</h1>
        </div>
      );
    }
}