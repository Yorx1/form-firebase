import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'session-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }


  public email: string = ''
  public password: string = ''
  public confirmPassword: string = ''
  public isValid: boolean = false


  validPass(password: string, confirmPassword: string) {
    if (password != confirmPassword || password.length < 6) {
      this.isValid = true
    } else {
      this.sessionService.register({ email: this.email, password: this.password }).
        then(() => {
          this.router.navigate(['/session/login'])
        }).
        catch(error => console.log(error))
    }
  }



  onSubmit() {
    this.validPass(this.password, this.confirmPassword)
  }

}
