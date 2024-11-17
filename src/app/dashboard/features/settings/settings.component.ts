import { Component } from '@angular/core';
import { DashboardService, UserModified } from '../../services/dashboard.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  public EditUser: UserModified = {
    name: '',
    lastName: '',
    birthDate: '',
    description: ''
  }

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) { }



  onSubmitEdit() {
    Swal.fire({
      title: "Ingresa los nuevos datos",
      html: `
      <form>
        <input id="input1" class="swal2-input" placeholder="Nombre">
        <input id="input2" class="swal2-input" placeholder="Apellido">
        <input name="birthDate" type="date" class="form-control mt-3" formControlName="birthDate"/>
        <textarea class="form-control mt-2 h-25" placeholder="Descripción" id="floatingTextarea"></textarea>
        </form>
      `,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {




        return {
          input1: (document.getElementById("input1") as HTMLInputElement).value,
          input2: (document.getElementById("input2") as HTMLInputElement).value,
          input3: (document.getElementById("input3") as HTMLInputElement).value,
          input4: (document.getElementById("input4") as HTMLInputElement).value
        };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const today = new Date();
        const birthDateObj = new Date(result.value?.input4 as Date);
        let age = today.getFullYear() - birthDateObj.getFullYear();

        this.EditUser = {
          name: result.value?.input1 as string,
          lastName: result.value?.input2 as string,
          birthDate: age.toString(),
          description: result.value?.input4 as string,
        }
        this.dashboardService.updateUser(this.EditUser)
        Swal.fire("Submitted!", "Los datos se han guardado", "success");
        this.router.navigateByUrl('/home-page')
      }
    }).catch((err) => {
      Swal.showValidationMessage(`
        Request failed: ${err}
      `);
    })
  }


  onSubmitDelete() {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.dashboardService.deleteUser()
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

      }
    }).catch((err) => {
      Swal.showValidationMessage(`
        Request failed: ${err}
      `);
    })
  }
}
