import React from 'react';  
import './container.css';
import BodyClassName from 'react-body-classname';
class container extends React.Component{
    render(){
        return(
                <BodyClassName className='containbackground'>
                <div className="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Welcome To the World of Dreams</h1>
                    <p class="lead">This Webpage represent the effort for a programer to prove them what they can do for there Dreams.</p>
                </div>
                </div>
                </BodyClassName>
        );
    }
}
 
export default container;