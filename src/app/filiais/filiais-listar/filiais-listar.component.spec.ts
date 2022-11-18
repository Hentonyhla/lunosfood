import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiliaisListarComponent } from './filiais-listar.component';

describe('FiliaisListarComponent', () => {
  let component: FiliaisListarComponent;
  let fixture: ComponentFixture<FiliaisListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiliaisListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiliaisListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
