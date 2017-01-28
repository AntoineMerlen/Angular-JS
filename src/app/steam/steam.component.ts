import { Component, OnInit } from '@angular/core';

import { SteamService } from '../steam.service';

@Component({
  selector: 'app-steam',
  templateUrl: './steam.component.html',
  styleUrls: ['./steam.component.css']
})
export class STEAMComponent {
  

  constructor(public steamService: SteamService) {

  }


  jeux = this.steamService.jeux;


}
