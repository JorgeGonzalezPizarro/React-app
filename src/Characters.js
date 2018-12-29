import React, { Component } from 'react';
import * as CharactersData from './charactersData'
import './App.css';
import CharacterCard from "./CharacterCard";
import Formulario from "./Form/Formulario";



export default class Characters extends Component {

    constructor(props){
        super(props);
        this.state = {
            chapters : CharactersData.results
        }
    }
    extractChapter = (episode) => {
        let chapterNumber = [];
     return   episode.map((episode, key) => chapterNumber.push( (episode.split("/").slice(-1))));
    };


    render() {
        const inputs = [
            {
                type : "text",
                id : "name",
                validation : new RegExp("[a-zA-Z]+")
            }
        ];

        return (
            <div>
                <Formulario inputs = {inputs} />
                {this.state.chapters.map((chapter, index) => {
                    return <CharacterCard key={index} title ={chapter.name} status={chapter.status} gender={chapter.gender}
                                          episode = {this.extractChapter(chapter.episode )} />
                })}
            </div>
        );
    }
}