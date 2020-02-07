import React, {Component} from 'react';
import HomeButton from '../components/homebutton';
import SearchInput from '../components/search' ;
import './notfound.css'

export default class NotFound extends Component {
    render () {
        return(
            <div className="Not-Found" >
                <span className="Span-Home Menu">
                    <HomeButton className="Github-Search Menu"/>
                </span>
                <span className="Span-Search Menu">
                    <SearchInput/>
                </span>
                <span className="Span-Message-Not-Found">
                    User not found :(
                </span>
            </div>
        );
    }
}