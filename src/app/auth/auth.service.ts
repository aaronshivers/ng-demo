import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

interface Login {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  login(login: Login): Observable<User> {
    return this.httpClient.post<User>(this.url, login);
  }
}
