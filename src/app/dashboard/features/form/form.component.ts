import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { toast } from 'ngx-sonner';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


type Data = {
  prediction: number[]
  probabilities: number[]
}

@Component({
  selector: 'dashboard-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  public messages: string[] = []

  public questions = [
    { id: 'feeling_nervous', label: '¿Se ha sentido por momentos nervioso o inquieto en los últimos días?' },
    { id: 'panic', label: '¿Usted ha tenido episodios de pánico en algún momento reciente?' },
    { id: 'breathing_rapidly', label: '¿Ha notado alguna dificultad con su respiración en situaciones cotidianas?' },
    { id: 'sweating', label: '¿Ha experimentado sudoración excesiva en momentos de tensión?' },
    { id: 'trouble_concentration', label: '¿Ha tenido problemas para concentrarse recientemente?' },
    { id: 'having_trouble_sleeping', label: '¿Le ha costado dormir bien últimamente?' },
    { id: 'having_trouble_work', label: '¿Ha experimentado dificultades para realizar sus tareas laborales o académicas?' },
    { id: 'hopelessness', label: '¿Se ha sentido con poca esperanza sobre el futuro últimamente?' },
    { id: 'anger', label: '¿Ha experimentado momentos de ira o enojo intenso recientemente?' },
    { id: 'over_react', label: '¿Siente que a veces reacciona de manera exagerada ante ciertas situaciones?' },
    { id: 'change_eating', label: '¿Ha notado cambios en sus hábitos de alimentación recientemente?' },
    { id: 'suicidal_thought', label: '¿Ha tenido pensamientos suicidas en algún momento?' },
    { id: 'feeling_tired', label: '¿Se ha sentido cansado o con poca energía últimamente?' },
    { id: 'close_friend', label: '¿Siente que cuenta con un amigo cercano en quien confiar?' },
    { id: 'social_media_addiction', label: '¿Considera que pasa demasiado tiempo en redes sociales?' },
    { id: 'weight_gain', label: '¿Ha notado un aumento en su peso en los últimos meses?' },
    { id: 'introvert', label: '¿Se considera una persona introvertida?' },
    { id: 'popping_up_stressful_memory', label: '¿Han aparecido recuerdos estresantes de eventos pasados recientemente?' },
    { id: 'having_nightmares', label: '¿Ha tenido pesadillas o sueños perturbadores últimamente?' },
    { id: 'avoids_people_activities', label: '¿Ha evitado actividades que impliquen estar con otras personas?' },
    { id: 'feeling_negative', label: '¿Ha experimentado sensaciones negativas con frecuencia recientemente?' },
    { id: 'trouble_concentrating', label: '¿Ha tenido dificultades para concentrarse en sus actividades?' },
    { id: 'blamming_yourself', label: '¿Suele culparse a sí mismo en exceso por las cosas que suceden?' },
    { id: 'hallucinations', label: '¿Ha tenido alucinaciones o ha visto cosas que otros no ven?' },
    { id: 'repetitive_behaviour', label: '¿Tiende a realizar ciertos comportamientos de forma repetitiva sin poder evitarlos?' },
    { id: 'seasonally', label: '¿Ha notado que sus síntomas empeoran en ciertas épocas del año?' },
    { id: 'increased_energy', label: '¿Ha sentido un aumento de energía inusual en los últimos días?' }
  ];


  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {

  }
  ngOnInit(): void {

  }

  onSubmit() {
    const form = document.getElementById('evaluationForm') as HTMLFormElement
    const formData = new FormData(form);
    let data: { [key: string]: number } = {}
    const validArray: string[] = []
    formData.forEach((value, key) => {
      data[key] = parseInt(value.toString())
      validArray.push(value.toString())
    });

    console.log(data);
    console.log(validArray);


    if (validArray.every(value => value === "0")) {
      Swal.fire({
        text: "Usted no tiene ninguna condición relevante",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#09f",
        cancelButtonColor: "#FF5555",
        confirmButtonText: "Intentar otra vez",
        cancelButtonText: "Volver al inicio"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload()
        } else {
          this.router.navigateByUrl('/dashboard/home')
        }
      });
    } else if (validArray.includes('')) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Rellene todos los campos con \"Si\" o \"No\"",
      });
      return
    }


    this.dashboardService.postData(data)
      .subscribe(
        (data: Data) => {

          data.prediction.map((value, index) => {
            value === 1 ? this.messages.push(this.dashboardService.interpretationData[index]) : ''
          })

          const limitedMessages = this.messages.slice(0, 2);
          this.result(limitedMessages)
          this.dashboardService.getRecords().subscribe((data) => {
            console.log(data);

          })
        })
  }



  async result(limitedMessages: string[]) {
    if (limitedMessages.length === 1) {
      await this.dashboardService.addInRecord(limitedMessages[0])
      Swal.fire({
        title : "Cuidado",
        text: `Usted puede tener ${limitedMessages[0]}.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#09f",
        cancelButtonColor: "#FF5555",
        confirmButtonText: "Intentar otra vez",
        cancelButtonText: "Volver al inicio"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload()
        } else {
          this.router.navigateByUrl('/dashboard/home')
        }
      });
    } else if (limitedMessages.length === 2) {
      await this.dashboardService.addInRecord(limitedMessages[0])
      await this.dashboardService.addInRecord(limitedMessages[1])
      Swal.fire({
        title : "Cuidado",
        text: `Usted puede tener ${limitedMessages[0]} y ${limitedMessages[1]}.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#09f",
        cancelButtonColor: "#FF5555",
        confirmButtonText: "Intentar otra vez",
        cancelButtonText: "Volver al inicio"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload()
        } else {
          this.router.navigateByUrl('/dashboard/home')
        }
      });
    }

  }
}
