import React ,{Component} from 'react';
import axios from 'axios';
import './search.css';
import {ReactComponent as SearchIcon} from '../img/search_icon.svg';
import {withRouter } from 'react-router';

class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {
            perfilInput:'',
            perfilContent:'',
            placeholder: ''
        };
    }

    //Realiza request na api do git
    searchClick = () => {
        var uri = `https://api.github.com/users/${this.state.perfilInput}`;
        console.log("Uri da requisição: " + uri);

       axios.get(uri)
            .then(() => {
                //se request retorna status 200 (usuario encontrato), router acessa a pagina result
                console.log("SUCCESS")
                this.props.history.push('/');
                this.props.history.push(`/result/${this.state.perfilInput}`);
            }
        ).catch(error => {
            //Se voltar status de erro 404 (Not Found), router acessa a pagina notfound
            console.log("ERROR: " + error.message);
            this.props.history.push('/notfound');
        });
    }

    //Seta o state perfilInput com informação digitada no campo input
    handlerEvent = (event) => {
        this.setState({perfilInput: event.target.value});
    }

    render () {
        return(
            <span>
                <input className="Search-Input" type='text' onChange={this.handlerEvent} placeholder={this.props.placeHolderText}/>
                <button className="button-Search" onClick={this.searchClick}>
                    <SearchIcon/>
                </button>
            </span>
        );
    }
}

export default withRouter(Search);