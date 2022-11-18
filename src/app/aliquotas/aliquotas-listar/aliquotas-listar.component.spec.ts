import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliquotasListarComponent } from './aliquotas-listar.component';

describe('AliquotasListarComponent', () => {
  let component: AliquotasListarComponent;
  let fixture: ComponentFixture<AliquotasListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliquotasListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliquotasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
