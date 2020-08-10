import React from 'react';  
import './home.css';
import { Link } from 'react-router-dom';
import BodyClassName from 'react-body-classname';
var FontAwesome = require('react-fontawesome');
class home extends React.Component{

    render(){
        return(
                <BodyClassName className='containbackground'>
                <div>
                <div className="jumbotron-fluid">
                <div className="container-fluid">
                    <div className="row contain">
                        <div className="col-md context text-center">
                            <h1 className="display-4">Welcome To the World of Dreams</h1>
                            <p className="lead">This Webpage represent the effort for a programer to prove them what they can do for there Dreams.</p>
                        </div>
                    </div>
                </div>
                </div>

                <div className="arrow bounce">
                     <Link className="S fas fa-angle-down" to="portfolio"> </Link>
                </div>
                </div>
                </BodyClassName>
        );
    }
}
 
export default home;