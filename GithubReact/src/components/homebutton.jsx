import React ,{Component} from 'react';
import {withRouter } from 'react-router';
import './homebutton.css';

//Commponent referente botão home para voltar para tela inicial
class HomeButton extends Component {
    render(){
        return (
            <span className="Github-Search" onClick={() => {this.props.history.push('/')}}>
                <span>Github</span>
                <span className="text-style-1"> Search</span>
            </span>
        )
    }
}

export default withRouter(HomeButton);