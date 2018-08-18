import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './main-pages/profile/profile.component';
import { LandingComponent } from './main-pages/landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoOpGameTableComponent } from './main-pages/landing/co-op-game-table/co-op-game-table.component';
import { VersusGameTableComponent } from './main-pages/landing/versus-game-table/versus-game-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingComponent,
    NavbarComponent,
    CoOpGameTableComponent,
    VersusGameTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
