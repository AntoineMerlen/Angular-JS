import { Component, OnInit } from '@angular/core';

import { SteamService } from '../steam.service';

@Component({
  selector: 'app-steam',
  templateUrl: './steam.component.html',
  styleUrls: ['./steam.component.css']
})
export class STEAMComponent {
  //listesJeux : Array <any>;

  constructor(public steamService: SteamService) {
    //this.listesJeux = new Array();
  }
/*  get jeux(){
    return this.steamService.jeux;
  }
*/
  jeux = this.steamService.jeux;


}
