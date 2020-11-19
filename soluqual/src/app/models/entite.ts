interface Actionnaire {
  actionnaireNom: string;
  pourcentage: number;
}

export class Entite {

  id: number;
  nom: string;
  formedIdentite: string;
  adresse: string;
  dissolue: boolean;
  dateDeCreation: Date;
  dateDeFinDAnneeFiscale: Date;
  natureDesActivites: string;
  actionnaires?: Actionnaire[];

  constructor(input?: Entite) {
    if (input != null) {
      Object.assign(this, input);
    }
  }
}
