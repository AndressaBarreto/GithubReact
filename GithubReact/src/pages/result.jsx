import React, {Component} from 'react';
import HomeButton from '../components/homebutton';
import SearchInput from '../components/search' ;
import axios from 'axios';
import './result.css';
import ReposDetail from '../components/reposDetail'

export default class Result extends Component {
    constructor (props) {
        super(props);
        this.state = {
            perfilContent:false,
            reposContent:false,
        };
    }
    
    UNSAFE_componentWillMount = () => {
        this.buildDetail();
    }

    buildDetail = () => {
        const uriPerfil = `https://api.github.com/users/${this.props.match.params.id}`;
        const uriRepos = uriPerfil + "/repos";

        //Recupera Perfil
        axios.get(uriPerfil)
            .then((result) => {
                this.setState({perfilContent:result.data});
            }
        ).catch(error => {
            console.log("ERRO: " + error.message);
            this.props.history.push('/notfound');
        });

        //Recupera Repositorios
        axios.get(uriRepos)
            .then((result) => {
                var starSum = 0;
        
                for (var i = 0 ; i <= result.data.length -1 ; i++ ){
                    starSum += result.data[i].stargazers_count;
                }
            
                this.setState({starSum:starSum});
                this.setState({reposContent:result.data});
            }
        ).catch(error => {
            console.log("ERRO: " + error.message);
            this.props.history.push('/notfound');
        });
    }

    render () {
        if(this.state.perfilContent===false){
            return <div></div>
        }else {
            return(
                <div className="Result">
                    <div className="Div-Menu">
                        <span className="Span-Home Menu">
                            <HomeButton className="Github-Search Menu"/>
                        </span>
                        <span className="Span-Search Menu">
                            <SearchInput placeHolderText={this.props.match.params.id}/>
                        </span>
                    </div>
                    <div className="Div-Detail">
                        <span className="Span-Perfil">
                            <img src={this.state.perfilContent.avatar_url} alt="avatar_url" className="Perfil-Avatar"/>
                            <span className="Perfil-Name">
                                {this.state.perfilContent.name}
                            </span>
                            <span className="Perfil-Login">
                                {this.state.perfilContent.login}
                            </span>
                            <span className="Perfil-List">
                                <span className="Perfil-List-Item Align-Helper">
                                    <img src={require("../img/organization_icon.svg")} alt="organization_icon.svg" />
                                    <span className ="Item">{this.state.perfilContent.company}</span>
                                </span>
                                <span className="Perfil-List-Item Align-Helper">
                                    <img src={require("../img/location_icon.svg")} alt="location_icon.svg"/>
                                    <span className ="Item">{this.state.perfilContent.location}</span>
                                </span>
                                <span className="Perfil-List-Item Align-Helper">
                                    <img src={require("../img/star_icon.svg")} alt="star_icon.svg"/>
                                    <span className ="Item">{this.state.starSum}</span>
                                </span>
                                <span className="Perfil-List-Item Align-Helper">
                                    <img src={require("../img/repositorie_icon.svg")} alt="repositorie_icon.svg"/> 
                                    <span className ="Item">{this.state.perfilContent.public_repos}</span>
                                </span>
                                <span className="Perfil-List-Item Align-Helper">
                                    <img src={require("../img/followers_icon.svg")} alt="followers_icon.svg"/>
                                    <span className ="Item">{this.state.perfilContent.followers}</span>
                                </span>
                            </span>
                        </span>
                        <span className="Span-Repos">
                            <span >
                                <ReposDetail reposContent={this.state.reposContent}/>
                            </span>
                        </span>
                    </div>
                </div>
            );
        }
    }
}