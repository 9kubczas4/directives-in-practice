import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of } from 'rxjs';

export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  USER = 'user'
}

export interface User {
  fullName: string;
  roles: UserRole[];
}

const MOCKED_USERS: User[] = [
  { fullName: 'Leo Messi', roles: [UserRole.ADMIN, UserRole.USER] },
  { fullName: 'Cristiano Ronaldo', roles: [UserRole.ADMIN] },
  { fullName: 'Luis Suarez', roles: [UserRole.USER] },
  { fullName: 'Robert Lewandowski', roles: [UserRole.USER] },
  { fullName: 'Erling Haaland', roles: [UserRole.USER, UserRole.MANAGER] },
];

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers = () => of(MOCKED_USERS);

  // This subject shouldn't be public, but it's ok for demo purposes
  currentUser$ = new BehaviorSubject<User>(MOCKED_USERS[0])

  hasRole = (roles: UserRole[]) =>
    this.currentUser$.pipe(
      map((user) => {
        const userRoles: UserRole[] = Array.isArray(roles) ? roles : [roles];
        return userRoles.length === 0 || user?.roles.some((r) => userRoles.includes(r as UserRole));
      })
    );

  setCurrentUser = (user: User) => {
    this.currentUser$.next(user);
  }
}
