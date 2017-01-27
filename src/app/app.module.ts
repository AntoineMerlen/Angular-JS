import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TableauComponent } from '../eleves/tableau.component';
import { STEAMComponent } from './steam/steam.component';
import { SteamService } from './steam.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauComponent,
    STEAMComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AccueilComponent
      },
      {
        path: 'bibliotheque',
        component: STEAMComponent
      }
    ])
  ],
  providers: [SteamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
