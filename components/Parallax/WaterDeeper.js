import Particles from "react-tsparticles";

import classes from './parallax.module.scss'

const WaterDeeper = () => {
    return(
      <div className={classes.Water}>
        <Particles
            id="deeperWater"
            options={{
              background: {
                image: "linear-gradient(180deg, rgba(0, 18, 60, 1) 0%, rgba(0,0,0,1) 100%)",
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onHover: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                      particles_nb: 0,
                  },
                  remove: {
                      particles_nb: 1
                  },
                  repulse: {
                    distance: 150,
                    duration: 2,
                  },
                  bubble: {
                      distance: 400,
                      size: 10,
                      duration: 0.5,
                      opacity: 8,
                      speed: 3
                    },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                  animation: {
                      enable: true,
                      speed: 40,
                      sync: false
                  }
              },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: false,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: false,
                },
                move: {
                  enable: true,
                  speed: 1.5,
                  direction: "top",
                  random: true,
                  straight: true,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 0,
                    rotateY: 0
                  }
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 90,
                },
                opacity: {
                  value: 0.3,
                  random: true,
                  anim: {
                      enable: true,
                      speed: 0.2,
                      opacity_min: 0.1,
                      sync: true
                    }
                },
                shape: {
                  type: "image",
                  image: {
                    src: "https://www.themaninblue.com/experiment/word-bubbles/images/bubble.png"
                  },
                },
                size: {
                  value: 15,
                  random: true,
                  anim: {
                      enable: false,
                      speed: 20,
                      size_min: 10,
                      size_max: 20,
                      sync: true
                    }
                },
              },
              detectRetina: true,
            }}
          />
      </div>
        
    )

    
}

export default WaterDeeper

