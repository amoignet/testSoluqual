import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntiteItemComponent } from './components/entite-item/entite-item.component';
import { EntiteListComponent } from './pages/entite-list/entite-list.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    EntiteItemComponent,
    EntiteListComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
