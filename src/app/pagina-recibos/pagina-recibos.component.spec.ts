import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRecibosComponent } from './pagina-recibos.component';

describe('PaginaRecibosComponent', () => {
  let component: PaginaRecibosComponent;
  let fixture: ComponentFixture<PaginaRecibosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaRecibosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaRecibosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
