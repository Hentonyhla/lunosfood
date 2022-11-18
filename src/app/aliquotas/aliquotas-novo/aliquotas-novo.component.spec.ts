import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliquotasNovoComponent } from './aliquotas-novo.component';

describe('AliquotasNovoComponent', () => {
  let component: AliquotasNovoComponent;
  let fixture: ComponentFixture<AliquotasNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliquotasNovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliquotasNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
