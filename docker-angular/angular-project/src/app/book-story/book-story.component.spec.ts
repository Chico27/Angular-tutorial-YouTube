import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookStoryComponent } from './book-story.component';

describe('BookStoryComponent', () => {
  let component: BookStoryComponent;
  let fixture: ComponentFixture<BookStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookStoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
