import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosListarComponent } from './funcionarios-listar.component';

describe('FuncionariosListarComponent', () => {
  let component: FuncionariosListarComponent;
  let fixture: ComponentFixture<FuncionariosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariosListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionariosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
