import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EntitiesService } from '../../services/entite.service';
import { Entite } from '../../models/entite';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  entitiesForm: FormGroup;

  entite: Entite;
  currentId: number;
  actionnaires: FormArray;

  constructor(private formBuilder: FormBuilder,
              private entitiesService: EntitiesService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.entitiesForm = this.formBuilder.group({
      id: [],
      nom: ['', Validators.required],
      dissolue: [''],
      formedIdentite: ['', Validators.required],
      dateDeCreation: ['', Validators.required],
      adresse: ['', Validators.required],
      dateDeFinDAnneeFiscale: ['', Validators.required],
      natureDesActivites: ['', Validators.required],
      actionnaires: this.formBuilder.array([ this.createActionnaire() ])
    });



    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.currentId = parseInt(params.get('id'), 10);
    //   console.log('ID:', this.currentId);
      // if (this.currentId) {
      // this.entite = this.entitiesService.getById(this.currentId);
      // console.log('Ici je veux mon entité:', this.entite);
     // this.entitiesForm.patchValue(this.entite);
      // }

      // if (!id) {
      //   this.entite = new Entite();
      // } else {
        // this.getEntiteInformation(id);
      // }
    // });
  }

  // getEntiteInformation(id: number): void {
  //    this.entite = this.entitiesService.getById(id);
  // }

  createActionnaire(): FormGroup {
    return this.formBuilder.group({
      actionnaireNom: '',
      pourcentage: ''
    });
  }

  addActionnaire(): void {
    this.actionnaires = this.entitiesForm.get('actionnaires') as FormArray;
    this.actionnaires.push(this.createActionnaire());
  }

  get actionnairesControls(): void {
    return this.entitiesForm.get('actionnaires')['controls'];
  }

  removeActionnaires(i: number): void {
    this.actionnaires.removeAt(i);
  }

  onSubmit(): void {
    // if (this.currentId) {
      //   this.entitiesForm.value['id'] = this.currentId;
      // console.warn(this.infoGeneral.value);
      this.entitiesService.addNewEntite(this.entitiesForm.value);
      this.router.navigate(['/list']);
    // }
  }

}
