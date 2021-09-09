import { Component } from '@angular/core';

import { Book } from './models/book';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Initializing object of Book Interface
  books: Book[] = [];

  // Inject my SearchBookService
  constructor(private searchBookService: SearchService) {}

  // Function to iterate over books arrived from my service and push it to Book instance
  getBooks(keyword: string) {
    this.searchBookService.getSearchedBooks(keyword).subscribe((data: any) => {
      for (let i = 0; i < data?.items?.length; i++) {
        console.log(data?.items[i]?.volumeInfo);
        // console.log(i + '-' + data?.items[i]?.volumeInfo?.authors[i]);
        this.books[i] = data?.items[i]?.volumeInfo;
      }
    });
  }

  // Function to sort books by Title | Author
  sortBooks() {
    this.books.sort((a, b) => {
      if (a.authors && b.authors)
        return a?.authors[0]?.localeCompare(b?.authors[0]);

      return a.title.localeCompare(b.title);
    });

    // for (let i = 0; i < this.books.length; i++) {
    //   if (this.books[i].authors) console.log(this.books[i].authors);
    // }
  }
}
