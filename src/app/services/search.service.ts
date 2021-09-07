import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchedBooks = {};

  constructor(private http: HttpClient) {}

  getSearchedBooks(keyword: string) {
    return this.http.get(
      'https://www.googleapis.com/books/v1/volumes?q=' + keyword
    );
  }
}
