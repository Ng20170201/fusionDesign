import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosePopComponent } from './close-pop.component';

describe('ClosePopComponent', () => {
  let component: ClosePopComponent;
  let fixture: ComponentFixture<ClosePopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosePopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosePopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
