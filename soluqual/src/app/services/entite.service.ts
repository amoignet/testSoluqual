import { Injectable } from '@angular/core';
import { Entite } from '../models/entite';
import { ENTITIES } from '../mock-entite';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  ENTITIES: Entite[];

  constructor() { }

  getAll(): Entite[] {
    return ENTITIES;
  }
}
