import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { User } from '../../../interfaces/user';


@Component({
  selector: 'dashboard-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  public user?: User = {
    name: '',
    lastName: '',
    email: '',
    birthDate: '',
    description: ''
  }

  constructor(
    private dashboardService: DashboardService
  ) { }


  ngOnInit(): void {

    this.dashboardService.getUser()
      .subscribe((data) => {
        this.user = data
      })

  }

}

