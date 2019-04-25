import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModalWindowComponent } from './game-modal-window.component';

describe('GameModalWindowComponent', () => {
  let component: GameModalWindowComponent;
  let fixture: ComponentFixture<GameModalWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameModalWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
