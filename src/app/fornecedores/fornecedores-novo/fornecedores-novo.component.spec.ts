import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresNovoComponent } from './fornecedores-novo.component';

describe('FornecedoresNovoComponent', () => {
  let component: FornecedoresNovoComponent;
  let fixture: ComponentFixture<FornecedoresNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedoresNovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FornecedoresNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
