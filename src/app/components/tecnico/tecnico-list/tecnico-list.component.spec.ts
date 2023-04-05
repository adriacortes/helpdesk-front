import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoListComponent } from './tecnico-list.component';

describe('TecnicoListComponent', () => {
  let component: TecnicoListComponent;
  let fixture: ComponentFixture<TecnicoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
