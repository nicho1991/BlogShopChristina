import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadRichComponent } from './read-rich.component';

describe('ReadRichComponent', () => {
  let component: ReadRichComponent;
  let fixture: ComponentFixture<ReadRichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadRichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadRichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
