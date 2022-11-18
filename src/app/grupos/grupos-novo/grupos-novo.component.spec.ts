import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposNovoComponent } from './grupos-novo.component';

describe('GruposNovoComponent', () => {
  let component: GruposNovoComponent;
  let fixture: ComponentFixture<GruposNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposNovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GruposNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
