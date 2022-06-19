import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {


  text1 = "Los mejores servicios dentales a tu disposición";
  text2 = "Dale un vistazo a todos nuestros servicios";
  text3 = "Ofrecemos solamente los mejores procedimientos disponibles a un precio justo y con los mejores resultados.";
  text4 = "Nuestros servicios";
  service1 = "Limpieza Dental";
  price1 = "1500 $ ";
  text6 = "Dentistas Profesionales";
  text7 = "Equipo Moderno";
  text8 = "Disponibilidad 24/7";
  text9 = "Contáctanos";
  service2 = "Extracción";
  price2 = "1100 $ ";
  service3 = "Endodoncia";
  price3 = "3900 $ ";
  service4 = "Ortodoncia Invisible";
  price4 = "27000 $ ";
  service5 = "Puentes";
  price5 = "18000 $ ";
  service6 = "Coronas";
  price6 = "6500 $ ";


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
        text: this.text1,
      })
      .then(() => {
        console.log('Exito');
      })
      .catch((e: any) => {
        console.error('Ocurrio un error', e);
      });

      this.speech
      .speak({
        text: this.text2,
      })
      this.speech
      .speak({
        text: this.text3,
      })
      this.speech
      .speak({
        text: this.text4,
      })
      this.speech
      .speak({
        text: this.service1,
      })
      this.speech
      .speak({
        text: this.price1,
      })
      this.speech
      .speak({
        text: this.text6,
      })
      this.speech
      .speak({
        text: this.text7,
      })
      this.speech
      .speak({
        text: this.text8,
      })
      this.speech
      .speak({
        text: this.text9,
      })

      this.speech
      .speak({
        text: this.service2,
      })
      this.speech
      .speak({
        text: this.price2,
      })
      this.speech
      .speak({
        text: this.text6,
      })
      this.speech
      .speak({
        text: this.text7,
      })
      this.speech
      .speak({
        text: this.text8,
      })
      this.speech
      .speak({
        text: this.text9,
      })

      this.speech
      .speak({
        text: this.service3,
      })
      this.speech
      .speak({
        text: this.price3,
      })
      this.speech
      .speak({
        text: this.text6,
      })
      this.speech
      .speak({
        text: this.text7,
      })
      this.speech
      .speak({
        text: this.text8,
      })
      this.speech
      .speak({
        text: this.text9,
      })

      this.speech
      .speak({
        text: this.service4,
      })
      this.speech
      .speak({
        text: this.price4,
      })
      this.speech
      .speak({
        text: this.text6,
      })
      this.speech
      .speak({
        text: this.text7,
      })
      this.speech
      .speak({
        text: this.text8,
      })
      this.speech
      .speak({
        text: this.text9,
      })

      this.speech
      .speak({
        text: this.service5,
      })
      this.speech
      .speak({
        text: this.price5,
      })
      this.speech
      .speak({
        text: this.text6,
      })
      this.speech
      .speak({
        text: this.text7,
      })
      this.speech
      .speak({
        text: this.text8,
      })
      this.speech
      .speak({
        text: this.text9,
      })

      this.speech
      .speak({
        text: this.service6,
      })
      this.speech
      .speak({
        text: this.price6,
      })
      this.speech
      .speak({
        text: this.text6,
      })
      this.speech
      .speak({
        text: this.text7,
      })
      this.speech
      .speak({
        text: this.text8,
      })
      this.speech
      .speak({
        text: this.text9,
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