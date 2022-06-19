import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  video = "CIHc2B06PFc";

  midTitle = "Una Clínica Dental En La Que Puedes Confiar.";
  midTitle1 = "Nuestra clínica cuenta con los estándares mas altos de calidad.";
  midText = `Estamos abalados por diferentes organismos de odontología nacionales lo
  que nos permite ofrecerte el servicio de calidad que mereces a un precio justo`;
  bullet1 = "Ganadora a Mejor Clínica";
  bullet2 = "Personal Profesional";
  bullet3 = "Emergencias 24/7";
  bullet4 = "Precios Justos";

  button = "Ver Doctores";

  speech: any;
  speechData: any;
  constructor() {
    this.speech = new Speech(); 
    if (this.speech.hasBrowserSupport()) {
      console.log('speech synthesis supported');
      this.speech.init({
        volume: 1,
        lang: 'es-MX',
        rate: 1,
        pitch: 1,

        splitSentences: true,
        listeners: {
          onvoiceschanged: (voices: any) => {
            console.log('Event voiceschanged', voices);
          },
        },
      });
    }

  }


  start() {
    this.speech
      .speak({
      text: this.midTitle,
        
      })
      .then(() => {
        console.log('Exito');
      })
      .catch((e: any) => {
        console.error('Ocurrio un error', e);
      });

      this.speech
      .speak({
          text: this.midTitle1  
      })
      this.speech
      .speak({
          text: this.midText  
      })
      this.speech
      .speak({
          text: this.bullet1  
      })
      this.speech
      .speak({
          text: this.bullet2  
      })
      this.speech
      .speak({
          text: this.bullet3  
      })
      this.speech
      .speak({
          text: this.bullet4  
      })
      this.speech
      .speak({
          text: this.button  
      })

  }

  pause() {
    this.speech.pause();
  }
  resume() {
    this.speech.resume();
  }

  cancel() {
    this.speech.cancel();
  }

  ngOnInit(): void {
  }

}
