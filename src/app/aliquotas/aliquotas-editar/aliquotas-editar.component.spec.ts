import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliquotasEditarComponent } from './aliquotas-editar.component';

describe('AliquotasEditarComponent', () => {
  let component: AliquotasEditarComponent;
  let fixture: ComponentFixture<AliquotasEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliquotasEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliquotasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
