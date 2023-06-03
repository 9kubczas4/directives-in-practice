import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  fullName: string;
  role: 'admin' | 'user' | 'goat';
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of([
      { fullName: 'Leo Messi', role: 'goat' },
      { fullName: 'Cristiano Ronaldo', role: 'admin' },
      { fullName: 'Luis Suarez', role: 'user' },
      { fullName: 'Robert Lewandowski', role: 'user' },
      { fullName: 'Erling Haaland', role: 'user' }
    ])
  }
}
