import { Component, OnInit } from '@angular/core';

import { SteamService } from '../steam.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  constructor(public steamService: SteamService) {
    //this.listesJeux = new Array();
  }
/*  get jeux(){
    return this.steamService.jeux;
  }
*/
  jeux = this.steamService.jeux.slice(0,3);


}
