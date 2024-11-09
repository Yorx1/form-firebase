import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'dashboard-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  public user = {
    name: "",
    lastName: "",
    email: ""
  }

  constructor(
    private dashboardService: DashboardService
  ) { }


  ngOnInit(): void {
    const mail = this.dashboardService.getUserEmail()!
    console.log(mail);
    this.dashboardService.getUser(mail)
      .subscribe((data) => {
        data.map(data => {
          if (mail === data["email"]) {
            this.user = data;
          }
          return;
        }
        )
      }
      )
  }

}
