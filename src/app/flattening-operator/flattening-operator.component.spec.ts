import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatteningOperatorComponent } from './flattening-operator.component';

describe('FlatteningOperatorComponent', () => {
  let component: FlatteningOperatorComponent;
  let fixture: ComponentFixture<FlatteningOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlatteningOperatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlatteningOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
