import React, {Component} from 'react';
import CharacterCard from "../CharacterCard";
import Error from "../Errors/Error404";
import CharactersList from "../charactersData";
export class SingleCharacter extends Component {

    constructor(props){
        super(props);
        this.state = {
            character :  null,
        }
    }
    extractChapter = (episode) => {
        let chapterNumber = [];
        return   episode.map((episode, key) => chapterNumber.push( (episode.split("/").slice(-1))));
    };
    componentDidMount() {
        let currentCharacter = this.props.match.params.id;

        let arrayCharacter =  CharactersList.results.filter((character) => character.id === parseInt(currentCharacter));
        if(arrayCharacter.length > 0)
        {
         return   this.setState({character : arrayCharacter[0] });
        }
        this.setState({character : arrayCharacter});

    }



    render() {
        if (this.state.character) {
            return (
                    <div>

                        <CharacterCard title={this.state.character.name} status={this.state.character.status}
                                       gender={this.state.character.gender}
                                       episode={this.extractChapter(this.state.character.episode)}/>
                    </div>
            )
        }
        return (
                <div>

                   <Error/>
                </div>
        )
    }
}


