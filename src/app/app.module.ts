import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './components/header/header.component';
import { GamesComponent } from './components/games/games.component';
import { SliderComponent } from './components/slider/slider.component';
import { FaqComponent } from './components/faq/faq.component';
import { CardComponent } from './components/card/card.component';
import { MainComponent } from './components/main/main.component';
import { BestGamesComponent } from './components/best-games/best-games.component';
import { FooterComponent } from './components/footer/footer.component';
import { GameBlockComponent } from './components/game-block/game-block.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { GameModalWindowComponent } from './components/game-modal-window/game-modal-window.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalWindowEntryComponent } from './components/modal-window-entry/modal-window-entry.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesComponent,
    SliderComponent,
    FaqComponent,
    CardComponent,
    MainComponent,
    BestGamesComponent,
    FooterComponent,
    GameBlockComponent,
    FeedbackFormComponent,
    GameModalWindowComponent,
    ModalWindowEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  entryComponents: [GameModalWindowComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
