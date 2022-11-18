import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliqInterestaduaisNovoComponent } from './aliq-interestaduais-novo.component';

describe('AliqInterestaduaisNovoComponent', () => {
  let component: AliqInterestaduaisNovoComponent;
  let fixture: ComponentFixture<AliqInterestaduaisNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliqInterestaduaisNovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliqInterestaduaisNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
