import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent implements OnInit {

  public bookId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.bookId = parseInt(idParam, 10); 
    } else {
      console.error('ID parameter is null or undefined');
    }
  }

  goBack(): void {
    // this.router.navigate(['/books']);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  showStory(): void {
    this.router.navigate(['story'], { relativeTo: this.route });
  }

  showCharacter(): void {
    this.router.navigate(['character'], { relativeTo: this.route });
  }

}
