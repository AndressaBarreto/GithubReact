import React, {Component} from 'react';
import './reposDetail.css';

export default class ReposDetail extends Component {
    render(){
        const items = [];
        
        if(this.props.reposContent < 1 ){
            return <div></div>
        }else{
            const reposContent = this.props.reposContent.sort(function(a,b) {
                return a.stargazers_count > b.stargazers_count ? -1 : a.stargazers_count > b.stargazers_count ? 1 : 0;
            }); ;

            for (var i = 0 ; i <= reposContent.length -1 ; i++ ){
                items.push(
                    <div key={reposContent[i].id} className="Span-Repos-Detail">
                        <span className="repo-name">{reposContent[i].name}</span>
                        <span className="repo-description">{reposContent[i].description}</span>
                        <span className="Align-Helper">
                            <img src={require("../img/star_icon.svg")} alt="star_icon.svg"/>
                            <span className="star-count">{reposContent[i].stargazers_count}</span>
                        </span>
                    </div>
                )
            }

            return (
                <div className="Div-Repos-List">
                    {items}
                </div>
            );
        }
    }
}