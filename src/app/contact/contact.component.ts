import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  title = "¡Ponte en contacto con Nosotros!";
  text1 = "Numero Telefónico: 920-379-4022";
  text2 = "Dudas o Comentarios, ¡Por favor escríbenos!";
  text3 = "Ponte en contacto";

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
        text: this.text1,       
      })
      this.speech
      .speak({
        text: this.text2,       
      })
      this.speech
      .speak({
        text: this.text3,       
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