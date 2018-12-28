import React, { Component } from 'react';
import './App.css';

export default class CharacterCard extends Component {

    constructor(props){
        super(props);
        this.state = { appShow : true};
    }
    componentDidMount() {
        this.setState( { appShow : false});

        console.log("did mount");
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("should update ??");
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("did update");

    }
    componentWillUnmount() {
        console.log("willMount")
    }


    render() {
        console.log("render");
        return (
                <div className="card">

                    {this.state.appShow ? <CharterTitle/> : <span></span> }
                    <p>Estado del personaje</p>
                    <p>Género</p>
                    <p>Capítulo</p>
                </div>
        );
    }
}

class CharterTitle extends Component {
    componentDidMount() {
        console.log("Tittle mounted");
    }

    render() {
        return (
                <h1>Character Name </h1>
        );
    }
}
