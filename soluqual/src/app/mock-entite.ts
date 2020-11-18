import { Entite } from './models/entite';

export const ENTITIES: Entite[] = [
{
  id : 0,
  nom : ' Entité légale 1',
  formedIdentite : 'Service',
  adresse : '123 rue Dorchester Montréal QC  H7P 1A4',
  dissolue : false,
  dateDeCreation : new Date(),
  dateDeFinDAnneeFiscale : new Date(),
  natureDesActivites : 'Un paragraphe décrivant la nature des activités de l\'entreprise'
},
{
  id : 1,
  nom : ' Entité légale 2',
  formedIdentite : 'Commerce',
  adresse : '1090 rue De Bleury Montréal QC H2Z OB7',
  dissolue : false,
  dateDeCreation : new Date(),
  dateDeFinDAnneeFiscale :  new Date(),
  natureDesActivites : 'Un paragraphe décrivant la nature des activités de l\'entreprise'

}
];
