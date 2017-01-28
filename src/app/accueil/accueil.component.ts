import { Component, OnInit } from '@angular/core';

import { SteamService } from '../steam.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  constructor(public steamService: SteamService) {
    
  }

  jeux = this.steamService.jeux.slice(0,3);


}
