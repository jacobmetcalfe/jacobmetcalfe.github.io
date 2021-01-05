import React from 'react';
import './Aboutframe.css';
import { Scrollbars } from 'react-custom-scrollbars';

function ResumeFrame() {
  return (
            <div className="pt-table  about-background">
                <div className="pt-tablecell relative">
                    
                    <div className="container">
                        <div className="row">
                                <div className="page-title text-center">
                                    <h2 className='white-sans'>Resume <span className="primary"></span> <span className="title-bg">Resume</span></h2>
                                    </div>
                                    <div className="row">
                            <div className="col-md-6">
                                <div className="history-block">
                                    <div className="section-title light clear">
                                        <h3>Education</h3>
                                    </div>
                                    <div className="history-scroller">
                                    <Scrollbars style={{height: 290 }}>
                                        <div className="history-item">
                                            <div className="history-icon">
                                            <i className="fas fa-school"></i>
                                            </div>
                                            <div className="history-text">
                                                <h5>University of Colorado at Colorado Springs</h5>
                                                <span>2017 - 2021<br></br></span>
                                                <span>BS Computer Science, Minor in Math, Military Science<br></br></span>
                                                <span>GPA: 3.7</span>
                                            </div>
                                        </div>
                                        <div className="history-item">
                                            <div className="history-icon">
                                            <i className="fas fa-school"></i>
                                            </div>
                                            <div className="history-text">
                                                <h5>Rampart High School</h5>
                                                <span>2012 - 2016<br></br></span>
                                                <span>GPA: 4.0</span>
                                            </div>
                                        </div>
                                        <div className="history-item">
                                            <div className="history-icon">
                                            <i className="fas fa-certificate"></i>
                                            </div>
                                            <div className="history-text">
                                                <h5>COMPTIA Security+</h5>
                                                <span>Jan 2020<br></br> Expires Jan 2023</span>
                                            </div>
                                        </div>
                                        <div className="history-item">
                                            <div className="history-icon">
                                            <i className="fas fa-laptop-house"></i>
                                            </div>
                                            <div className="history-text">
                                                <h5>Introduction To Artificial Intelligence</h5>
                                                <span>Jan 2020<br></br> Certfied By: IBM<br></br> Earned On Coursera</span>
                                            </div>
                                        </div>
                                        
                                        </Scrollbars>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="history-block">
                                    <div className="section-title light clear">
                                        <h3>Work Experience</h3>
                                    </div>
                                    <div className="history-scroller">
                                    <Scrollbars style={{height: 290 }}>
                                        <div className="history-item">
                                            <div className="history-icon">
                                            <i class="fas fa-briefcase"></i>
                                            </div>
                                            <div className="history-text">
                                                <h5>Software Engineer Intern</h5>
                                                <span>Aug 2019 - Present | LinQuest Corporation | Colorado Springs, CO</span>
                                                <span>
                                                <br></br>❖ Developed functional test framework with Python to simulate various software tests.
                                                <br></br>❖ Implemented numerous GUI implementations into applications using Dialog Blocks.
                                                <br></br>❖ Configured software for Windows to become operable on Linux operating systems.
                                                <br></br>❖ Grasped a firm understanding of PNT satellites and how they operate.
                                                </span>
                                            </div>
                                        </div>
                                        <div className="history-item">
                                            <div className="history-icon">
                                            <i class="fas fa-briefcase"></i>
                                            </div>
                                            <div className="history-text">
                                                <h5>Executive Officer</h5>
                                                <span>Sept 2018 - Present | US Army Reserve, 1st Space Brigade | Fort Carson, CO</span>
                                                <span>
                                                <br></br>❖ Assisted in developing a convolutional neural network using Python’s Caffe library.
                                                <br></br>❖ Explored big data concepts with terabytes of data using Python’s Pandas library and SQL.
                                                <br></br>❖ Configured software for Windows to become operable on Linux operating systems.
                                                <br></br>❖ Grasped a firm understanding of PNT satellites and how they operate.
                                                </span>
                                            </div>
                                        </div>
                                        <div className="history-item">
                                            <div className="history-icon">
                                            <i class="fas fa-briefcase"></i>
                                            </div>
                                            <div className="history-text">
                                                <h5>Software Engineer Intern</h5>
                                                <span>May 2019 - August 2019 | Department of Defense | Virginia</span>
                                                <span>
                                                <br></br>❖ Assisted in developing a convolutional neural network using Python’s Caffe library.
                                                <br></br>❖ Explored big data concepts with terabytes of data using Python’s Pandas library and SQL.
                                                <br></br>❖ Understand space concepts and their impact to the warfighter and other agencies.
                                                </span>
                                            </div>
                                        </div>
                                        <div className="history-item">
                                            <div className="history-icon">
                                            <i class="fas fa-briefcase"></i>
                                            </div>
                                            <div className="history-text">
                                                <h5>Senior Technician</h5>
                                                <span>Aug 2017 - May 2019 | University of Colorado, Colorado Springs | Colorado Springs, CO</span>
                                                <span>
                                                <br></br>❖ Developed functional test framework with Python to simulate various software tests.
                                                <br></br>❖ Implemented numerous GUI implementations into applications using Dialog Blocks.
                                                <br></br>❖ Configured software for Windows to become operable on Linux operating systems.
                                                <br></br>❖ Grasped a firm understanding of PNT satellites and how they operate.
                                                </span>
                                            </div>
                                        </div>
                                        <div className="history-item">
                                            <div className="history-icon">
                                            <i class="fas fa-briefcase"></i>
                                            </div>
                                            <div className="history-text">
                                                <h5>Geospatial Engineer</h5>
                                                <span>Aug 2016 - Sept 2018 | US Army Reserve, 1st Space Brigade | Fort Carson, CO</span>
                                                <span>
                                                <br></br>❖ Design maps and tactical decision aids from the use of satellite imagery.
                                                <br></br>❖ Queried results using Python and SQL.
                                                <br></br>❖ Presented briefs based on products my team and I create to assist Commanders.
                                                </span>
                                            </div>
                                        </div>
                                        
                                        </Scrollbars>
                                    </div>
                                </div>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
        );
}

export default ResumeFrame;

