import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as AuthActions from './store/auth.action'
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer'


@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenExpirationTimer: any;
  constructor(private http: HttpClient, private router: Router , private store: Store<fromApp.AppState>) {}
  setLogoutTimer(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(new AuthActions.Logout())
    }, expirationDuration);
  }
  clearLogoutTimer()
  {
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer= null
    }
  }

}
