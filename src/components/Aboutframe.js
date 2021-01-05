import React from 'react';
import './Aboutframe.css';

function Aboutframe() {
  return (
            <div className="pt-table  about-background">
                <div className="pt-tablecell relative">
                    <div className="container">
                        <div className="row">
                        <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                                <div className="page-title text-center">
                                    <h2 className='white-sans'>Jacob <span className="primary">Metcalfe</span> <span className="title-bg">About</span></h2>
                                    <p>Creative-minded and detail-oriented individual with the ability to adhere to established procedures 
                                      and learn on my own under little or no supervision. Currently a Software Engineer at LinQuest Corporation, 
                                      incorporating expertise in software design, application development, and quality assurance.</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <div className="about-author">
                                    <figure className="author-thumb">
                                        <img src="images/author.PNG" alt=""/>
                                    </figure>
                                    <div className="author-desc">
                                      <p><b>Name: </b>Jacob Metcalfe</p>
                                        <p><b>Currently Living In: </b>Colorado</p>
                                        <p><b>Hobbies: </b> Mountain Biking, Snowboarding, Photoshop, Video Games</p>
                                    </div>
                                </div> 
                                <p>My name is Jacob Metcalfe. Currently I am an Intern Software Engineer at LinQuest Corporation.
                                  Throughout my career, I have worked primarily with PNT and Imagery satellites, using a multitude of frameworks.
                                  My overall goal in terms of my career is to be able to see a rocket (that I've assisted in engineering) launch.
                                </p>
                                <p>Personally, I would like to eventually start my own company in near Venice, CA. This company would focus on clothing.
                                  This is just a weekend side project I want to have, besides computer science I do find marketing interesting. Incorporating my
                                  Photoshop and Web Development skills I believe it would be a fun task.
                                </p>
                                <h5 className="text-center pad-about-top">Below Are Some Of My Skills To Assist In My Venture
                                </h5>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <div className="section-title clear text-center">
                                    <h3 className='white-sans'>Object Oriented Programming</h3>
                                </div>
                                    <div className="progress clear">
                                        <div className="skill-name">Python</div>
                                        <div className="skill-name">Java</div>
                                        <div className="skill-name">C++</div>
                                        <div className="skill-name">C#</div>
                                        <div className="skill-name">JavaScript</div>
                                        <div className="skill-name">GO</div>
                                    </div>
                                    <div className="section-title clear text-center">
                                    <h3 className='white-sans'>Other Languages And Frameworks</h3>
                                </div>
                                    <div className="progress clear">
                                        <div className="skill-name">Bash</div>
                                        <div className="skill-name">Batch</div>
                                        <div className="skill-name">XML</div>
                                        <div className="skill-name">JSON</div>
                                        <div className="skill-name">HTML5, CSS</div>
                                        <div className="skill-name">Flask</div>
                                        <div className="skill-name">React</div>
                                    </div>
                                    <div className="section-title clear text-center">
                                    <h3 className='white-sans'>Server / Cloud Computing</h3>
                                </div>
                                    <div className="progress clear">
                                        <div className="skill-name">SQL</div>
                                        <div className="skill-name">MongoDb</div>
                                        <div className="skill-name">AWS</div>
                                        <div className="skill-name">MS Azure</div>
                                    </div>
                                    <div className="section-title clear text-center">
                                    <h3 className='white-sans'>Testing And Documentation</h3>
                                </div>
                                    <div className="progress clear">
                                    <div className="skill-name">Jasmine</div>
                                        <div className="skill-name">Puppeteer</div>
                                        <div className="skill-name">Jest</div>
                                      <div className="skill-name">Technical Writing</div>
                                        <div className="skill-name">MS Office Suite</div>
                                        <div className="skill-name">Libre Office Suite</div>

                                    </div>

                                    <div className="section-title clear text-center">
                                    <h3 className='white-sans'>Continuous Integration / Continous Development</h3>
                                </div>
                                    <div className="progress clear">
                                      <div className="skill-name">Agile</div>
                                        <div className="skill-name">JIRA</div>
                                        <div className="skill-name">Confluence</div>
                                        <div className="skill-name">Git</div>
                                        <div className="skill-name">Jenkins</div>
                                        <div className="skill-name"></div>
                                    </div>
                            </div> 
                        </div> 
                    </div>
                </div> 
            </div>
        );
}

export default Aboutframe;

