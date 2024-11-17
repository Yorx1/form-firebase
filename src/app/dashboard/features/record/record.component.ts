import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

type record = [{
  disorder: string
  date: string
}]


@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent implements OnInit {


  showRecord: record = [{
    disorder:'',
    date:''
  }]


  constructor(private dashboardService: DashboardService) { }


  ngOnInit(): void {
    this.dashboardService.getRecords().subscribe(
      (value) => {
        this.showRecord = value.record!
      }
    )
  }
}
