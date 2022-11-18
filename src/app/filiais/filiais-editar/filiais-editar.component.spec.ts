import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiliaisEditarComponent } from './filiais-editar.component';

describe('FiliaisEditarComponent', () => {
  let component: FiliaisEditarComponent;
  let fixture: ComponentFixture<FiliaisEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiliaisEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiliaisEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
