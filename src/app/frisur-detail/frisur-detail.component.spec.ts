import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrisurDetailComponent } from './frisur-detail.component';

describe('FrisurDetailComponent', () => {
  let component: FrisurDetailComponent;
  let fixture: ComponentFixture<FrisurDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrisurDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrisurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
