import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliqInterestaduaisListComponent } from './aliq-interestaduais-list.component';

describe('AliqInterestaduaisListComponent', () => {
  let component: AliqInterestaduaisListComponent;
  let fixture: ComponentFixture<AliqInterestaduaisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliqInterestaduaisListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliqInterestaduaisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
