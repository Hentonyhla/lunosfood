import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposListarComponent } from './grupos-listar.component';

describe('GruposListarComponent', () => {
  let component: GruposListarComponent;
  let fixture: ComponentFixture<GruposListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GruposListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
