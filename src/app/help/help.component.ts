import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  speech: any;
  speechData: any;

  title = "Aquí Responderemos A Tus Preguntas Mas Frecuentes De La Mejor Manera Posible.";
  q1 = `¿Cuentan con planes de financiamiento?`;
  q2 = `¿Los doctores son profesionales?`;
  q3 = `¿Cómo puedo ponerme en contacto con ustedes?`;
  q4 = ` ¿Cómo puedo crear una cuenta DentaCare?`;
  q5 = `¿Qué servicios ofrecen como clínica dental?`;
  q6 = `¿Qué es DentaCare?`;
  an1 = `Así es, todos nuestros procedimientos cuentan con diferentes planes de financiamiento, pregúntale a tu doctor tus opciones de financiamiento.`;
  an2 = `Si, todos nuestros especialistas están avalados y certificados por diferentes instituciones de renombre nacional e internacional.`;
  an3 = `Para poder contactarnos puedes hacer click en la pestaña de contact, o haciendo click aquí.`;
  an4 = `Es muy fácil, solamente has click aquí, y sigue las instrucciones del formulario.`;
  an5 = `Puedes revisar todos nuestros servicios haciendo click aquí.`;
  an6 = `DentaCare es una clínica dental especializada que ofrece una gran variedad de servicios dentales a un precio justo y siempre de calidad. Sí quieres saber mas sobre nosotros visita nuestra sección About Us.`;


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
        text: this.title,
      })
      .then(() => {
        console.log('Exito');
      })
      .catch((e: any) => {
        console.error('Ocurrio un error', e);
      });
      this.speech
      .speak({
        text: this.q1,
      })
      this.speech
      .speak({
        text: this.an1,
      })
      this.speech
      .speak({
        text: this.q2,
      })
      this.speech
      .speak({
        text: this.an2,
      })
      this.speech
      .speak({
        text: this.q3,
      })
      this.speech
      .speak({
        text: this.an3,
      })
      this.speech
      .speak({
        text: this.q4,
      })
      this.speech
      .speak({
        text: this.an4,
      })
      this.speech
      .speak({
        text: this.q5,
      })
      this.speech
      .speak({
        text: this.an5,
      })
      this.speech
      .speak({
        text: this.q6,
      })
      this.speech
      .speak({
        text: this.an6,
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