import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entite-item',
  templateUrl: './entite-item.component.html',
  styleUrls: ['./entite-item.component.scss']
})
export class EntiteItemComponent implements OnInit {

  @Input() entiteId: number;
  @Input() entiteNom: string;
  @Input() entiteFormedIdentite: string;
  @Input() entiteAdresse: string;
  @Input() entiteDissolue: boolean;
  @Input() entiteDateDeCreation: Date;
  @Input() entiteDateDeFinDAnneeFiscale: Date;
  @Input() entiteNatureDesActivites: string;
  @Input() actionnaires: [];

  constructor() { }

  ngOnInit(): void {
  }

}
