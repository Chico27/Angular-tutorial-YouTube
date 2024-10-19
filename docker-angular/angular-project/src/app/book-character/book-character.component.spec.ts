import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCharacterComponent } from './book-character.component';

describe('BookCharacterComponent', () => {
  let component: BookCharacterComponent;
  let fixture: ComponentFixture<BookCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
