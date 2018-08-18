import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoOpGameTableComponent } from './co-op-game-table.component';

describe('CoOpGameTableComponent', () => {
  let component: CoOpGameTableComponent;
  let fixture: ComponentFixture<CoOpGameTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoOpGameTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoOpGameTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
