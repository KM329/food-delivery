import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {

  constructor(private authService: AuthService,
    private router: Router
  ) {}

  public logout(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

}
