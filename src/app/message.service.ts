import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  private logged = new BehaviorSubject<string | null>(localStorage.getItem('authParams'))

  isLoggedIn(): Observable<string | null> {
    return this.logged.asObservable();
  }

  logIn(providerResponse: string) {
    localStorage.setItem('authParams', providerResponse);
    this.logged.next(localStorage.getItem('authParams'));
  }

  logOut() {
    localStorage.removeItem('authParams');
    this.logged.next(localStorage.getItem('authParams'));
  }

}
