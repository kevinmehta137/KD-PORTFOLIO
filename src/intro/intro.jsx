import React from 'react';  
import './intro.css';
import BodyClassName from 'react-body-classname';
import Introanimation from './introanimation.jsx';
import cxs from "cxs-components";
import TextLoop from "./component/textloop";
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { Container } from 'reactstrap';
import ReactBootstrap from 'react-bootstrap'
import Profile from "./Asset3.png";
import { Link } from 'react-router-dom';
import $ from "jquery";
import anime from 'animejs';
import {Button} from 'react-bootstrap';

// or less ideally
import {ButtonToolbar} from 'react-bootstrap';

//import  {AnimatedText}  from "./AnimatedText/AnimatedText.jsx";

    const Example = cxs("div")({
        fontSize: "24px",
    });

    const Title = cxs("div")({
        marginBottom: "5px",
        fontSize: "10px",
        fontWeight: 600,    
        textTransform: "uppercase",
        color: "#aaa",
    });

    const Section = cxs("div")({
        marginBottom: "50px",
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    });

    const StyledTextLoop = cxs(TextLoop)({
        display: "block",
    });




class intro extends React.Component{

    
    
    constructor(props) {
        super(props);
        this.state = {
            options: ["Passionate", "Creative"],
            interval: 0,
        };
    }

    State = {
        data: [
          { name: 'HTML', value: 90 },
          { name: 'CSS', value: 80 },
          { name: 'JAVASCRIPT', value: 80 },
          { name: 'REACT', value: 70 },
          { name: 'NODE.js', value: 70 },
          { name: 'VUE.js', value: 50 },
          { name: 'MONGO.DB', value: 50 }
        ]
      }


    componentDidMount() {
        setTimeout(() => {
            this.setState({
                options: [
                    "Passionate",
                    "Creative",
                    "Crazy",
                ],
            });
            console.log("change options");
        }, 10000);

        setTimeout(() => {
            this.setState({
                interval: 1000,
            });

            console.log("start");
            setTimeout(() => {
                this.setState({
                    interval: 0,
                });
                console.log("stop");
            }, 10000);
        }, 5000);
    }
    
    
    render(){
        $('.ml1 .letters').each(function(){
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span className='letter'>$&</span>"));
          });
          
          anime.timeline({loop: true})
            .add({
              targets: '.ml1 .letter',
              scale: [0.3,1],
              opacity: [0,1],
              translateZ: 0,
              easing: "easeOutExpo",
              duration: 600,
              delay: function(el, i) {
                return 70 * (i+1)
              }
            }).add({
              targets: '.ml1 .line',
              scaleX: [0,1],
              opacity: [0.5,1],
              easing: "easeOutExpo",
              duration: 700,
              offset: '-=875',
              delay: function(el, i, l) {
                return 80 * (l - i);
              }
            }).add({
              targets: '.ml1',
              opacity: 0,
              duration: 1000,
              easing: "easeOutExpo",
              delay: 1000
            });


        const { options, interval } = this.state;
        let barHeight = 30
        
        let barGroups = this.State.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
        <BarGroup d={d} barHeight={barHeight} />
         </g>);     
        return(
            <BodyClassName className="backimg">
            <div className="jumbotron-fluid">
                
                    <div className="container-fluid containersize ">
                        <div className="row context1">
                            <div className="col-md-8 Arrangediv5">
                                    <Section>
                                        <Example >
                                            <TextLoop springConfig={{ stiffness: 70, damping: 31 }} adjustingSpeed={500} >
                                                <span className="text_style">I'm Kevin Mehta</span>
                                                <span className="text_style">Passionate</span>
                                                <span className="text_style">Crazy</span>
                                                <span className="text_style">Creative</span>
                                            </TextLoop>{" "}
                                            <p className="text_style1 ">Web Devloper.</p>
                                        </Example>
                                    </Section>
                                </div>
                           
                            <div className="col-md-4 Arrangediv4">
                            <img src={Profile} className="imgarr img_size"></img>
                            </div>
                        </div>
                    <div className="arrow1 bounce1 container-fluid">
                        <p>You want to Know me Click Here</p>
                        <Link className="S1 fas fa-angle-down" to=""> </Link>
                    </div>
                    <Introanimation  />
                    </div>
                    
                    
              
                <div className=" infocontain ">
                <div className="container-fluid overDrop">
                   <div className="row">
                    <div className="text-center Arrangediv1 h1-sm col-md-4">
                        <h1>Professional<br/> Summary</h1>
                    </div>
                    <div className="text-left Arrangediv2 col-md-8">
                        <h3>•	Experiences working with HTML5, CSS3, JAVASCRIPT, HEROKU, GIT, GITHUB, MONGO.DB,
                                MVC, JQUERY, BOOTSTRAP, REACT.JS, NODE.JS, EXPRESS.JS, ANGULAR.<br/>
                            •	Experiences working with Adobe Illustrator, Photoshop for web designing and working as a freelancer for designing banners, Visiting cards, Broachers, Etc. </h3>
                    </div>

                   </div>
                   <div className="row" >
                        <div className="col-md-4 text-center Arrangediv1">
                            <h1>Skills</h1>
                        </div>
                        <div className="col-md-8 text-center  Arrangediv3">
                            <svg width="800" height="300" >
                                <g className="container1">
                                    <text className="title" x="10" y="30"></text>
                                    <g className="chart" transform="translate(100,60)">
                                    {barGroups}
                                    </g>
                                </g>
                            </svg>
                        </div>
                   </div>

                   <div className="row">
                    <div className="col-md-4 text-center Arrangediv1">
                        <h1>Experience</h1>
                    </div>
                    <div className="col-md-8 text-left Arrangediv2">
                        <h3>•  System Administrator (2019 – Present)<br/>
                                    Ashunya IT Inc., Orange, California<br/>
                                    <p>
                                        
                                        Responsibilities <br/>
                                        o    Provide hands-on technical support to users and ensure quick resolution of software and network issues to facilitate smooth workflow. 
                                             Manage Workstations, Servers, Cloud Base Database, Networks, and Connection base.Installed and configured computer hardware, software, systems, networks, and other equipment.<br/>
                                    
                                    </p>
                                    
                            •	Manager in Training (Current)<br/>
                                Fry’s Electronics. Anaheim. CA.<br/>
                                <p>
                                    
                                    Responsibilities <br/>
                                    o	Excellent Communication Skills with wide knowledge of computer Hardware and Networking Tools.<br/>
                                    o	Complete Department Goals for the week in Three Days.<br/>
                                    o	Top Sales with Excellent Customer Feedback’s.<br/>
                                </p>

                            •	Self Employed Designer (Current Part Time)<br/>
                                    Freelancer Los Angeles. CA.<br/>
                                   <p>
                                        Responsibilities<br/>
                                            o	Work on adobe Illustrator and photoshop for Web Designs.<br/>
                                            o	Work with direct client for designing banner, Broachers, Cards.<br/>
                                            o	Design logo for web site and company’s.<br/>
                                   </p>

                            •	Research and Development For (6 Months)<br/>
                                Prime Media Tech pvt. ltd. India<br/>
                                <p>
                                    Responsibilities<br/>
                                    o	Work on a Multi-Touch table using Microsoft Kinect Camera and built a game for children.<br/>
                                    o	Work on a Desktop application for a notification system for customers.<br/>

                                </p>
                            •	Software Troubleshooting for (6 Months)<br/>
                                Sai Enterprise pvt. Ltd. India<br/>
                                <p>
                                    Responsibilities<br/>
                                    o	Troubleshooting .Net based Software for billing and accounting.<br/>
                                    o	Worked on Crystal Report for Tax Payer Software.<br/>
                                    o	Build Customer Relationship to Upgrade the software from DOS based to .Net based.<br/>
                                </p>
                        </h3>
                    </div>

                   </div>
               
                <div className="overDrop2">
                        <div className="row text-center reumetext">
                                    <h1 className="ml1">
                                        <span className="text-wrapper">
                                            <span className="line line1"></span>
                                            <span className="letters">You want to know Me</span>
                                            <span className="line line2"></span>
                                        </span>
                                    </h1>
                                    <div className="container3">
                                        <ButtonToolbar >
                                                <Button variant="outline-secondary">Resume</Button>
                                        </ButtonToolbar>
                                    </div>
                        </div>
                </div>
                </div>
                </div>
                <script src="anime.min.js"></script>
            </div>
            </BodyClassName>
        );
    }
}

function BarGroup(props) {
    let barPadding = 2
    let barColour = '#348AA7'
    let widthScale = d => d * 10
  
    let width = widthScale(props.d.value)
    let yMid = props.barHeight * 0.5
    
    return <g className="bar-group">
      <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{props.d.name}</text>
      <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
      <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{props.d.value}</text>
    </g>
  }

export default intro;