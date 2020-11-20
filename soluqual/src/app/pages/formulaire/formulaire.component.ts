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
  currentId: string;
  actionnaires: FormArray;
  isAddMode: boolean;


  constructor(private formBuilder: FormBuilder,
              private entitiesService: EntitiesService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.currentId = params.get('id');
      console.log('ID:', this.currentId);
      this.isAddMode = !this.currentId;
      console.log('état:', this.isAddMode);

    });

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

    if (!this.isAddMode) {
      this.entite = this.entitiesService.getById(parseInt(this.currentId, 10));
      console.log('Ici je veux mon entité:', this.entite);
      this.entitiesForm.patchValue(this.entite);
    }
  }



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
      if (this.isAddMode) {
        this.entitiesService.addNewEntite(this.entitiesForm.value);
      } else {
        this.entitiesService.modifEntite(this.entitiesForm.value, parseInt(this.currentId, 10))
      }
      this.router.navigate(['/list']);
    // }
  }

}
