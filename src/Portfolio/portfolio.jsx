/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
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
import $ from "jquery";
class portfolio extends React.Component{
  render(){
              //navbar solid color code
              $(document).ready(function(){       
                var scroll_start = 0;
                var startchange = $('#startchange');
                var offset = startchange.offset();
                 if (startchange.length){
                $(document).scroll(function() { 
                   scroll_start = $(this).scrollTop();
                   if(scroll_start > offset.top) {
                       $(".Navbar-default").css('background-color', 'white');
                      $(".icon-bar").css('background-color', 'black');
                    } else {
                       $('.Navbar-default').css('background-color', 'transparent');
                       $(".icon-bar").css('background-color', '#fff');
                    }
                });
                 }
             });

             //************************************** */

    return(
              <div className="sr jumbotron-fluid" id='Portfol'>
              <div className='parallax container-fluid con1'>
                <div className="photo-gallery text-center"  >
                  <div className="container" >
                        <div id="startchange" className="row photos">
                            <div className="col-sm-6 col-md-4 col-lg-3 item">
                                <div className="hovereffect">
                                  <a href="./images/back.png" data-lightbox="photos"><img alt="Backgroudimage" className="img-fluid imgsize" src={Back} /></a>
                                  <div className="overlay">
                                    <p>
                                        <a href="www.linkedin.com/in/kevin-mehta-34b96680">
                                          <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a href="https://github.com/kevinmehta137?tab=repositories">
                                        <i className="fab fa-github"></i>
                                        </a>
                                        <a href="https://twitter.com/kevinmehta137">
                                          <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="https://www.facebook.com/kevinmehta137">
                                          <i className="fab fa-facebook"></i>
                                        </a>
                                    </p>
                                </div>
                                </div> 
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 item">
                              <div className="hovereffect2">
                                <a href="assets/img/building.jpg" data-lightbox="photos"><img className="img-fluid imgsize" src={Back1} /></a>
                                <div className="overlay">
                                              <div className="rotate">
                                      <p className="group1">
                                          <a href="www.linkedin.com/in/kevin-mehta-34b96680">
                                              <i className="fab fa-linkedin"></i>
                                          </a>
                                          <a href="https://github.com/kevinmehta137?tab=repositories">
                                              <i className="fab fa-github"></i>
                                          </a>
                                      </p>
                                          <hr/>
                                          <hr/>
                                      <p className="group2">
                                        <a href="https://twitter.com/kevinmehta137">
                                            <i className="fab fa-twitter"></i>
                                          </a>
                                          <a href="https://www.facebook.com/kevinmehta137">
                                              <i className="fab fa-facebook"></i>
                                          </a>
                                      </p>
                                  </div>

                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 item">
                              <div className="hovereffect3">
                                <a href="assets/img/loft.jpg" data-lightbox="photos"><img className="img-fluid imgsize" src={Back2} /></a>
                                  <div className="overlay">
                                      <p>
                                        <a href="www.linkedin.com/in/kevin-mehta-34b96680" className="fab fa-linkedin"></a>
                                      </p>
                                      <p>
                                        <a href="https://www.facebook.com/kevinmehta137" className="fab fa-facebook"></a>
                                      </p>
                                      <p>
                                        <a href="https://github.com/kevinmehta137?tab=repositories" className="fab fa-github"></a>
                                      </p>
                                      <p>
                                      <a href="https://twitter.com/kevinmehta137">
                                          <i className="fab fa-twitter"></i>
                                        </a>
                                      </p>
                                  </div>     
                              </div>  
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 item">
                              <div className="hovereffect4">
                                <a href="assets/img/building.jpg" data-lightbox="photos"><img className="img-fluid imgsize" src={Back3} /></a>
                                  <div className="overlay">
                                      <p className="set1">
                                          <a href="www.linkedin.com/in/kevin-mehta-34b96680">
                                              <i className="fab fa-linkedin"></i>
                                          </a>
                                          <a href="https://www.facebook.com/kevinmehta137">
                                              <i className="fab fa-facebook"></i>
                                          </a>
                                      </p>
                                      <hr/>
                                      <hr/>
                                      <hr/>
                                      <p className="set2">
                                          <a href="https://github.com/kevinmehta137?tab=repositories">
                                              <i className="fab fa-github"></i>
                                          </a>
                                          <a href="https://twitter.com/kevinmehta137">
                                              <i className="fab fa-twitter"></i>
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