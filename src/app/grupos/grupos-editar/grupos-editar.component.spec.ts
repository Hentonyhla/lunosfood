import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposEditarComponent } from './grupos-editar.component';

describe('GruposEditarComponent', () => {
  let component: GruposEditarComponent;
  let fixture: ComponentFixture<GruposEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GruposEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
