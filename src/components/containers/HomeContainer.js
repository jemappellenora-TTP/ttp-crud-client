import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AllCampusesContainer from './AllCampusesContainer';

class HomeContainer extends Component{
    render(){
        return(
            <div>
                <p><Link to="/campuses">All Campuses</Link></p>
                <p><Link to={AllCampusesContainer}>All Students</Link></p>
            </div>
        )
    }
}
 export default HomeContainer;