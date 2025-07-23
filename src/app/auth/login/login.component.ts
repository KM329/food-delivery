import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  expiration: number | null = null;

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  public onLogin(): void {
    this.loginForm.markAllAsTouched();
    let userName = this.loginForm.get('userName')?.value;
    let password = this.loginForm.get('password')?.value;
    if (userName && password) {
      this.authService.login(userName, password).subscribe((response) => {
        this.router.navigate(['/dashboard']);
      })
    }
  }

}
