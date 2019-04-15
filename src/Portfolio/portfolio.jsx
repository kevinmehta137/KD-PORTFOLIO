import React from 'react';  
import './portfolio.css';
import './portfolio2.css';
import './portfolio3.css';
import './portfolio4.css';
import './snowbol.css';
import Back from "./images/back.png";
import Back1 from "./images/project1.png";
import Back2 from "./images/project2.png";
import Back3 from "./images/project3.png";

class portfolio extends React.Component{
  render(){
    return(
              <div className="sr jumbotron-fluid" id='Portfol'>
              <div className='parallax container-fluid'>
                <div class="photo-gallery text-center"  >
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
                              <div class="hovereffect2">
                                <a href="assets/img/building.jpg" data-lightbox="photos"><img class="img-fluid imgsize" src={Back1} /></a>
                                <div class="overlay">
                                              <div class="rotate">
                                      <p class="group1">
                                          <a href="#">
                                              <i class="fab fa-linkedin"></i>
                                          </a>
                                          <a href="#">
                                              <i class="fab fa-github"></i>
                                          </a>
                                      </p>
                                          <hr/>
                                          <hr/>
                                      <p class="group2">
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
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3 item">
                              <div class="hovereffect3">
                                <a href="assets/img/loft.jpg" data-lightbox="photos"><img class="img-fluid imgsize" src={Back2} /></a>
                                  <div class="overlay">
                                      <p>
                                        <a href="#" class="fab fa-linkedin"></a>
                                      </p>
                                      <p>
                                        <a href="#" class="fab fa-facebook"></a>
                                      </p>
                                      <p>
                                        <a href="#" class="fab fa-github"></a>
                                      </p>
                                      <p>
                                      <a href="#" class="fab fa-google-plus-square"></a>
                                      </p>
                                  </div>     
                              </div>  
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3 item">
                              <div class="hovereffect4">
                                <a href="assets/img/building.jpg" data-lightbox="photos"><img class="img-fluid imgsize" src={Back3} /></a>
                                  <div class="overlay">
                                      <p class="set1">
                                          <a href="#">
                                              <i class="fab fa-linkedin"></i>
                                          </a>
                                          <a href="#">
                                              <i class="fab fa-facebook"></i>
                                          </a>
                                      </p>
                                      <hr/>
                                      <hr/>
                                      <hr/>
                                      <p class="set2">
                                          <a href="#">
                                              <i class="fab fa-github"></i>
                                          </a>
                                          <a href="#">
                                              <i class="fab fa-google-plus-square"></i>
                                          </a>
                                      </p>
                                  </div>
                              </div>
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