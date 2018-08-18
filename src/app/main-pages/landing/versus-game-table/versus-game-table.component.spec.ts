import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersusGameTableComponent } from './versus-game-table.component';

describe('VersusGameTableComponent', () => {
  let component: VersusGameTableComponent;
  let fixture: ComponentFixture<VersusGameTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersusGameTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersusGameTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
