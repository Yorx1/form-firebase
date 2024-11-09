import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { isRequired, hasEmailError } from '../../utils/validators';
import { toast } from 'ngx-sonner';




interface formRegister {
  name: FormControl<string | null>
  lastName: FormControl<string | null>
  email: FormControl<string | null>,
  password: FormControl<string | null>
}


@Component({
  selector: 'session-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder:FormBuilder
  ) { }

  isRequired(field: 'name' | 'password' | 'email') {
    return isRequired(field, this.form)
  }

  isEmailRequired() {
    return hasEmailError(this.form)
  }
  form = this.formBuilder.group<formRegister>({
    name: this.formBuilder.control('', Validators.required),
    lastName: this.formBuilder.control(''),
    email: this.formBuilder.control('', [Validators.required, Validators.email]),
    password: this.formBuilder.control('', Validators.required)
  })


  async onSubmit() {
    if (this.form.invalid) return;
    try {

      const { name, lastName, email, password } = this.form.value

      if (!name || !email || !password) return

      await this.authService.addUser({ name, lastName, email })

      toast.message("Usuario creado correctamente")
      this.router.navigateByUrl("/auth/login")

      await this.authService.register({ email, password });

    } catch (error) {
      toast.error("Ha ocurrido un error");
    }

  }
  // public email: string = '';
  // public password: string = '';
  // public confirmPassword: string = '';
  // public isValid: boolean = false;
  // public regex:RegExp = /^[0-9A-Za-z]+$/;


  // validPass(password: string, confirmPassword: string) {
  //   if (password != confirmPassword || !this.regex) {
  //     this.isValid = true
  //   } else {
  //     this.sessionService.register({ email: this.email, password: this.password }).
  //       then(() => {
  //         this.router.navigate(['/session/login'])
  //       }).
  //       catch(error => console.log(error))
  //   }
  // }



  // onSubmit() {
  //   this.validPass(this.password, this.confirmPassword)
  // }

}
