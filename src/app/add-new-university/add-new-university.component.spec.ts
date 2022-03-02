import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewUniversityComponent } from './add-new-university.component';

describe('AddNewUniversityComponent', () => {
  let component: AddNewUniversityComponent;
  let fixture: ComponentFixture<AddNewUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
