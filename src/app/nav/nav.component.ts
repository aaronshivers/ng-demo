import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AuthState } from '../auth/auth.reducer';
import { logout } from '../auth/auth.actions';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: [ './nav.component.scss' ],
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay(),
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<AuthState>,
  ) {}

  onLogout() {
    this.store.dispatch(logout());
  }
}
