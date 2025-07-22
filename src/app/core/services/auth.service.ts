import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Auth } from 'src/app/model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = 'http://localhost:3000';
  private token: string = 'token';
  private tokenExpiration = new BehaviorSubject<number | null> (null);

  public login(username: string, password: string): Observable<Auth> {
    return this.httpClient.post<Auth>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap((response)=> {
        localStorage.setItem(this.token, response.token)
      })
    );
  }

  public logOut(): void {
    localStorage.removeItem(this.token);
  }

  private getToken(): string | null {
    return localStorage.getItem(this.token);
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    if(!token) {
      return false;
    }
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  setTokenExpiration(expiration: number) {
    this.tokenExpiration.next(expiration);
  }

  getTokenExpiration() {
    return this.tokenExpiration.asObservable();
  }
}
