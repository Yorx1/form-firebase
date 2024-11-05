import { Component, OnInit } from '@angular/core';
import { NgParticlesService } from '@tsparticles/angular';
import { Container, Engine, ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

@Component({
  selector: 'shared-particles',
  templateUrl: './particles.component.html',
  styleUrl: './particles.component.css'
})
export class ParticlesComponent implements OnInit {
  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: "#fff"
      }
    },
    fpsLimit: 80,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: {
          enable: true,
          delay: 0.5
        }
      },
      modes: {
        push: {
          quantity: 2
        },
        repulse: {
          distance: 100,
          duration: 0.5
        }
      }
    },
    particles: {
      color: {
        value: "#09f"
      },
      links: {
        color: "#09f",
        distance: 200,
        enable: true,
        opacity: 0.9,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out"
        },
        random: false,
        speed: 3,
        straight: false
      },
      number: {
        density: {
          enable: false,
        },
        limit: {
          mode: "delete",
          value: 50
        },
        value: 30
      },
      opacity: {
        value: 1
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 3 }
      }
    },
    detectRetina: true
  };

  constructor(private ngParticlesService: NgParticlesService) { }

  ngOnInit(): void {
    this.ngParticlesService.init(async (e: Engine) => {
      console.log(e);

      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadSlim(e);
    });
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }
}
