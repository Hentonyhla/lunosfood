import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliqInterestaduaisEditarComponent } from './aliq-interestaduais-editar.component';

describe('AliqInterestaduaisEditarComponent', () => {
  let component: AliqInterestaduaisEditarComponent;
  let fixture: ComponentFixture<AliqInterestaduaisEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliqInterestaduaisEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliqInterestaduaisEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
