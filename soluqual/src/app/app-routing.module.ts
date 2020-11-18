import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntiteListComponent } from './pages/entite-list/entite-list.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: EntiteListComponent },
  { path: 'form/:id', component: FormulaireComponent },
  { path: 'form', component: FormulaireComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
