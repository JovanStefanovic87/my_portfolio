import React from 'react'
import classes from './parallax.module.scss'

interface Props {
  isMobile: boolean
}

const About: React.FC<Props> = ({ isMobile }): JSX.Element => {
  const previewMod = isMobile ? classes.AboutMob : ''
  return (
    <div className={[classes.About, previewMod].join(' ')}>
      <fieldset>
        <legend>WELCOME</legend>
        <p>
          My name is Jovan Stefanović, I'm passionate front-end developer based in Subotica
          (Serbia). <br /><br />
          I am focused on creating interactive digital experiences on the web.
          <br />
          <br />I have 7 years experience with programming languages based on HTML, CSS and
          JAVASCRIPT <br />
          <br />
          For me web development is not only a job, it's a lifestyle.
        </p>
      </fieldset>
    </div>
  )
}

export default About
