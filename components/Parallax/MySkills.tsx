import useOnScreen from '../../helpers/useOnScreen';
import React, { useState, useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaSass, FaGitAlt, FaLinux, FaExpeditedssl, FaFigma, FaTrello, FaJira } from 'react-icons/fa';
import {SiNextdotjs, SiJavascript, SiChartdotjs, SiStrapi, SiPostman, SiMongodb, SiNginx, SiVisualstudiocode, SiSlack, SiAdobeillustrator, SiTypescript, SiFramer} from 'react-icons/si';
import {MdDns} from 'react-icons/md';
import {DiScrum} from 'react-icons/di';


import classes from './parallax.module.scss'

const MySkills = () : JSX.Element => {
    const [animate, setAnimate] = useState('')
    const isComponentLoad = useRef(true);
    const ref = useRef(null)
    const isvisible = useOnScreen(ref)
    
    useEffect(() =>{
        if (isComponentLoad.current) {
            isComponentLoad.current = false;
            return
        }
        setAnimate(isvisible ? classes.a : '')
    }, [isComponentLoad.current, isvisible])
    
    
    return(
        <div>
            <div className={[classes.MySkills, animate].join(' ')} ref={ref}>
                <div>
                    <FaHtml5 className={classes.SkillIcon}/>
                    <div>Html5</div>
                </div>
                <div>
                    <FaCss3Alt className={classes.SkillIcon}/>
                    <div>Css3</div>
                </div>
                <div>
                    <FaSass className={classes.SkillIcon}/>
                    <div>Sass</div>
                </div>
                <div>
                    <SiJavascript className={classes.SkillIcon}/>
                    <div>Javascript</div>
                </div>
                <div>
                    <FaReact className={classes.SkillIcon}/>
                    <div>React</div>
                </div>
                <div>
                    <SiNextdotjs className={classes.SkillIcon}/>
                    <div>Next.js</div>
                </div>
                <div>
                    <SiTypescript className={classes.SkillIcon}/>
                    <div>TypeScript</div>
                </div>
                <div>
                    <SiChartdotjs className={classes.SkillIcon}/>
                    <div>Chart.js</div>
                </div>
                <div>
                    <SiFramer className={classes.SkillIcon}/>
                    <div>Framer</div>
                </div>
                <div>
                    <FaNodeJs className={classes.SkillIcon}/>
                    <div>Node.js</div>
                </div>
                <div>
                    <SiStrapi className={classes.SkillIcon}/>
                    <div>Strapi</div>
                </div>
                <div>
                    <SiPostman className={classes.SkillIcon}/>
                    <div>Postman</div>
                </div>
                <div>
                    <FaGitAlt className={classes.SkillIcon}/>
                    <div>Git</div>
                </div>
                <div>
                    <FaLinux className={classes.SkillIcon}/>
                    <div>Linux</div>
                </div>
                <div>
                    <SiNginx className={classes.SkillIcon}/>
                    <div>Nginx</div>
                </div>
                <div>
                    <MdDns className={classes.SkillIcon}/>
                    <div>DNS</div>
                </div>
                <div>
                    <FaExpeditedssl className={classes.SkillIcon}/>
                    <div>Ssl</div>
                </div>
                <div>
                    <SiMongodb className={classes.SkillIcon}/>
                    <div>MongoDB</div>
                </div>
                <div>
                    <SiVisualstudiocode className={classes.SkillIcon}/>
                    <div>VS Code</div>
                </div>
                <div>
                    <FaFigma className={classes.SkillIcon}/>
                    <div>Figma</div>
                </div>
                <div>
                <SiAdobeillustrator className={classes.SkillIcon}/>
                    <div>Illustrator</div>
                </div>
                <div>
                    <DiScrum className={classes.SkillIcon}/>
                    <div>Scrum</div>
                </div>
                <div>
                    <FaTrello className={classes.SkillIcon}/>
                    <div>Trello</div>
                </div>
                <div>
                    <FaJira className={classes.SkillIcon}/>
                    <div>Jira</div>
                </div>
                <div>
                    <SiSlack className={classes.SkillIcon}/>
                    <div>Slack</div>
                </div>

            </div>
        </div>
    )
}

export default MySkills