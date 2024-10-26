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
  ){}


  public email: string = ''
  public contrasenia: string = ''
  public contrasenia2: string = ''
  public isValid: boolean = true


  validPass(contrasenia: string, contrasenia2: string) {
    if (contrasenia != contrasenia2 || contrasenia.length < 6) {
      this.isValid = false
    } else {
      this.sessionService.register({ email: this.email, password: this.contrasenia }).
        then(() => {
          this.router.navigate(['/session/login'])
        }).
        catch(error => console.log(error))
    }
  }



  onSubmit() {
    this.validPass(this.contrasenia, this.contrasenia2)
  }

}
