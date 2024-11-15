import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { toast } from 'ngx-sonner';
import { isRequired, hasEmailError } from '../../utils/validators';

interface formSignIn {
  email: FormControl<string | null>,
  password: FormControl<string | null>
}


@Component({
  selector: 'session-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  isRequired(field: 'password' | 'email') {
    return isRequired(field, this.form)
  }

  isEmailRequired() {
    return hasEmailError(this.form)
  }

  form = this.formBuilder.group<formSignIn>({
    email: this.formBuilder.control('', [Validators.required, Validators.email]),
    password: this.formBuilder.control('', Validators.required)
  })


  async onSubmit() {
    
    try {

      const { email, password } = this.form.value

      if (!email || !password) return

      await this.authService.signIn({ email, password });

      this.router.navigateByUrl("/dashboard/home")
    } catch (error) {
      toast.error("Parece que la cuenta no existe");
    }
  }
}
