import React, { Component } from 'react';
import './App.css';

export default class CharacterCard extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log("did mount");

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("did update");

    }
    componentWillUnmount() {
        console.log("willMount");

    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponent Update ");

    }
     getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapShot");

    }
    render() {
        console.log("render");
        return (
                <div className="card">ç
        {/*unas veces se muestra y otras no*/}

                    {this.state.app ? <CharterTitle/> : <span></span> }
                    <p>Estado del personaje</p>
                    <p>Género</p>
                    <p>Capítulo</p>
                </div>
        );
    }
}

class CharterTitle extends Component {
    render() {
        return (
                <h1>Character Name </h1>
        );
    }
}
