import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOffersComponent } from './liste-offers.component';

describe('ListeOffersComponent', () => {
  let component: ListeOffersComponent;
  let fixture: ComponentFixture<ListeOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
