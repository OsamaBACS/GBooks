import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // specify my Api Key of my project on developers.google and enable books api for it
  myApiKey = 'AIzaSyAMwifdOFSfRBVfa_BJ1sEqQI5Fxzd6pVw';

  // Inject HttpClient to getting data from URL
  constructor(private http: HttpClient) {}

  // Function to return Array of books object
  getSearchedBooks(keyword: string) {
    return this.http.get(
      'https://www.googleapis.com/books/v1/volumes?q=' +
        keyword +
        '&key=' +
        this.myApiKey +
        '&maxResults=40'
    );
  }
}
