import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteRichComponent } from './write-rich.component';

describe('WriteRichComponent', () => {
  let component: WriteRichComponent;
  let fixture: ComponentFixture<WriteRichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteRichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteRichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
