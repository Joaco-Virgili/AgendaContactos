import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconoContactoComponent } from './icono-contacto.component';

describe('IconoContactoComponent', () => {
  let component: IconoContactoComponent;
  let fixture: ComponentFixture<IconoContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconoContactoComponent]
    });
    fixture = TestBed.createComponent(IconoContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
