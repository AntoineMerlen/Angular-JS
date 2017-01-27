import { Component } from '@angular/core';

import { Eleve } from './eleve.model';

@Component({
  selector: 'web-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css'],
})


export class TableauComponent {
  listeEleves : Array<Eleve>;

  get matieres(){
    return Eleve.matieres;
  }

  constructor(){
    this.listeEleves = new Array();
    let notesVictor ={};
    notesVictor[Eleve.matieres[0]] = 12;
    notesVictor[Eleve.matieres[1]] = 5;
    notesVictor[Eleve.matieres[2]] = 20;

    let Victor = new Eleve('Victor', notesVictor);

    let notesHugo ={};
    notesHugo[Eleve.matieres[0]] = 2;
    notesHugo[Eleve.matieres[1]] = 8;
    notesHugo[Eleve.matieres[2]] = 0;

    let Hugo = new Eleve('Hugo', notesHugo);

    this.listeEleves.push(Victor);
    this.listeEleves.push(Hugo);
  }

  
/*
  ngOnInit(){

  }
*/
}
