import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecktComponent } from './seleckt.component';

describe('SelecktComponent', () => {
  let component: SelecktComponent;
  let fixture: ComponentFixture<SelecktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecktComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
