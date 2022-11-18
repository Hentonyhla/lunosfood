import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresEditarComponent } from './fornecedores-editar.component';

describe('FornecedoresEditarComponent', () => {
  let component: FornecedoresEditarComponent;
  let fixture: ComponentFixture<FornecedoresEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedoresEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FornecedoresEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
