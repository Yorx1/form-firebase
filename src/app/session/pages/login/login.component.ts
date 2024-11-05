import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'session-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {


  constructor(
    private sessionService: SessionService,
    private router:Router
) {

  }


  public email: string = ''
  public password: string = ''


  onSubmit() {
    this.sessionService.login({ email: this.email, password: this.password })
      .then(() => {
        this.router.navigate(['/form'])
      })
      .catch(error => {
        console.log(error);
      })
  }


}
