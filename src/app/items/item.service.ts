import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private url = 'http://localhost:3000/items';

  constructor(private httpClient: HttpClient) { }

  postItem(item: Item): Observable<{}> {
    return this.httpClient.post(this.url, item);
  }

  getItems(): Observable<{}> {
    return this.httpClient.get(this.url);
  }
}
