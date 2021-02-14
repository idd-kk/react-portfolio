import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './skills';
import Education from './education';
import Experience from './experience';

class Resume extends React.Component {
    render () {
        return (
            <div>
                <Grid>
                    <Cell col={4} style={{padding: '1em'}}>

                        <h1>Kris Kay</h1>

                        <h3 style={{color: 'grey'}}>Front-end Developer & Interaction Designer</h3>

                        <h4>Phone</h4>
                        <p>(123) 456-7890</p>
                        <br></br>
                        <h4>Email</h4>
                        <p>hello@kris-kay.com</p>

                        <br></br>
                        <br></br>

                        <h2>Skills</h2>

                        <Skills
                        skill="Web Design"
                        progress={80} />

                        <Skills
                        skill="CSS"
                        progress={90} />

                        <Skills
                        skill="Javascript"
                        progress={70} />

                        <Skills
                        skill="User Interface Design"
                        progress={90} />

                        <Skills
                        skill="Adobe Illustrator"
                        progress={100} />

                        <Skills
                        skill="Figma"
                        progress={100} />

                        <Skills
                        skill="ARkit"
                        progress={70} />        
                      
                    </Cell>


                    <Cell className="resume-right-col" col={8}>

                        <h2 style={{paddingTop: '5em'}}>Experience</h2>

                        <Experience
                        startYear={2012}
                        endYear={"Present"}
                        jobName="Web and Graphic Designer"
                        jobplace="Freelance"
                        jobDescription0="
                        Designed, prototyped, built, and tested fully responsive mobile-first web applications"

                        jobDescription1="
                        Produced wire-frames, site maps, user journeys, usability reports, and clickable prototypes to set solid foundations for truly remarkable user experiences"

                        jobDescription2="
                        Facilitated discovery sessions with clients to uncover their high-level goals, brand personality, and to clearly establish the scope of the project at hand"
                        />

                        <Experience
                        startYear={2020}
                        endYear={2020}
                        jobName="IT  support"
                        jobplace="George Brown College"
                        jobDescription0="
                        Responded to service calls from staff and faculty, and resolved technical issues and equipment failures during live classes and events"

                        jobDescription1="
                        Kept track of inventory and ordered necessary equipment"

                        jobDescription2="
                        Collaborated with staff members across campuses, to solve connectivity problems, and to coordinate critical maintenance"
                        />

                        <Experience
                        startYear={2019}
                        endYear={2020}
                        jobName="Digital Fabrication Technician"
                        jobplace="George Brown College"
                        jobDescription0="
                        Taught the proper procedures for safe and effective use of the equipment and optimal file set-up"

                        jobDescription1="
                        Utilized knowledge of hardware, to advise students and faculty on how to best archive their project goals"

                        jobDescription2="
                        Operated and maintained 3D printers, laser cutters, and other fabrication machinery"
                        />

                        <Experience
                        startYear={2019}
                        endYear={"2020"}
                        jobName="UX / UI Designer"
                        jobplace="Cone.io"
                        jobDescription0="
                        Applied knowledge of usability best practices and WCAG guidelines to create comprehensive reports that communicated the necessary product adjustments"

                        jobDescription1="
                        Evaluated user and stack-holder feedback to inform rapid prototyping iterations at multiple levels of fidelity"

                        jobDescription2="
                        Contributed to experience and feature innovation through research and collaborative concept brainstorming sessions"
                        />

                        <br></br>
                        <br></br>

                        <h2>Education</h2>
                        <Education
                        startYear={2018}
                        endYear={2021}
                        schoolName="George Brown College"
                        schoolDescription="Interaction Design and Development" />

                        <Education
                        startYear={2018}
                        endYear={2018}
                        schoolName="OCAD University"
                        schoolDescription="Introduction to Wearable Media" />

                        <Education
                        startYear={2009}
                        endYear={2011}
                        schoolName="George Brown College"
                        schoolDescription="Fashion Techniques and Design" />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;