import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrisurListComponent } from './frisur-list.component';

describe('FrisurListComponent', () => {
  let component: FrisurListComponent;
  let fixture: ComponentFixture<FrisurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrisurListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrisurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
