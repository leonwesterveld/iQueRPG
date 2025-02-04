import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectDetailsComponent } from './object-details.component';

describe('ObjectDetailsComponent', () => {
  let component: ObjectDetailsComponent;
  let fixture: ComponentFixture<ObjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
