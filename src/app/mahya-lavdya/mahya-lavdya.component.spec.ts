import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahyaLavdyaComponent } from './mahya-lavdya.component';

describe('MahyaLavdyaComponent', () => {
  let component: MahyaLavdyaComponent;
  let fixture: ComponentFixture<MahyaLavdyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahyaLavdyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MahyaLavdyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
