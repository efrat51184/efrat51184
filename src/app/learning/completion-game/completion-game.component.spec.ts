import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionGameComponent } from './completion-game.component';

describe('CompletionGameComponent', () => {
  let component: CompletionGameComponent;
  let fixture: ComponentFixture<CompletionGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletionGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
