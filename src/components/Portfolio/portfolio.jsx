import React from 'react';  
import './portfolio.css';
import './snowbol.css';
import Back from "./images/back.png";
import Back1 from "./images/project1.png";
import Back2 from "./images/project2.png";
import Back3 from "./images/project3.png";
import Gallery from 'react-photo-gallery';

var FontAwesome = require('react-fontawesome');
class portfolio extends React.Component{
    render(){
      return(
      <div className="sr">
        <div class='parallax'>
          <div class="photo-gallery "  >
            <div class="container" >
                  <div class="row photos">
                      <div class="col-sm-6 col-md-4 col-lg-3 item">
                          <div class="hovereffect">
                            <a href="./images/back.png" data-lightbox="photos"><img class="img-fluid imgsize" src={Back} /></a>
                            <div class="overlay">
                              <p>
                                  <a href="#">
                                    <i class="fab fa-linkedin"></i>
                                  </a>
                                  <a href="#">
                                  <i class="fab fa-github"></i>
                                  </a>
                                  <a href="#">
                                    <i class="fab fa-google-plus-square"></i>
                                  </a>
                                  <a href="#">
                                    <i class="fab fa-facebook"></i>
                                  </a>
                              </p>
                          </div>
                          </div> 
                      </div>
                      <div class="col-sm-6 col-md-4 col-lg-3 item">
                        <a href="assets/img/building.jpg" data-lightbox="photos"><img class="img-fluid imgsize" src={Back1} /></a>
                      </div>
                      <div class="col-sm-6 col-md-4 col-lg-3 item">
                        <a href="assets/img/loft.jpg" data-lightbox="photos"><img class="img-fluid imgsize" src={Back2} /></a>
                      </div>
                      <div class="col-sm-6 col-md-4 col-lg-3 item">
                        <a href="assets/img/building.jpg" data-lightbox="photos"><img class="img-fluid imgsize" src={Back3} /></a>
                      </div>
                  </div>
                </div>
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/js/lightbox.min.js"></script>      
        </div>
        <footer>
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </footer>
      </div>
      );
      
    }
}            
export default portfolio;