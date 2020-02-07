import React ,{Component} from 'react';
import './home.css';
import SearchInput from './components/search'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            perfil: ''
        };
    }

    getResponse = (reponse) => {
        this.setState({perfil:reponse});
    }

    render () {
        return(
            <div className="Home">
                <span className="Span-Logo">
                    <span className="Logo">
                        <span>Github</span>
                        <span className="text-style-1"> Search</span>
                    </span>
                </span>
                <span className="Span-Search">
                    <SearchInput responseCallback={this.getResponse}/>
                </span>
            </div>
        );
    }
}