import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  speech: any;
  speechData: any;

  name1 = "Salvador Melendez";
  name2 = "Montez Leyva";
  name3 = "Everardo Tobias";
  name4 = "Mariana Andujar";
  name5 = "Elena Alejo";
  name6 = "Frederico Arjona";
  name7 = "Alisa Marcos Rosario";
  name8 = "Kate Sisneros Sosa";
  job1 = "Cirujano Oral y Maxilofacial";
  job2 = "Odontólogo y Radiólogo Oral y Maxilofacial";
  job3 = "Odontólogo Ortodoncista";
  job4 = "Odontopediatra";
  job5 = "Patología Oral y Maxilofacial";
  job6 = "Odontólogo Endodoncista";
  job7 = "Odontóloga Periodoncista";
  job8 = "Odontóloga Ortodoncista";

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
        text: this.name1,        
      })
      .then(() => {
        console.log('Exito');
      })
      .catch((e: any) => {
        console.error('Ocurrio un error', e);
      });

      this.speech
      .speak({
        text: this.job1,        
      })

      this.speech
      .speak({
        text: this.name2,        
      })
      this.speech
      .speak({
        text: this.job2,        
      })
      this.speech
      .speak({
        text: this.name3,        
      })
      this.speech
      .speak({
        text: this.job3,        
      })
      this.speech
      .speak({
        text: this.name4,        
      })
      this.speech
      .speak({
        text: this.job4,        
      })
      this.speech
      .speak({
        text: this.name5,        
      })
      this.speech
      .speak({
        text: this.job5,        
      })
      this.speech
      .speak({
        text: this.name6,        
      })
      this.speech
      .speak({
        text: this.job6,        
      })
      this.speech
      .speak({
        text: this.name7,        
      })
      this.speech
      .speak({
        text: this.job7,        
      })
      this.speech
      .speak({
        text: this.name8,        
      })
      this.speech
      .speak({
        text: this.job8,        
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