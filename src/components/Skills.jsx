import React from "react";

function Skills() {
    return (
        <div className="skills">
            <h2 className="section-title">Skills</h2>

            <div className="skills-container">

                {/* Front End */}
                <div className="skills-category">
                    <h3>Front End</h3>
                    <div className="skills-box">
                        <div className="skill-item">
                            <i className="bx bxl-html5"></i>
                            <p>HTML</p>
                        </div>
                        <div className="skill-item">
                            <i className="bx bxl-css3"></i>
                            <p>CSS</p>
                        </div>
                        <div className="skill-item">
                            <i className="bx bxl-javascript"></i>
                            <p>JavaScript</p>
                        </div>
                        <div className="skill-item">
                            <i className="bx bxl-react"></i>
                            <p>React</p>
                        </div>
                    </div>
                </div>

                {/* Back End */}
                <div className="skills-category">
                    <h3>Back End</h3>
                    <div className="skills-box">
                        <div className="skill-item">
                            <i className="bx bxl-nodejs"></i>
                            <p>Node.js</p>
                        </div>
                        <div className="skill-item">
                            <i className="bx bxl-java"></i>
                            <p>Java</p>
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div className="skills-category">
                    <h3>Mobile</h3>
                    <div className="skills-box">
                        <div className="skill-item">
                            <i className="bx bxl-flutter"></i>
                            <p>Flutter</p>
                        </div>
                    </div>
                </div>

                {/* Tools */}
                <div className="skills-category">
                    <h3>Tools</h3>
                    <div className="skills-box">
                        <div className="skill-item">
                            <i className="bx bxl-git"></i>
                            <p>Git</p>
                        </div>
                        <div className="skill-item">
                            <i className="bx bxl-github"></i>
                            <p>GitHub</p>
                        </div>
                        <div className="skill-item">
                            <i className="bx bx-code-alt"></i>
                            <p>Vercel</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Skills;
