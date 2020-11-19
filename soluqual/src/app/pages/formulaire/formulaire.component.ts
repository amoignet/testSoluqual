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
      actionnaires: this.formBuilder.array([])
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

  onSubmit(): void {
    // if (this.currentId) {
      //   this.entitiesForm.value['id'] = this.currentId;
      // console.warn(this.infoGeneral.value);
      this.entitiesService.addNewEntite(this.entitiesForm.value);
      this.router.navigate(['/list']);
    // }
  }

  getActionnaires(): any {
    return this.entitiesForm.get('actionnaires') as FormArray;
  }

  addActionnaire(): void {
    const newActionnaireControl = this.formBuilder.control('', Validators.required);
    this.getActionnaires().push(newActionnaireControl);
  }

}
