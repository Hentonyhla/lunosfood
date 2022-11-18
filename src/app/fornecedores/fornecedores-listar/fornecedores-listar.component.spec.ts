import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresListarComponent } from './fornecedores-listar.component';

describe('FornecedoresListarComponent', () => {
  let component: FornecedoresListarComponent;
  let fixture: ComponentFixture<FornecedoresListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedoresListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FornecedoresListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
