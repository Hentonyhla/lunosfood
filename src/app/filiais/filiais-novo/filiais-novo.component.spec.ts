import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiliaisNovoComponent } from './filiais-novo.component';

describe('FiliaisNovoComponent', () => {
  let component: FiliaisNovoComponent;
  let fixture: ComponentFixture<FiliaisNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiliaisNovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiliaisNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
