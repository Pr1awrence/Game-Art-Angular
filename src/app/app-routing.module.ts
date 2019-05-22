import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { GamesComponent } from './components/games/games.component';
import { FaqComponent } from './components/faq/faq.component';
import { CardComponent } from './components/card/card.component';
import { ModalWindowEntryComponent } from './components/modal-window-entry/modal-window-entry.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: MainComponent,
    children: [
      {
        path: 'games/:id',
        component: ModalWindowEntryComponent
      }
    ]
  },
  { path: 'all-games', component: GamesComponent,
    children: [
      {
        path: 'games/:id',
        component: ModalWindowEntryComponent
      }
    ]},
  { path: 'faq', component: FaqComponent },
  { path: 'card', component: CardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
