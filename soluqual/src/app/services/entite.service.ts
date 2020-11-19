import { Injectable } from '@angular/core';
import { Entite } from '../models/entite';
import { ENTITIES } from '../mock-entite';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  EntiteSubject =  new Subject<Entite[]>();
  ENTITIES: Entite[];

  constructor() { }



  emitEntitiesSubject(): void {
    this.EntiteSubject.next(ENTITIES.slice());
  }

  getAll(): Entite[] {
    return ENTITIES;
  }

  getById(id): Entite {
    const entreprise = ENTITIES.filter((company) => company.id === id);
    return entreprise[0];
  }
  addNewEntite(entite: Entite): void {
    console.log('entite:', entite);
    const entiteObject = {
      id: 0,
      nom: '',
      formedIdentite: '',
      adresse: '',
      dissolue: false,
      dateDeCreation: new Date(),
      dateDeFinDAnneeFiscale: new Date(),
      natureDesActivites: '',
      actionnaires: []
    };
    entiteObject.id = ENTITIES[(ENTITIES.length - 1)].id + 1;
    entiteObject.nom = entite.nom;
    entiteObject.formedIdentite = entite.formedIdentite;
    entiteObject.adresse = entite.adresse;
    entiteObject.dissolue = entite.dissolue || false;
    entiteObject.dateDeCreation = entite.dateDeCreation;
    entiteObject.dateDeFinDAnneeFiscale = entite.dateDeFinDAnneeFiscale;
    entiteObject.natureDesActivites = entite.natureDesActivites;
    entiteObject.actionnaires = entite.actionnaires;
    console.log('entiteObject', entiteObject);
    ENTITIES.push(entiteObject);
    this.emitEntitiesSubject();
  }

}
