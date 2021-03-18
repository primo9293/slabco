import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRecordaComponent } from './dialog-recorda.component';

describe('DialogRecordaComponent', () => {
  let component: DialogRecordaComponent;
  let fixture: ComponentFixture<DialogRecordaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRecordaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRecordaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
