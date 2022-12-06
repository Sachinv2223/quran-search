import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SearchResult } from '../interfaces/SearchResult.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(keyword: string) {
    const URL = `http://api.alquran.cloud/v1/search/${keyword}/all/en`;
    return this.http.get<any>(URL).pipe(
      map(res => {
        if (res) {
          return res.data;
        } else {
          return { count: 0, matches: [] }
        }
      })
    )
  }
}
