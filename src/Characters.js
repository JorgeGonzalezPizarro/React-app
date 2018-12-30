import React, { Component } from 'react';
import * as CharactersData from './charactersData'
import './App.css';
import CharacterCard from "./CharacterCard";
import Formulario from "./Form/Formulario";
import FormularioSeach from "./Form/FormularioSearch";



export default class Characters extends Component {
    constructor(props){
        super(props);

        this.state = {
            chapters : this.chapters()
        }
    }
     chapters = () => CharactersData.results;
    extractChapter = (episode) => {
        let chapterNumber = [];
     return   episode.map((episode, key) => chapterNumber.push( (episode.split("/").slice(-1))));
    };

    query = (query) => {
        console.log( "aa" , query.length);
        if(query.length ===0)
        {
           return this.setState({chapters : this.chapters()})
        }
        const chaptersCopyIndex = [];
        const chaptersCopy = this.state.chapters;
        this.state.chapters.map((chapter) => {
            chaptersCopyIndex.push(chapter.name.slice(0, query.length) === query);
              return  chaptersCopyIndex });

        const ifTrue = () => chaptersCopyIndex.map((bool) =>  bool===true);
        console.log("iftrue " ,ifTrue());
        if(ifTrue())
        {
           return this.setState({chapters: [(chaptersCopy[chaptersCopyIndex.indexOf(true)])]});
        }
        return this.setState({chapters : this.chapters()})

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
                <FormularioSeach inputs = {inputSearch} onChange = {this.query}/>
                {this.state.chapters.map((chapter, index) => {
                    return <CharacterCard key={index} title ={chapter.name} status={chapter.status} gender={chapter.gender}
                                          episode = {this.extractChapter(chapter.episode )} />
                })}
            </div>
        );
    }
}