import { Component } from '@angular/core';
import { Book } from './models/book';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  books: Book[] = [];

  constructor(private searchBookService: SearchService) {
    searchBookService.getSearchedBooks('Angular').subscribe((data: any) => {
      for (let i = 0; i < data.items.length; i++) {
        console.log(data?.items[i]?.volumeInfo);
        this.books[i] = data?.items[i]?.volumeInfo;
      }
    });
  }
}
