import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { EntitiesService } from '../../services/entite.service';
import { Entite } from '../../models/entite';

@Component({
  selector: 'app-entite-list',
  templateUrl: './entite-list.component.html',
  styleUrls: ['./entite-list.component.scss']
})
export class EntiteListComponent implements OnInit {

  entities: Entite[];
  EntiteSubscription: Subscription;

  constructor(private entitiesService: EntitiesService, ) { }

  ngOnInit(): void {
    // this.entities = this.entitiesService.getAll();

    // console.log('Résultat du getAll', this.entities);

    this.EntiteSubscription = this.entitiesService.EntiteSubject.subscribe((entities: Entite[]) => {
      this.entities = entities;
      // console.log(this.entities);
    });
    this.entitiesService.emitEntitiesSubject();
  }

}
