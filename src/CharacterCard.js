import React, { Component } from 'react';
import './App.css';

export default class CharacterCard extends Component {

    constructor(props){
        super(props);
        const {title,gender,episode,status} = this.props;

        this.state = {
            title : title,
            gender : gender,
            episode :episode,
            status : status,
        };
    }



    render() {
        return (
                <div className="card">
                    <ChapterTitle title={this.state.title}/>
                    <p>Character state {this.state.status}</p>
                    <p>Gender {this.state.gender}</p>
                    {this.state.episode.map((episode , key) => {
                        return <ChapterEpisodes episode = {episode} key = {key} />
                    })
                    }
                </div>
        );
    }
}

export class ChapterTitle extends Component {
    render() {
        const {title} = this.props;

        return (
                <h2>{title} </h2>
        );
    }
}


export class ChapterEpisodes extends Component {
    render() {
        const {episode} =  this.props;
        return (
            <span>{episode} </span>
        );
    }
}

