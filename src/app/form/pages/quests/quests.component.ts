import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';
import { Router } from '@angular/router';


@Component({
  selector: 'form-quests',
  templateUrl: './quests.component.html',
  styleUrl: './quests.component.css'
})
export class QuestsComponent {


  constructor(
    private formService: FormService,
    private router: Router
  ) { }

  onCLickOut() {
    this.formService.logOut()
      .then(() => {
        this.router.navigate(['/session/register'])
      })
      .catch(error => {
        console.log(error);

      })
  }




}
