import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntiteItemComponent } from './entite-item.component';

describe('EntiteItemComponent', () => {
  let component: EntiteItemComponent;
  let fixture: ComponentFixture<EntiteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntiteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntiteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
