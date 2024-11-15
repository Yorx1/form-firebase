import { docData } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { User } from '../../../interfaces/user';
import { map, tap } from 'rxjs';

@Component({
  selector: 'dashboard-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  public user?: User = {
    name: "",
    lastName: "",
    email: ""
  }

  constructor(
    private dashboardService: DashboardService
  ) { }


  ngOnInit(): void {

    this.dashboardService.getUser()
    .subscribe((data) => {
      this.user = data
    });
    
    
    // (data) => {
    //   data.map(({ userId }, i) => {
    //     userId == this.auth.currentUser?.uid ? (data[i]) : ""
    //   })



  }

}

