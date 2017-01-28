import { Component, OnInit } from '@angular/core';

import { SteamService } from '../steam.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {

  constructor(public steamService: SteamService) {

  }

jeux = this.steamService.jeux;

}
