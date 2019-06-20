import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveTodoComponent } from './receive-todo.component';

describe('ReceiveTodoComponent', () => {
  let component: ReceiveTodoComponent;
  let fixture: ComponentFixture<ReceiveTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
