import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhereToLintComponent } from './adhere-to-lint.component';

describe('AdhereToLintComponent', () => {
  let component: AdhereToLintComponent;
  let fixture: ComponentFixture<AdhereToLintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdhereToLintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdhereToLintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
