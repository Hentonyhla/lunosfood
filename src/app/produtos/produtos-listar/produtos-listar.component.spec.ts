import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosListarComponent } from './produtos-listar.component';

describe('ProdutosListarComponent', () => {
  let component: ProdutosListarComponent;
  let fixture: ComponentFixture<ProdutosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
