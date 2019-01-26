import React from 'react';  
import './container.css';
import BodyClassName from 'react-body-classname';
var FontAwesome = require('react-fontawesome');
class container extends React.Component{
    render(){
        return(
                <BodyClassName className='containbackground'>
                <div>
                <div className="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Welcome To the World of Dreams</h1>
                    <p class="lead">This Webpage represent the effort for a programer to prove them what they can do for there Dreams.</p>
                </div>
                </div>

                <div class="arrow bounce">
                     <a class="S fas fa-angle-down" href="#"></a>
                </div>
                </div>
                </BodyClassName>
        );
    }
}
 
export default container;