import React, {Component} from 'react';
import * as CharactersData from './charactersData'
import './App.css';
import CharacterCard from "./CharacterCard";
import {Formulario} from "./Form/Formulario";
import {FormularioSearch} from "./Form/FormularioSearch";
import { Link } from "react-router-dom";

export  class Characters extends Component {
    constructor(props){
        super(props);
        this.state = {
            chapters : this.chapters()
        };
    }


    chapters = () => CharactersData.results;
    extractChapter = (episode) => {
        let chapterNumber = [];
     return   episode.map((episode, key) => chapterNumber.push( (episode.split("/").slice(-1))));
    };

    query = (query) => {
        if (query.length === 0) {
            return this.setState({chapters: this.chapters()})
        }
        const chaptersCopyIndex = [];
        const chaptersCopy = this.state.chapters;
        this.state.chapters.map((chapter) => chaptersCopyIndex.push(chapter.name.slice(0, query.length) === query));
        let componentIndex = chaptersCopyIndex.indexOf(true);

        if (componentIndex >= 0) {
            this.setState({chapters: [chaptersCopy[componentIndex]]});
        } else {
            this.setState({chapters: []});
        }
    };

    render() {
        const inputs = [
            {
                type : "text",
                id : "name",
                validation : new RegExp("[a-zA-Z]+")
            }
        ];
        const inputSearch = [
            {
                type : "text",
                id : "queryCharacters",
                onChange : this.query
                }

        ];

        return (
            <div>
                <Formulario inputs = {inputs} />
                <FormularioSearch inputs = {inputSearch} onChange = {this.query}/>
                {this.state.chapters.map((chapter, index) => {
                    return <Link to={'/character/' + chapter.id} >
                            <CharacterCard key={index} title ={chapter.name} status={chapter.status} gender={chapter.gender}
                                          episode = {this.extractChapter(chapter.episode )} />
                    </Link>
                })}
            </div>
        );
    }
}