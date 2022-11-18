import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosNovoComponent } from './funcionarios-novo.component';

describe('FuncionariosNovoComponent', () => {
  let component: FuncionariosNovoComponent;
  let fixture: ComponentFixture<FuncionariosNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariosNovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionariosNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
