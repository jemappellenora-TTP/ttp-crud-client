import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HomeContainer extends Component{
    render(){
        return(
            <div className="home">
                <p><Link className="home-link" to="/campuses">All Campuses</Link></p>
                <p><Link className="home-link" to="/students">All Students</Link></p>
            </div>
        )
    }
}
 export default HomeContainer;