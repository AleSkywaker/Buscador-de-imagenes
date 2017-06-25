import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaImagenComponent } from './lista-imagen.component';

describe('ListaImagenComponent', () => {
  let component: ListaImagenComponent;
  let fixture: ComponentFixture<ListaImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
