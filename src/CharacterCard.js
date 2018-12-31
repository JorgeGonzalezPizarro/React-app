import React, { Component } from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faSkull, faHeart , faQuestion } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './App.css';

library.add(faSkull, faHeart , faQuestion);

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
                    <CharacterStatus status={this.state.status}/>
                    <p>Gender {this.state.gender}</p>
                    <p>Gender {this.state.status}</p>

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




export class CharacterStatus extends Component {

    constructor ( props)
    {
        super(props);
        this.state = {
            status : this.props.status
        }
    }
    status = ()  =>
    {
        switch (this.state.status) {
            case 'Alive':
                return 'heart';
            case 'Dead' :
                return 'skull';
            default :
                return 'question';
        }
        };
    render() {
        return (
            <FontAwesomeIcon icon={this.status()}/>
        );
    }            

}
