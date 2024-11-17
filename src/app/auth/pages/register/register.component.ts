import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { isRequired, hasEmailError } from '../../utils/validators';
import { toast } from 'ngx-sonner';

interface formRegister {
  name: FormControl<string | null>
  lastName: FormControl<string | null>
  birthDate: FormControl<string | null>
  email: FormControl<string | null>,
  password: FormControl<string | null>
  description: FormControl<string | null>
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
    private formBuilder: FormBuilder,
  ) { }

  isRequired(field: 'name' | 'password' | 'email' | 'birthDate') {
    return isRequired(field, this.form)
  }

  isEmailRequired() {
    return hasEmailError(this.form)
  }
  form = this.formBuilder.group<formRegister>({
    name: this.formBuilder.control('', Validators.required),
    lastName: this.formBuilder.control(''),
    birthDate: this.formBuilder.control('', Validators.required),
    email: this.formBuilder.control('', [Validators.required, Validators.email]),
    password: this.formBuilder.control('', Validators.required),
    description: this.formBuilder.control('', Validators.required)
  })

  calculateAge(): string | null {
    const birthDate = this.form.get('birthDate')?.value;
    if (!birthDate) return null;

    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age.toString();
  }


  async onSubmit() {
    if (this.form.invalid) return;
    try {

      let { name, lastName, email, password, birthDate , description } = this.form.value

      birthDate = this.calculateAge()

      if (!name || !email || !password || !birthDate) return

     
      await this.authService.register({ email, password });
      await this.authService.addUser({ name, lastName, email, birthDate , description})

      toast.message("Usuario creado correctamente")
      this.router.navigateByUrl("/auth/login")

    } catch (error) {
      console.log(error);
      toast.error("Ha ocurrido un error");
    }

  }

}
